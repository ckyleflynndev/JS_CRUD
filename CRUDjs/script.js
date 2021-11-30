const students = [
    { name: "I P Freely", studentID: 69696 },
    { name: "Wayne Pearce", studentID: 59585 },
    { name: "Randy Flynn", studentID: 1569 },
    { name: "Diane Pearce", studentID: 7989 },
    { name: "Kyle Flynn", studentID: 593159 },
    { name: "Micheal Pearce", studentID: 69595 },
]


const mainDiv = document.querySelector("main");

const nameInput = document.querySelector('input[name="name"]')
const studentIDinput = document.querySelector('input[name="studentID"]');
const createButton = document.querySelector("button#createitem");

const updateName = document.querySelector('input[name="updatename"]');
const updateStudentID = document.querySelector('input[name="updatestudentID"]');
const updateFormButton = document.querySelector("button#updateitem");


const renderData = () => {

    mainDiv.innerHTML = "";

    students.forEach((student, index) => {

        const studentH2 = document.createElement("h3");
        const buttonContainer = document.createElement("aside");

        //delete
        const deleteButton = document.createElement(`button`);
        deleteButton.id = index;
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', event => {
            students.splice(index, 1);
            renderData();

        })
        buttonContainer.appendChild(deleteButton);

        //update
        const updateButton = document.createElement(`button`);
        updateButton.id = index;
        updateButton.innerText = "Update";

        updateButton.addEventListener('click', event => {
            updateName.value = student.name;
            updateStudentID.value = student.studentID;
            updateFormButton.setAttribute("toupdate", index);
        })
        buttonContainer.appendChild(updateButton);


        studentH2.innerText = `Name: ${student.name}
        ID: ${student.studentID}`;
        mainDiv.appendChild(studentH2);
        mainDiv.appendChild(buttonContainer);
    });
}

const createData = () => {
    const name = nameInput.value;
    const studentID = studentIDinput.value;
    const newPerson = { name, studentID };
    students.unshift(newPerson);
    renderData();
}

const updateData = event => {
    const index = event.target.getAttribute("toupdate");
    const name = updateName.value;
    const studentID = updateStudentID.value;
    students[index] = { name, studentID };
    renderData();
}

renderData();
updateFormButton.addEventListener('click', updateData);
createButton.addEventListener("click", createData);