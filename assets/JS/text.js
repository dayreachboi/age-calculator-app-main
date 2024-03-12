// function that calculate the Age
function calculateAge() {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  //validate day, month, and year inputs
  let isErrorDay = isNaN(day) || day < 1 || day > 31;
  let isErrorMonth = isNaN(month) || month < 1 || month > 12;
  let isErrorYear = isNaN(year) || year < 1900 || year > 2024;

  //error Message under the input field when the input is invalid
  document.getElementById("errorDay").style.display = isErrorDay
    ? "block"
    : "none";
  document.getElementById("errorMonth").style.display = isErrorMonth
    ? "block"
    : "none";
  document.getElementById("errorYear").style.display = isErrorYear
    ? "block"
    : "none";

  //Error Message that change the label to red when the is invalid
  document
    .getElementById("dayLabel")
    .classList.toggle("error-label", isErrorDay);
  document
    .getElementById("monthLabel")
    .classList.toggle("error-label", isErrorMonth);
  document
    .getElementById("yearLabel")
    .classList.toggle("error-label", isErrorYear);

  const currentDate = new Date();
  const birthDate = new Date(year, month - 1, day);

  //
  let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
  let ageMonths = currentDate.getMonth() - birthDate.getMonth();
  let ageDays = currentDate.getDate() - birthDate.getDate();

  //To displat - - instead of NaN while inputting for other field before the final result is displayed
  if (isNaN(ageYears)) {
    ageYears = "- -";
  }
  if (isNaN(ageMonths)) {
    ageMonths = "- -";
  }
  if (isNaN(ageDays)) {
    ageDays = "- -";
  }
  //
  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths += 12;
  }

  //
  if (ageDays < 0) {
    const lastMonthDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
    ageDays = lastMonthDay + ageDays;
    ageMonths--;
  }

  //To display - - when either or all of the input are invalid
  if (isErrorDay || isErrorMonth || isErrorYear) {
    const result = document.getElementById("result");
    result.innerHTML = `<span class="placeholder">- -</span> years <br> <span class="placeholder"> 
- -</span> months <br> <span class="placeholder">
- -</span> days`;
    return;
  }

  //here the final result is displayed in the HTML file
  const result = document.getElementById("result");
  result.innerHTML = `<span class="placeholder">${ageYears}</span> years <br> <span class="placeholder"> 
  ${ageMonths}</span> months <br> <span class="placeholder">
  ${ageDays} </span> days`;
}
