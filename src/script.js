const yearInput = document.querySelector("#Year-input");
const monthInput = document.querySelector("#Month-input");
const dayInput = document.querySelector("#Day-input");
const yearLabel = document.querySelector("#Year-label");
const monthLabel = document.querySelector("#Month-label");
const dayLabel = document.querySelector('#Day-label');
const yearErrorMessage = document.querySelector('#Year-error-message');
const monthErrorMessage = document.querySelector('#Month-error-message');
const dayErrorMessage = document.querySelector('#Day-error-message');
const errorLabels = document.querySelectorAll(".error-label");
const errorMessages = document.querySelectorAll(".error-message");
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
    errorLabels.forEach((label) => {
        label.classList.remove("error-state");
    });
    errorMessages.forEach((label) => {
        label.classList.remove("error-state")
    });
    //Validating if user entered correct date
    const dateIsValid = validateData(birthYear, birthMonth, birthDay);
    if (!dateIsValid) {
        return;
    };
    let yearsDifference = currentYear - birthYear;
    let monthsDifference = currentMonth - birthMonth;
    let daysDifference = currentDay - birthDay;
    //Adjusting months difference if entered month is ahead of current month
    if (monthsDifference < 0) {
        yearsDifference--;
        monthsDifference += 12;
    };
    //Handeling Case when entered month and current month are same or currentDay is ahead of entered day
    if (monthsDifference === 0 || daysDifference >= 0) {
        daysDifference = Math.abs(daysDifference);
        displayAge(yearsDifference, monthsDifference, daysDifference);
        return;
    };
    //Calculating day difference if current day is behind entered day
    if (daysDifference < 0) {
        monthsDifference--;
        const previousMonth = (currentMonth - 1) === 0 ? 12 : currentMonth - 1;
        //Handeling case if month is February
        if ((previousMonth) === 2) {
            const leapYar = isLeapYear(birthDay);
            daysDifference = leapYar ? (29 - birthDay) + currentDay : (28 - birthDay) + currentDay;
        } else if ((previousMonth) % 2 === 0) {
            daysDifference = (30 - birthDay) + currentDay;
        } else if ((previousMonth) % 2 === 1) {
            daysDifference = (31 - birthDay) + currentDay;
        };
    };
    displayAge(yearsDifference, monthsDifference, daysDifference);
};
function validateData(Year, Month, Day) {
    const currentYear = new Date().getFullYear();
    const currentMonth = (new Date().getMonth() + 1);
    const currentDay = new Date().getDate();
    let isValid = true;
    //Handeling case if Current year is same as entered year but month or day is in future
    if (currentYear === Year) {
        if (Month > currentMonth) {
            addErrorState(monthLabel,monthErrorMessage);
            isValid = false;
        };
        if (Day > currentDay) {
            addErrorState(dayLabel,dayErrorMessage);
            isValid = false;
        };
    }
    //Handeling case when date is in future
    if (Year > currentYear) {
        addErrorState(yearLabel,yearErrorMessage);
        isValid = false;
    };
    if (Month < 1 || Month > 12) {
        addErrorState(monthLabel,monthErrorMessage);
        isValid = false;
    };
    if (Day < 1 || Day > 31) {
        addErrorState(dayLabel,dayErrorMessage);
        isValid = false;
    };
    return isValid;
};
function addErrorState(unitLabel,errorMessage){
    unitLabel.classList.add("error-state");
    errorMessage.classList.add("error-state")
};
function isLeapYear(year) {
    if(((year % 4 === 0 && year % 100 === 0) && year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0) ){
        return true;
    };
    return false;
};
function displayAge(year, month, day) {
    yearContainer.textContent = year;
    monthContainer.textContent = month;
    dayContainer.textContent = day;
};
submitIcon.addEventListener("click", calculateAge);