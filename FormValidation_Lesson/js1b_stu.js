"use strict";
/*    Intermediate JavaScript
      Chapter: Form Validation
      CMPS2151 - Web Development
	  In Class Exercise

      Author: 
      Date:   

      Filename: js1b_stu.js
 */



// Validate the payment when the submit button is clicked Add eventListners here
window.addEventListener("load", function() {
   let subButton = document.getElementById("subButton");

   // Event listeners for validation functions
   subButton.addEventListener("click", validateName);
   subButton.addEventListener("click", validateCard);
   subButton.addEventListener("click", validateNumber);
   subButton.addEventListener("click", validateMonth);
   subButton.addEventListener("click", validateYear);
   subButton.addEventListener("click", validateCVC); // Add validateCVC to the event listener

   // Validate cardholder name
   function validateName() {
       let cardName = document.getElementById("cardName");
       if (cardName.validity.valueMissing) {
           cardName.setCustomValidity("Enter your name as it appears on the card");
       } else {
           cardName.setCustomValidity("");
       }
   }

   // Validate credit card selection
   function validateCard() {
       let card = document.forms.payment.elements.credit[0];
       if (card.validity.valueMissing) {
           card.setCustomValidity("Select your credit card");
       } else {
           card.setCustomValidity("");
       }
   }

   // Validate credit card number
   function validateNumber() {
       let cNum = document.getElementById("cardNumber");
       if (cNum.validity.valueMissing) {
           cNum.setCustomValidity("Enter your card number");
       } else if (cNum.validity.patternMismatch) {
           cNum.setCustomValidity("Enter a valid card number");
       } else {
           cNum.setCustomValidity("");
       }
   }

   // Validate expiration month
   function validateMonth() {
       let month = document.getElementById("expMonth");
       if (month.selectedIndex === 0) {
           month.setCustomValidity("Select the expiration month");
       } else {
           month.setCustomValidity("");
       }
   }

   // Validate expiration year
   function validateYear() {
       let year = document.getElementById("expYear");
       if (year.selectedIndex === 0) {
           year.setCustomValidity("Select the expiration year");
       } else {
           year.setCustomValidity("");
       }
   }

   // Validate CVC based on card type
   function validateCVC() {
       let card = document.querySelector('input[name="credit"]:checked').value; // Get selected card type
       let cvc = document.getElementById("cvc");

       if (cvc.validity.valueMissing) {
           cvc.setCustomValidity("Enter your CVC number");
       } else if (card === "amex" && !/^\d{4}$/.test(cvc.value)) {
           // Amex requires a 4-digit CVC
           cvc.setCustomValidity("Enter a 4-digit CVC for American Express");
       } else if (card !== "amex" && !/^\d{3}$/.test(cvc.value)) {
           // Other cards require a 3-digit CVC
           cvc.setCustomValidity("Enter a 3-digit CVC for this card type");
       } else {
           cvc.setCustomValidity("");
       }
   }
});





// validateName() Function: Check if the owner's name is entered on the card ---------------  




// validateCard() Function: Check if a credit card has been selected -------------------- 





// validateNumber() Function: Check if the card number is valid --------------------






// validateMonth() Function: Check that a month is selected for the expiration date ------------------------





// validateYear() Function: Check that a year is selected for the expiration date ----------------------





// validateCVC() Function: Check that CVC is valid, check which card was selected and validate CVC ------------
























/* ------- Luhn Algorithm used for Validating Credit Card Numbers   ----- */

function luhn(idNum) {
   let string1 = "";
   let string2 = "";
   
   // Retrieve the odd-numbered digits starting from the back
   for (let i = idNum.length - 1; i >= 0; i-= 2) {
      string1 += idNum.charAt(i);
   }
   // Retrieve the even-numbered digits starting from the back and double them
   for (let i = idNum.length - 2; i >= 0; i-= 2) {
      string2 += 2*idNum.charAt(i);
   }
   
   // Return whether the sum of the digits is divisible by 10
   return sumDigits(string1 + string2) % 10 === 0;
   
   function sumDigits(numStr) {
      let digitTotal = 0;
      for (let i = 0; i < numStr.length; i++) {
         digitTotal += parseInt(numStr.charAt(i));
      }
      return digitTotal;
   }
}
   
