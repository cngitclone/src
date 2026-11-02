document.addEventListener("DOMContentLoaded", function () {
    if (window.__billInit) return;
    window.__billInit = true;
  
    var itemCheckboxes = document.querySelectorAll(".item-checkbox");
    var paymentRadios = document.querySelectorAll('input[name="paymentMethod"]');
    var paymentDisplay = document.getElementById("paymentDisplay");
    var calculateBtn = document.getElementById("calculateBtn");
    var resetBillBtn = document.getElementById("resetBillBtn");
    var totalAmount = document.getElementById("totalAmount");
    var discountAmount = document.getElementById("discountAmount");
    var finalAmount = document.getElementById("finalAmount");
    var itemList = document.getElementById("itemList");
  
    var discountRates = { cash: 0, card: 0.05, upi: 0.10 };
  
    // while loop: find the selected payment method
    function getPaymentMethod() {
      var i = 0;
      var selected = "None";
      while (i < paymentRadios.length) {
        if (paymentRadios[i].checked) {
          selected = paymentRadios[i].value;
          break;
        }
        i++;
      }
      return selected;
    }
  
    function updatePayment() {
      paymentDisplay.textContent = getPaymentMethod();
    }
  
    for (var r = 0; r < paymentRadios.length; r++) {
      paymentRadios[r].addEventListener("change", updatePayment);
    }
  
    function round2(n) {
      return parseFloat(n.toFixed(2));
    }
  
    calculateBtn.addEventListener("click", function () {
      // for loop: compute total from checked items
      var total = 0;
      var picked = [];
      for (var i = 0; i < itemCheckboxes.length; i++) {
        if (itemCheckboxes[i].checked) {
          var price = parseFloat(itemCheckboxes[i].getAttribute("data-price")) || 0;
          total += price;
          picked.push(itemCheckboxes[i].value + " (Rs." + price + ")");
        }
      }
  
      // do...while loop: build the item summary list
      var summary = "";
      var j = 0;
      do {
        if (picked.length > 0) {
          summary += (j > 0 ? ", " : "") + picked[j];
        }
        j++;
      } while (j < picked.length);
  
      var method = getPaymentMethod();
      var rate = discountRates[method] || 0;
      var discount = round2(total * rate);
      var finalPay = round2(total - discount);
  
      totalAmount.textContent = round2(total);
      discountAmount.textContent = discount;
      finalAmount.textContent = finalPay;
      itemList.textContent = summary || "None";
    });
  
    resetBillBtn.addEventListener("click", function () {
      for (var i = 0; i < itemCheckboxes.length; i++) itemCheckboxes[i].checked = false;
      for (var r = 0; r < paymentRadios.length; r++) paymentRadios[r].checked = false;
      paymentDisplay.textContent = "None";
      totalAmount.textContent = "0";
      discountAmount.textContent = "0";
      finalAmount.textContent = "0";
      itemList.textContent = "None";
    });
  });