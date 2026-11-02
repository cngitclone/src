document.addEventListener("DOMContentLoaded", function () {
  if (window.__planInit) return;
  window.__planInit = true;

  var goalRadios = document.querySelectorAll('input[name="fitnessGoal"]');
  var dayCheckboxes = document.querySelectorAll(".day-checkbox");
  var goalDisplay = document.getElementById("goalDisplay");
  var calcPlanBtn = document.getElementById("calcPlanBtn");
  var resetPlanBtn = document.getElementById("resetPlanBtn");
  var workoutDays = document.getElementById("workoutDays");
  var caloriesBurned = document.getElementById("caloriesBurned");
  var restDays = document.getElementById("restDays");

  var caloriesPerDay = { weightloss: 400, muscle: 300, stamina: 350 };

  // while loop: find the selected fitness goal
  function getGoal() {
    var i = 0;
    var selected = "None";
    while (i < goalRadios.length) {
      if (goalRadios[i].checked) {
        selected = goalRadios[i].value;
        break;
      }
      i++;
    }
    return selected;
  }

  function updateGoal() {
    goalDisplay.textContent = getGoal();
  }

  for (var r = 0; r < goalRadios.length; r++) {
    goalRadios[r].addEventListener("change", updateGoal);
  }

  calcPlanBtn.addEventListener("click", function () {
    // for loop: count selected workout days
    var days = 0;
    for (var i = 0; i < dayCheckboxes.length; i++) {
      if (dayCheckboxes[i].checked) days++;
    }

    // do...while loop: accumulate calories day by day
    var goal = getGoal();
    var perDay = caloriesPerDay[goal] || 0;
    var total = 0;
    var d = 0;
    do {
      if (d < days) total += perDay;
      d++;
    } while (d < days);

    workoutDays.textContent = days;
    caloriesBurned.textContent = total;
    restDays.textContent = 7 - days;
  });

  resetPlanBtn.addEventListener("click", function () {
    for (var i = 0; i < dayCheckboxes.length; i++) dayCheckboxes[i].checked = false;
    for (var r = 0; r < goalRadios.length; r++) goalRadios[r].checked = false;
    goalDisplay.textContent = "None";
    workoutDays.textContent = "0";
    caloriesBurned.textContent = "0";
    restDays.textContent = "0";
  });
});