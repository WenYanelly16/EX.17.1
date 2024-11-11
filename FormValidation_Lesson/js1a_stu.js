"use strict";
/*    Intermediate JavaScript
      Chapter: Form Validation
      CMPS2151 - Web Development
	  In Class Exercise

      Author: 
      Date:   

      Filename: js1a_stu.js
 */



// Add eventListner here
window.addEventListener("load", function() {
      let orderForm = document.forms.orderForm;
      let model = orderForm.elements.model;
  
      // Set focus to model field
      model.focus();
  
      // Add event listeners for every form element to trigger calcOrder on change
      for (let i = 0; i < orderForm.elements.length; i++) {
          orderForm.elements[i].addEventListener("change", calcOrder);
      }
  
      // Calculate order costs
      function calcOrder() {
          let quantity = orderForm.elements.qty;
  
          // Calculate model cost
          let mIndex = model.selectedIndex;
          let modelCost = model.options[mIndex].value * quantity.value;
  
          // Retrieve protection plan cost
          let planValue = document.querySelector('input[name="plan"]:checked').value;
          let planCost = planValue * quantity.value;
  
          // Calculate subtotal, sales tax, and total cost
          let subtotal = parseFloat(modelCost) + parseFloat(planCost);
          let salesTax = subtotal * 0.05;
          let totalCost = subtotal + salesTax;
  
          // Format costs as currency and display
          orderForm.elements.modelCost.value = modelCost.toLocaleString("en-US", {style: "currency", currency: "USD"});
          orderForm.elements.planCost.value = planCost.toLocaleString("en-US", {style: "currency", currency: "USD"});
          orderForm.elements.subtotal.value = subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"});
          orderForm.elements.salesTax.value = salesTax.toLocaleString("en-US", {style: "currency", currency: "USD"});
          orderForm.elements.totalCost.value = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});
  
          // Store selected model and plan in hidden fields
          orderForm.elements.modelName.value = model.options[mIndex].text;
          let selectedPlan = document.querySelector('input[name="plan"]:checked');
          orderForm.elements.planName.value = selectedPlan.labels[0].textContent;
      }
  });
  