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
function calculateAge(){
    const currentMonth = (new Date().getMonth() + 1);
    let yearsPassed = new Date().getFullYear() - yearInput.value;
    const monthsPassed = 12 - ((monthInput.value - currentMonth) + 12*yearsPassed)%12;
    const daysPassed = new Date().getDate();
    if(monthInput.value > currentMonth){
        yearsPassed--;
    };
    displayAge(yearsPassed,monthsPassed,daysPassed);                                                                                                                        
};
function displayAge(year,month,day){
    yearContainer.textContent = year;
    monthContainer.textContent = month;
    dayContainer.textContent = day;    
}
submitIcon.addEventListener("click",calculateAge)