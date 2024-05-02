const container = document.querySelector(".box");
const addQuestionCard = document.getElementById("add-question-card");
const cardButton = document.getElementById("save-button");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const errorMessage = document.getElementById("error");
const addQuestion = document.getElementById("add-flashcard");
const closeBtn = document.getElementById("close-button");
let editBool = false;

//Add question when user clicks 'Add New Flashcard' button
addQuestion.addEventListener("click", () => {
  container.classList.add("hide");
  question.value = "";
  answer.value = "";
  addQuestionCard.classList.remove("hide");
});

//Hide and or Create flashcard Card
closeBtn.addEventListener(
  "click",
  (hideQuestion = () => {
    container.classList.remove("hide");
    addQuestionCard.classList.add("hide");
    if (editBool) {
      editBool = false;
      submitQuestion();
    }
  })
);
//Submit User Question
cardButton.addEventListener(
  "click",
  (submitQuestion = () => {
    editBool = false;
    tempQuestion = question.value.trim();
    tempAnswer = answer.value.trim();
    if (!tempQuestion || !tempAnswer) {
      errorMessage.classList.remove("hide");
    } else {
      container.classList.remove("hide");
      errorMessage.classList.add("hide");
      viewlist();
      question.value = "";
      answer.value = "";
    }
  })
);
// Generate Card using user input
function viewlist() {
  var listCard = document.getElementsByClassName("card-list-container");
  var div = document.createElement("div");
  div.classList.add("card");

  // Add Question using user input
  div.innerHTML += `
    <p class="question-div">${question.value}</p>
    <p>Difficulty: ${document.getElementById("difficulty").value}</p>
  `;

  // Add Answer using user input
  var displayAnswer = document.createElement("p");
  displayAnswer.classList.add("answer-div", "hide");
  displayAnswer.innerText = answer.value;

  // Link to show/hide button for answer
  var link = document.createElement("a");
  link.setAttribute("href", "#");
  link.setAttribute("class", "show-hide-btn");
  link.innerHTML = "Show/Hide";
  link.addEventListener("click", () => {
    displayAnswer.classList.toggle("hide");
  });

  div.appendChild(link);
  div.appendChild(displayAnswer);

  // Edit button to edit already submitted question/answer
  let buttonsCon = document.createElement("div");
  buttonsCon.classList.add("buttons-con");

  var editButton = document.createElement("button");
  editButton.setAttribute("class", "edit");
  editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
  editButton.addEventListener("click", () => {
    editBool = true;
    modifyElement(editButton, true);
    addQuestionCard.classList.remove("hide");
  });

  buttonsCon.appendChild(editButton);
  disableButtons(false);

  // Delete Flashcard Button
  var deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "delete");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteButton.addEventListener("click", () => {
    modifyElement(deleteButton);
  });

  buttonsCon.appendChild(deleteButton);
  div.appendChild(buttonsCon);
  listCard[0].appendChild(div);
  hideQuestion();
}

//Modify Elements
const modifyElement = (element, edit = false) => {
  let parentDiv = element.parentElement.parentElement;
  let parentQuestion = parentDiv.querySelector(".question-div").innerText;
  if (edit) {
    let parentAns = parentDiv.querySelector(".answer-div").innerText;
    answer.value = parentAns;
    question.value = parentQuestion;
    disableButtons(true);
  }
  parentDiv.remove();
};

//Disable edit and delete buttons
const disableButtons = (value) => {
  let editButtons = document.getElementsByClassName("edit");
  Array.from(editButtons).forEach((element) => {
    element.disabled = value;
  });
};






















// ///--------------------------------------------------------------
// ///--------------------------------------------------------------
// // Save flashcard to localStorage
// const saveFlashcard = (question, answer) => {
//   let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [];
//   flashcards.push({ question, answer });
//   localStorage.setItem('flashcards', JSON.stringify(flashcards));
// };
// // Retrieve flashcards from localStorage
// const getFlashcards = () => {
//   return JSON.parse(localStorage.getItem('flashcards')) || [];
// };
// // Function to display flashcards on the profile page
// const displayFlashcards = () => {
//   const flashcards = getFlashcards();
//   // Display flashcards on the profile page
//   flashcards.forEach((flashcard) => {
//       // Display each flashcard on the profile page
//       // You can customize how you want to display the flashcards
//   });
// };
// // Call saveFlashcard() when a user creates a flashcard
// cardButton.addEventListener("click", () => {
//   submitQuestion();
//   saveFlashcard(question.value, answer.value);
// });
// // Call displayFlashcards() when the user accesses their profile
// // You can trigger this function when the profile page loads
// displayFlashcards();
































// ///--------------------------------------------------------------
// ///--------------------------------------------------------------
// // Function to authenticate user
// const authenticateUser = (email, password) => {
//   // Check if the provided email and password match the stored credentials
//   // For simplicity, you can hardcode a single user for demonstration
//   const storedEmail = "user@example.com";
//   const storedPassword = "password123";
  
//   if (email === storedEmail && password === storedPassword) {
//       // Store authentication status in localStorage
//       localStorage.setItem('authenticated', 'true');
//       return true;
//   } else {
//       return false;
//   }
// };
// // Check authentication status before displaying flashcards
// const checkAuthentication = () => {
//   const isAuthenticated = localStorage.getItem('authenticated');
//   if (isAuthenticated === 'true') {
//       displayFlashcards();
//   } else {
//       // Redirect to login page or show login form
//       // You can customize this based on your application flow
//       alert("Please log in to view your flashcards.");
//       // Example: window.location.href = 'login.html';
//   }
// };
// // Call checkAuthentication() when the profile page loads
// checkAuthentication();