document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    document.getElementById("registrationPage").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
  });

  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      document.getElementById("loginPage").style.display = "none";
      document.getElementById("attendancePage").style.display = "block";
    } else {
      alert("Invalid username or password.");
    }
  });

  function recordAttendance(selectElement) {
    var selectedOption = selectElement.value;
    var attendanceCell = selectElement.parentNode;

    if (selectedOption === "Present") {
      attendanceCell.className = "present";
    } else if (selectedOption === "Absent") {
      attendanceCell.className = "absent";
    }

    var absentCount = document.querySelectorAll('.absent').length;
    var presentCount = document.querySelectorAll('.present').length;

    document.getElementById("absentCount").textContent = absentCount;
    document.getElementById("presentCount").textContent = presentCount;

  }
  