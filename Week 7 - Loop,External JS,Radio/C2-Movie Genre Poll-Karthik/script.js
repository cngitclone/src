document.addEventListener("DOMContentLoaded", function () {
    if (window.__pollInit) return;
    window.__pollInit = true;
  
    var ageRadios = document.querySelectorAll('input[name="ageGroup"]');
    var ageDisplay = document.getElementById("ageDisplay");
    var pollSubmitBtn = document.getElementById("pollSubmitBtn");
    var pollResetBtn = document.getElementById("pollResetBtn");
    var genreCount = document.getElementById("genreCount");
    var totalGenres = document.getElementById("totalGenres");
    var selectedGenres = document.getElementById("selectedGenres");
  
    var checkboxes = document.querySelectorAll(".genre-checkbox");
    totalGenres.textContent = checkboxes.length;
  
    // while loop: find the selected age group
    function updateAge() {
      var i = 0;
      var selected = "None";
      while (i < ageRadios.length) {
        if (ageRadios[i].checked) {
          selected = ageRadios[i].value;
          break;
        }
        i++;
      }
      ageDisplay.textContent = selected;
    }
  
    for (var r = 0; r < ageRadios.length; r++) {
      ageRadios[r].addEventListener("change", updateAge);
    }
  
    pollSubmitBtn.addEventListener("click", function () {
      // for loop: count selected genres
      var count = 0;
      var picked = [];
      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          count++;
          picked.push(checkboxes[i].value);
        }
      }
  
      // do...while loop: build the genre result list
      var list = "";
      var j = 0;
      do {
        if (picked.length > 0) {
          list += (j > 0 ? ", " : "") + picked[j];
        }
        j++;
      } while (j < picked.length);
  
      genreCount.textContent = count;
      totalGenres.textContent = checkboxes.length;
      selectedGenres.textContent = list || "None";
    });
  
    pollResetBtn.addEventListener("click", function () {
      for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
      }
      genreCount.textContent = 0;
      selectedGenres.textContent = "None";
    });
  });