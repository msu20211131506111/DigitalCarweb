      function displayCarDetails(CarType) {
         document.getElementById("CarType").innerHTML = CarType;
         document.getElementById("CarTypePurchase").innerHTML = CarType;
         document.getElementById("CarTypePayment").innerHTML = CarType;
         document.getElementById("CarDetailsContainer").style.display = "block";
      }

      function displayPurchase() {
         document.getElementById("purchaseContainer").style.display = "block";
         document.getElementById("CarDetailsContainer").style.display = "none";
      }

      function displayPayment() {
         var customerName = document.getElementById("customerName").value;
         var CarType = document.getElementById("CarTypePurchase").innerHTML;
         var withIce = document.getElementById("withAC").checked ? "withAC" : "withoutAC";
         var price = withIce === "withAC" ? "$10" : "$8";
         document.getElementById("customerDetails").innerHTML = customerName + " (" + withAC + ")";
         document.getElementById("price").innerHTML = price;
         document.getElementById("paymentContainer").style.display = "block";
         document.getElementById("purchaseContainer").style.display = "none";
      }

      function returnHome() {
         document.getElementById("paymentContainer").style.display = "none";
         document.getElementById("homeContainer").style.display = "block";
      }
   