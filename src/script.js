/*View an age in years, months, and days after submitting a valid date through the form
Receive validation errors if:
Any field is empty when the form is submitted
The day number is not between 1-31
The month number is not between 1-12
The date is in the future
The date is invalid, e.g. 31/04/1991 (there are 30 days in April) */
const yearInput = document.querySelector("#Year-input");
const monthInput = document.querySelector("#Month-input");
const dayInput = document.querySelector("#Day-input");
const yearContainer = document.querySelector("[Year]");
const monthContainer = document.querySelector("[Month]");
const dayContainer = document.querySelector("[Day]");
const submitIcon = document.querySelector(".submitIcon");