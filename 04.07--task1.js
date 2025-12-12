let students = new Map();
let studentIdCounter = 1;

// Load from localStorage on page load
window.onload = function () {
  const storedData = localStorage.getItem("studentsMap");
  const storedCounter = localStorage.getItem("studentIdCounter");

  if (storedData) students = new Map(JSON.parse(storedData));
  if (storedCounter) studentIdCounter = parseInt(storedCounter);

  showTab('addTab'); // Show default tab
  displayAllStudents(); // Optional
};

// Show the selected tab and hide others
function showTab(tabId) {
  document.querySelectorAll(".tab-content").forEach(tab => {
    tab.style.display = "none";
  });
  document.getElementById(tabId).style.display = "block";
}

// Save Map and counter to localStorage
function saveToLocalStorage() {
  localStorage.setItem("studentsMap", JSON.stringify(Array.from(students.entries())));
  localStorage.setItem("studentIdCounter", studentIdCounter.toString());
}

// ADD Student
document.getElementById("addForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("addName").value.trim();
  const age = parseInt(document.getElementById("addAge").value);
  const course = document.getElementById("addCourse").value.trim();

  if (!name || !age || !course) {
    alert("All fields required.");
    return;
  }

  const id = studentIdCounter++;
  students.set(id, { name, age, course });
  saveToLocalStorage();

  alert(Student Added. ID: ${id});
  this.reset();
  displayStudent(id);
});

// SEARCH Student
function searchStudent() {
  const id = parseInt(document.getElementById("searchId").value);
  const student = students.get(id);

  if (student) {
    displayStudent(id);
  } else {
    document.getElementById("output").innerHTML = <h3 id="error">Student ID ${id} not found.</h3>;
  }
}

// UPDATE Student
function updateStudent() {
  const id = parseInt(document.getElementById("updateId").value);
  if (!students.has(id)) {
    alert("Student ID not found.");
    return;
  }

  const name = document.getElementById("updateName").value.trim();
  const age = parseInt(document.getElementById("updateAge").value);
  const course = document.getElementById("updateCourse").value.trim();

  if (!name || !age || !course) {
    alert("All fields required.");
    return;
  }

  students.set(id, { name, age, course });
  saveToLocalStorage();
  alert(Student ID ${id} updated.);
  displayStudent(id);
}

// DELETE Student
function deleteStudent() {
  const id = parseInt(document.getElementById("deleteId").value);

  if (students.has(id)) {
    students.delete(id);
    saveToLocalStorage();
    alert(Student ID ${id} deleted.);
    displayAllStudents();
  } else {
    alert("ID not found.");
  }
}

// DISPLAY one student
function displayStudent(id) {
  const student = students.get(id);
  document.getElementById("output").innerHTML = `
    <h3>Student Details:</h3>
    <table>
      <tr><th>ID</th><th>Name</th><th>Age</th><th>Course</th></tr>
      <tr>
        <td>${id}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.course}</td>
      </tr>
    </table>
  `;
}

// DISPLAY all students
function displayAllStudents() {
  if (students.size === 0) {
    document.getElementById("output").innerHTML = "<h3>No students found.</h3>";
    return;
  }

  let html = `
    <h3>All Students:</h3>
    <table>
      <tr><th>ID</th><th>Name</th><th>Age</th><th>Course</th></tr>
  `;

  students.forEach((student, id) => {
    html += `
      <tr>
        <td>${id}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.course}</td>
      </tr>
    `;
  });

  html += "</table>";
  document.getElementById("output").innerHTML = html;
}