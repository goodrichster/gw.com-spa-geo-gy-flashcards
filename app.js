(function () {
  "use strict";

  var STORAGE_KEY = "gw-geo-flashcards-session";

  var TOPIC_LABELS = {
    "30-60-90": "30-60-90 triangle",
    "45-45-90": "45-45-90 triangle",
    pythagorean: "Pythagorean Theorem",
    "law-of-cosines": "Law of Cosines",
    "law-of-sines": "Law of Sines",
    "soh-cah-toa": "SOH-CAH-TOA",
    "reciprocal-trig": "Reciprocal trig functions",
  };

  var TYPE_LABELS = {
    rule: "Rule / definition",
    problem: "Problem / solution",
  };

  function defaultScoreState() {
    return {
      correct: 0,
      incorrect: 0,
      total: 0,
      currentStreak: 0,
      bestStreak: 0,
      byTopic: {},
      missedIds: [],
    };
  }

  var scoreState = defaultScoreState();
  var ratingBusy = false;

  var cards = window.GEOMETRY_CARDS || [];
  var topicFilter = document.getElementById("topic-filter");
  var shuffleToggle = document.getElementById("shuffle-toggle");
  var reviewMissedToggle = document.getElementById("review-missed-toggle");
  var modeStudy = document.getElementById("mode-study");
  var modeBrowse = document.getElementById("mode-browse");
  var studyPanel = document.getElementById("study-panel");
  var browsePanel = document.getElementById("browse-panel");
  var progressEl = document.getElementById("progress");
  var flipCard = document.getElementById("flip-card");
  var cardInner = document.getElementById("card-inner");
  var cardTopic = document.getElementById("card-topic");
  var cardTopicBack = document.getElementById("card-topic-back");
  var cardType = document.getElementById("card-type");
  var cardFrontText = document.getElementById("card-front-text");
  var cardBackText = document.getElementById("card-back-text");
  var btnPrev = document.getElementById("btn-prev");
  var btnNext = document.getElementById("btn-next");
  var cardList = document.getElementById("card-list");
  var browseCount = document.getElementById("browse-count");
  var scoreCorrect = document.getElementById("score-correct");
  var scoreIncorrect = document.getElementById("score-incorrect");
  var scoreTotal = document.getElementById("score-total");
  var scoreByTopic = document.getElementById("score-by-topic");
  var scoreByTopicRow = document.getElementById("score-by-topic-row");
  var btnResetScore = document.getElementById("btn-reset-score");
  var deckProgressBar = document.getElementById("deck-progress-bar");
  var ratingRow = document.getElementById("rating-row");
  var btnGotIt = document.getElementById("btn-got-it");
  var btnReview = document.getElementById("btn-review");
  var headerToast = document.getElementById("header-toast");
  var headerToastHideTimer = null;
  var headerToastFadeTimer = null;

  var filteredOrder = [];
  var index = 0;

  function showHeaderToast(message) {
    var el = headerToast;
    if (!el) return;
    if (headerToastHideTimer) window.clearTimeout(headerToastHideTimer);
    if (headerToastFadeTimer) window.clearTimeout(headerToastFadeTimer);
    el.textContent = message;
    el.removeAttribute("hidden");
    el.classList.remove("header-toast--show");
    void el.offsetWidth;
    el.classList.add("header-toast--show");
    headerToastHideTimer = window.setTimeout(function () {
      el.classList.remove("header-toast--show");
      headerToastFadeTimer = window.setTimeout(function () {
        el.setAttribute("hidden", "");
        el.textContent = "";
      }, 350);
    }, 5000);
  }

  function ensureTopic(topic) {
    if (!scoreState.byTopic[topic]) {
      scoreState.byTopic[topic] = { correct: 0, incorrect: 0 };
    }
  }

  function syncTotalFromParts() {
    scoreState.total = scoreState.correct + scoreState.incorrect;
  }

  function loadScoreState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var parsed = JSON.parse(raw);
      var base = defaultScoreState();
      if (typeof parsed.correct === "number") base.correct = parsed.correct;
      if (typeof parsed.incorrect === "number") base.incorrect = parsed.incorrect;
      if (typeof parsed.currentStreak === "number") base.currentStreak = parsed.currentStreak;
      if (typeof parsed.bestStreak === "number") base.bestStreak = parsed.bestStreak;
      if (parsed.byTopic && typeof parsed.byTopic === "object") base.byTopic = parsed.byTopic;
      if (Array.isArray(parsed.missedIds)) base.missedIds = parsed.missedIds.slice();
      syncTotalFromParts();
      if (base.total !== base.correct + base.incorrect) {
        base.total = base.correct + base.incorrect;
      }
      scoreState = base;
    } catch (e) {
      scoreState = defaultScoreState();
    }
  }

  function saveScoreState() {
    syncTotalFromParts();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(scoreState));
    } catch (e) {
      /* ignore quota / private mode */
    }
  }

  function updateScoreUI() {
    syncTotalFromParts();
    scoreCorrect.textContent = String(scoreState.correct);
    scoreIncorrect.textContent = String(scoreState.incorrect);
    scoreTotal.textContent = String(scoreState.total);
    updateTopicMeta();
  }

  function updateTopicMeta() {
    if (!scoreByTopic) return;
    if (!scoreState.total) {
      scoreByTopic.textContent = "";
      if (scoreByTopicRow) scoreByTopicRow.hidden = true;
      return;
    }
    var parts = [];
    Object.keys(scoreState.byTopic).forEach(function (t) {
      var b = scoreState.byTopic[t];
      var sum = (b.correct || 0) + (b.incorrect || 0);
      if (sum === 0) return;
      var label = TOPIC_LABELS[t] || t;
      parts.push(label + " +" + (b.correct || 0) + " / −" + (b.incorrect || 0));
    });
    if (parts.length) {
      scoreByTopic.textContent = "This session: " + parts.join(" · ");
      if (scoreByTopicRow) scoreByTopicRow.hidden = false;
    } else {
      scoreByTopic.textContent = "";
      if (scoreByTopicRow) scoreByTopicRow.hidden = true;
    }
  }

  function updateDeckProgressBar() {
    if (!deckProgressBar) return;
    var n = filteredOrder.length;
    if (n === 0) {
      deckProgressBar.style.width = "0%";
      deckProgressBar.setAttribute("aria-valuenow", "0");
      deckProgressBar.setAttribute("aria-valuemax", "0");
      return;
    }
    var pct = ((index + 1) / n) * 100;
    deckProgressBar.style.width = pct + "%";
    deckProgressBar.setAttribute("aria-valuenow", String(Math.round(pct)));
    deckProgressBar.setAttribute("aria-valuemax", "100");
  }

  function updateRatingRowVisibility() {
    if (!ratingRow || !btnGotIt || !btnReview) return;
    var empty = filteredOrder.length === 0;
    var flipped = flipCard.classList.contains("is-flipped");
    if (empty || !flipped || studyPanel.classList.contains("hidden")) {
      ratingRow.hidden = true;
      return;
    }
    ratingRow.hidden = false;
    btnGotIt.disabled = ratingBusy;
    btnReview.disabled = ratingBusy;
  }

  function getFilteredCards() {
    var topic = topicFilter.value;
    var list = cards.filter(function (c) {
      return topic === "all" || c.topic === topic;
    });
    if (reviewMissedToggle && reviewMissedToggle.checked) {
      var missed = scoreState.missedIds;
      list = list.filter(function (c) {
        return missed.indexOf(c.id) >= 0;
      });
    }
    return list;
  }

  function shuffleArray(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  function rebuildOrder() {
    var list = getFilteredCards();
    filteredOrder = shuffleToggle.checked ? shuffleArray(list) : list.slice();
    index = 0;
    setFlipped(false);
    ratingBusy = false;
    renderStudy();
    renderBrowse();
  }

  function setFlipped(on) {
    flipCard.classList.toggle("is-flipped", on);
    flipCard.setAttribute(
      "aria-label",
      on ? "Show question (front of card)" : "Show answer (back of card)"
    );
    updateRatingRowVisibility();
  }

  function markCorrect() {
    if (filteredOrder.length === 0 || ratingBusy) return;
    var card = filteredOrder[index];
    if (!card) return;
    ratingBusy = true;
    btnGotIt.disabled = true;
    btnReview.disabled = true;

    scoreState.correct += 1;
    ensureTopic(card.topic);
    scoreState.byTopic[card.topic].correct += 1;
    scoreState.currentStreak += 1;
    if (scoreState.currentStreak > scoreState.bestStreak) {
      scoreState.bestStreak = scoreState.currentStreak;
    }
    var mid = scoreState.missedIds.indexOf(card.id);
    if (mid >= 0) {
      scoreState.missedIds.splice(mid, 1);
    }
    syncTotalFromParts();
    saveScoreState();
    updateScoreUI();
    advanceAfterMark();
  }

  function markIncorrect() {
    if (filteredOrder.length === 0 || ratingBusy) return;
    var card = filteredOrder[index];
    if (!card) return;
    ratingBusy = true;
    btnGotIt.disabled = true;
    btnReview.disabled = true;

    scoreState.incorrect += 1;
    ensureTopic(card.topic);
    scoreState.byTopic[card.topic].incorrect += 1;
    scoreState.currentStreak = 0;
    if (scoreState.missedIds.indexOf(card.id) < 0) {
      scoreState.missedIds.push(card.id);
    }
    syncTotalFromParts();
    saveScoreState();
    updateScoreUI();
    advanceAfterMark();
  }

  function advanceAfterMark() {
    var n = filteredOrder.length;
    if (n === 0) {
      ratingBusy = false;
      renderStudy();
      return;
    }
    flipCard.classList.add("is-advancing");
    window.setTimeout(function () {
      flipCard.classList.remove("is-advancing");
      if (reviewMissedToggle && reviewMissedToggle.checked) {
        filteredOrder.splice(index, 1);
        if (filteredOrder.length === 0) {
          index = 0;
        } else if (index >= filteredOrder.length) {
          index = filteredOrder.length - 1;
        }
      } else {
        if (index < filteredOrder.length - 1) {
          index += 1;
        } else {
          index = 0;
        }
      }
      setFlipped(false);
      ratingBusy = false;
      renderStudy();
    }, 180);
  }

  function resetScore() {
    scoreState = defaultScoreState();
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      /* ignore */
    }
    ratingBusy = false;
    updateScoreUI();
    rebuildOrder();
    showHeaderToast("Answer tracking reset.");
  }

  function renderStudy() {
    var n = filteredOrder.length;
    if (n === 0) {
      progressEl.textContent = reviewMissedToggle.checked
        ? "No missed cards for this filter — mark some with Review or turn off “Review missed only.”"
        : "No cards for this filter.";
      cardFrontText.textContent = reviewMissedToggle.checked
        ? "Nothing to review yet, or try another topic."
        : "Choose another topic or add cards in cards.js.";
      cardBackText.textContent = "";
      cardTopic.textContent = "";
      cardTopicBack.textContent = "";
      cardType.textContent = "";
      btnPrev.disabled = true;
      btnNext.disabled = true;
      updateDeckProgressBar();
      updateRatingRowVisibility();
      return;
    }

    if (index >= n) index = n - 1;
    if (index < 0) index = 0;

    var card = filteredOrder[index];
    var label = TOPIC_LABELS[card.topic] || card.topic;
    cardTopic.textContent = label;
    cardTopicBack.textContent = label;
    cardType.textContent = TYPE_LABELS[card.type] || card.type;
    cardFrontText.textContent = card.front;
    cardBackText.textContent = card.back;

    progressEl.textContent = "Card " + (index + 1) + " of " + n;
    btnPrev.disabled = index === 0;
    btnNext.disabled = index === n - 1;
    updateDeckProgressBar();
    ratingBusy = false;
    if (btnGotIt) btnGotIt.disabled = false;
    if (btnReview) btnReview.disabled = false;
    updateRatingRowVisibility();
  }

  function renderBrowse() {
    var list = getFilteredCards();
    browseCount.textContent = list.length + " card" + (list.length === 1 ? "" : "s") + " (current filter)";
    cardList.innerHTML = "";
    list.forEach(function (card) {
      var li = document.createElement("li");
      li.className = "card-list-item";
      var details = document.createElement("details");
      var summary = document.createElement("summary");
      var meta = document.createElement("span");
      meta.className = "topic-pill";
      meta.textContent = TOPIC_LABELS[card.topic] || card.topic;
      summary.appendChild(meta);
      summary.appendChild(document.createTextNode(" "));
      var typeSpan = document.createElement("span");
      typeSpan.className = "type-pill";
      typeSpan.textContent = " · " + (TYPE_LABELS[card.type] || card.type);
      summary.appendChild(typeSpan);
      var frontSpan = document.createElement("span");
      frontSpan.className = "card-list-front";
      frontSpan.textContent = card.front;
      summary.appendChild(frontSpan);
      var backP = document.createElement("div");
      backP.className = "card-list-back";
      backP.textContent = card.back;
      details.appendChild(summary);
      details.appendChild(backP);
      li.appendChild(details);
      cardList.appendChild(li);
    });
  }

  function showMode(mode) {
    var study = mode === "study";
    studyPanel.classList.toggle("hidden", !study);
    browsePanel.classList.toggle("hidden", study);
    modeStudy.classList.toggle("active", study);
    modeBrowse.classList.toggle("active", !study);
    updateRatingRowVisibility();
  }

  topicFilter.addEventListener("change", rebuildOrder);
  shuffleToggle.addEventListener("change", rebuildOrder);
  if (reviewMissedToggle) {
    reviewMissedToggle.addEventListener("change", rebuildOrder);
  }

  modeStudy.addEventListener("click", function () {
    showMode("study");
  });
  modeBrowse.addEventListener("click", function () {
    showMode("browse");
  });

  flipCard.addEventListener("click", function () {
    if (filteredOrder.length === 0) return;
    setFlipped(!flipCard.classList.contains("is-flipped"));
  });

  btnPrev.addEventListener("click", function () {
    if (index > 0) {
      index--;
      setFlipped(false);
      renderStudy();
    }
  });

  btnNext.addEventListener("click", function () {
    if (index < filteredOrder.length - 1) {
      index++;
      setFlipped(false);
      renderStudy();
    }
  });

  if (btnGotIt) btnGotIt.addEventListener("click", markCorrect);
  if (btnReview) btnReview.addEventListener("click", markIncorrect);
  if (btnResetScore) btnResetScore.addEventListener("click", resetScore);

  document.addEventListener("keydown", function (e) {
    if (studyPanel.classList.contains("hidden")) return;
    if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "SELECT")) return;
    if (e.key === "ArrowLeft" && !btnPrev.disabled) {
      e.preventDefault();
      btnPrev.click();
    } else if (e.key === "ArrowRight" && !btnNext.disabled) {
      e.preventDefault();
      btnNext.click();
    } else if (e.key === " " || e.key === "Enter") {
      if (e.target === btnGotIt || e.target === btnReview) return;
      e.preventDefault();
      if (filteredOrder.length) flipCard.click();
    }
  });

  function populateTopics() {
    var seen = {};
    cards.forEach(function (c) {
      seen[c.topic] = true;
    });
    Object.keys(TOPIC_LABELS).forEach(function (id) {
      if (!seen[id]) return;
      var opt = document.createElement("option");
      opt.value = id;
      opt.textContent = TOPIC_LABELS[id];
      topicFilter.appendChild(opt);
    });
  }

  function init() {
    loadScoreState();
    updateScoreUI();
    if (!cards.length) {
      progressEl.textContent = "No cards loaded.";
      return;
    }
    populateTopics();
    rebuildOrder();
  }

  init();
})();

function sendHeight() {
  const height = document.body.scrollHeight;
  window.parent.postMessage({ type: "gw-height", height }, "*");
}

sendHeight();

// Send on load
window.addEventListener("load", sendHeight);

// Send on resize
window.addEventListener("resize", sendHeight);

// Optional: send periodically (handles dynamic changes)
setInterval(sendHeight, 500);
