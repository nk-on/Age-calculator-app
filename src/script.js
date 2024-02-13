/*View an age in years, months, and days after submitting a valid date through the form
 //get current year/month/day
 //subtract age year entered by user to current year
 //display directly current month  
 //display result 
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
const submitIcon = document.querySelector(".submit-icon");
function calculateAge(){
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = getDayOfYear(new Date());                                                                                                                                           
};
function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = (date - start) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    return dayOfYear;
}

submitIcon.addEventListener("click",calculateAge)