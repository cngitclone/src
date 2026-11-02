document.addEventListener("DOMContentLoaded", function () {
    if (window.__quizInit) return;
    window.__quizInit = true;
  
    var studentName = document.getElementById("studentName");
    var subjectRadios = document.querySelectorAll('input[name="subject"]');
    var subjectDisplay = document.getElementById("subjectDisplay");
    var topicCheckboxes = document.querySelectorAll(".topic-checkbox");
    var submitQuizBtn = document.getElementById("submitQuizBtn");
    var resetQuizBtn = document.getElementById("resetQuizBtn");
    var quizScore = document.getElementById("quizScore");
    var quizGrade = document.getElementById("quizGrade");
    var quizRemark = document.getElementById("quizRemark");
    var topicList = document.getElementById("topicList");
  
    var questions = ["q1", "q2", "q3"];
    var answers = ["a", "b", "c"];
    var grades = ["F", "C", "B", "A"];
    var remarks = ["Please Try Again", "Needs Improvement", "Good", "Excellent"];
  
    // while loop: find the selected subject
    function updateSubject() {
      var i = 0;
      var selected = "None";
      while (i < subjectRadios.length) {
        if (subjectRadios[i].checked) {
          selected = subjectRadios[i].value;
          break;
        }
        i++;
      }
      subjectDisplay.textContent = selected;
    }
  
    for (var r = 0; r < subjectRadios.length; r++) {
      subjectRadios[r].addEventListener("change", updateSubject);
    }
  
    submitQuizBtn.addEventListener("click", function () {
      // for loop: evaluate each question
      var score = 0;
      for (var i = 0; i < questions.length; i++) {
        var chosen = document.querySelector('input[name="' + questions[i] + '"]:checked');
        if (chosen && chosen.value === answers[i]) score++;
      }
  
      // do...while loop: build the remark based on score
      var remark = "";
      var k = 0;
      do {
        if (k === score) remark = remarks[k];
        k++;
      } while (k < remarks.length);
  
      // selected topics
      var topics = [];
      for (var t = 0; t < topicCheckboxes.length; t++) {
        if (topicCheckboxes[t].checked) topics.push(topicCheckboxes[t].value);
      }
  
      quizScore.textContent = score;
      quizGrade.textContent = grades[score];
      quizRemark.textContent = remark;
      topicList.textContent = topics.length ? topics.join(", ") : "-";
    });
  
    resetQuizBtn.addEventListener("click", function () {
      studentName.value = "";
      var radios = document.querySelectorAll('input[type="radio"]');
      for (var i = 0; i < radios.length; i++) radios[i].checked = false;
      for (var t = 0; t < topicCheckboxes.length; t++) topicCheckboxes[t].checked = false;
      subjectDisplay.textContent = "None";
      quizScore.textContent = "0";
      quizGrade.textContent = "-";
      quizRemark.textContent = "-";
      topicList.textContent = "-";
    });
  });