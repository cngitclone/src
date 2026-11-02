document.addEventListener("DOMContentLoaded", function () {
    if (window.__attendanceInit) return;
    window.__attendanceInit = true;
  
    var sectionRadios = document.querySelectorAll('input[name="section"]');
    var sectionDisplay = document.getElementById("sectionDisplay");
    var sectionSelect = document.getElementById("sectionSelect");
    var submitBtn = document.getElementById("submitBtn");
    var presentCount = document.getElementById("presentCount");
    var absentCount = document.getElementById("absentCount");
    var attendancePercent = document.getElementById("attendancePercent");
  
    // while loop: find the selected radio and update the display
    function updateSection() {
      var i = 0;
      var selected = "None";
      while (i < sectionRadios.length) {
        if (sectionRadios[i].checked) {
          selected = sectionRadios[i].value;
          break;
        }
        i++;
      }
      sectionDisplay.textContent = selected;
      if (sectionSelect) sectionSelect.value = selected;
    }
  
    for (var r = 0; r < sectionRadios.length; r++) {
      sectionRadios[r].addEventListener("change", updateSection);
    }
  
    submitBtn.addEventListener("click", function () {
      var checkboxes = document.querySelectorAll(".student-checkbox");
      var total = checkboxes.length;
  
      // for loop: count present students
      var present = 0;
      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) present++;
      }
  
      // do...while loop: compute absent count
      var absent = 0;
      var j = present;
      do {
        if (j < total) absent++;
        j++;
      } while (j < total);
  
      var percent = total > 0 ? Math.round((present / total) * 100) : 0;
  
      presentCount.textContent = present;
      absentCount.textContent = absent;
      attendancePercent.textContent = percent + "%";
    });
  });