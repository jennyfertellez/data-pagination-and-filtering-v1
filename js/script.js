/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
  const startIndex = (page * 9) - 9; //index for the first student in the page
  const endIndex = page * 9; //index for the last student in the page

  const studentListUL = document.querySelector(".student-list");

  studentListUL.innerHTML = ""; //removes students that were previously displayed

  // Loop though the data and display the list of students individually.
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      let studentItem = `<li class="student-item cf">
                               <div class="student-details">
                               <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture">
                               <h3>${list[i].name.first} ${list[i].name.last} </h3>
                               <span class="email">${list[i].email}</span>
                               </div>
                               <div class="joined-details">
                               <span class="date">Joined ${list[i].registered.date}</span>
                               </div>
                            </li>`;

      studentListUL.insertAdjacentHTML("beforeend", studentItem);
    }
  }
} 

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
  const numOfPages = Math.ceil(list.length / 9); //number of buttons needed for the bottom of the page

  const linkListUL = document.querySelector(".link-list");

  linkListUL.innerHTML = ""; //removes previous buttons displayed 

// Loop through the pagination pages and display buttons on the bottom of the screen. 
  for (let i = 1; i <= numOfPages; i++) {
    var button = `<li>
                     <button type="button">${[i]}</button>
               </li>`;

    linkListUL.insertAdjacentHTML("beforeend", button);

    const clickedButton = document.querySelector("button");
    clickedButton.className = "active";

// Highlights 'active' page when user clicks on the page buttons.
    linkListUL.addEventListener("click", (e) => {
      if (e.target.tagname === "BUTTON") {
         document.querySelector('.active').className = '';
         e.target.className = "active";

        showPage(data, e.target.textContent);
      }
    })
  }
}

// Call functions
addPagination(data);
showPage(data, 1);