
        function calculateAge() {
            const day = parseInt(document.getElementById("day").value);
            const month = parseInt(document.getElementById("month").value);
            const year = parseInt(document.getElementById("year").value);

            let isError = false;
            let errorMessage = "";

            // Validate day input
            if (isNaN(day) || day < 1 || day > 31) {
                errorMessage += "Please enter a valid day.<br>";
                isError = true;
            } else {
                document.getElementById("errorDay").style.display = "none";
            }

            // Validate month input
            if (isNaN(month) || month < 1 || month > 12) {
                errorMessage += "Please enter a valid month.<br>";
                isError = true;
            } else {
                document.getElementById("errorMonth").style.display = "none";
            }

            // Validate year input
            if (isNaN(year) || year < 1900 || year > 2024) {
                errorMessage += "Please enter a valid year.<br>";
                isError = true;
            } else {
                document.getElementById("errorYear").style.display = "none";
            }

            if (isError) {
                document.getElementById("error").innerHTML = errorMessage;
                document.getElementById("error").style.display = "block";
                document.getElementById("result").innerHTML = "";
                return;
            } else {
                document.getElementById("error").style.display = "none";
            }

            const currentDate = new Date();
            const birthDate = new Date(year, month - 1, day);

            let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
            let ageMonths = currentDate.getMonth() - birthDate.getMonth();
            let ageDays = currentDate.getDate() - birthDate.getDate();

            if (isNaN(ageYears)) {
                ageYears = '--';
            }

            if (isNaN(ageMonths)) {
                ageMonths = '--';
            }

            if (isNaN(ageDays)) {
                ageDays = '--';
            }

            if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
                ageYears--;
                ageMonths += 12;
            }

            if (ageDays < 0) {
                const lastMonthDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
                ageDays = lastMonthDay + ageDays;
                ageMonths--;
            }

const result = document.getElementById("result");
  result.innerHTML = `<span class="placeholder">${ageYears}</span> years <br> <span class="placeholder"> 
  ${ageMonths}</span> months <br> <span class="placeholder">
  ${ageDays} </span> days`;
        }
