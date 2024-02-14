/*View an age in years, months, and days after submitting a valid date through the form
 
Any field is empty when the form is submitted
The day number is not between 1-31
The month number is not between 1-12
The date is in the future
The date is invalid, e.g. 31/04/1991 (there are 30 days in April) */
const yearInput = document.querySelector("#Year-input");
const monthInput = document.querySelector("#Month-input");
const dayInput = document.querySelector("#Day-input");
const yearContainer = document.querySelector("[data-number=Year]");
const monthContainer = document.querySelector("[data-number=Month]");
const dayContainer = document.querySelector("[data-number=Day]");
const submitIcon = document.querySelector(".submit-icon");
function calculateAge() {
    const birthYear = Number(yearInput.value);
    const birthMonth = Number(monthInput.value);
    const birthDay = Number(dayInput.value);
    const currentYear = new Date().getFullYear();
    const currentMonth = (new Date().getMonth() + 1);
    const currentDay = new Date().getDate();
    let yearsDifference = currentYear - birthYear;
    let monthsDifference = currentMonth - birthMonth;
    let daysDifference = birthDay - currentDay;
    if (monthsDifference < 0) {
        yearsDifference--;
        monthsDifference += 12;
      };
    displayAge(yearsDifference, monthsDifference, daysDifference);
};
function displayAge(year, month, day) {
    yearContainer.textContent = year;
    monthContainer.textContent = month;
    dayContainer.textContent = day;
}
submitIcon.addEventListener("click", calculateAge)