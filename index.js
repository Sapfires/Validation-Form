let students = []
       students = JSON.parse(localStorage.getItem("students"))
       students = students == null ? [] : students
       function initStudents(){
           for (let i=0; i< students.length; i++) {
               let elementDive = document.createElement("div")
               elementDive.classList.add("grid-item")
               elementDive.textContent = students[i]
               document.getElementById('grid').appendChild(elementDive)
           }
       }
       function addNewStudent() {
           let firstName = document.getElementById('fname').value
           let lastName = document.getElementById('lname').value
           let age = document.getElementById('age').value
           if (age >= 18) {
               if (firstName !== "" && lastName !== "") {
                  let firstNameDiv = document.createElement("div")
                  let lastNameDiv = document.createElement("div")
                  let ageDiv = document.createElement("div")
                  students.push(firstName)
                  students.push(lastName)
                  students.push(age)
                  localStorage.setItem("students", JSON.stringify(students))
               }
           } else {
               alert("Age is not an integer >= 18")
           }
       }