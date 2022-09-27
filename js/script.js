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
  const startIndex = page * 9 - 9;
  const endIndex = page * 9;

  const studentListUL = document.querySelector(".student-list");

  studentListUL.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      var studentItem = `<li class="student-item cf">
                               <div class="student-details">
                               <img class="avatar" src="${data[i].picture.thumbnail} " alt="Profile Picture">
                               <h3>${data[i].name.first} ${data[i].name.last} </h3>
                               <span class="email">${data[i].email}</span>
                               </div>
                               <div class="joined-details">
                               <span class="date">Joined ${data[i].registered.date}</span>
                               </div>
                            </li>`;

      studentListUL.insertAdjacentHTML("beforeend", studentItem);
    }
  }
} //showPage(data, 1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
  const numOfPages = Math.ceil(list.length / 9);

  const linkListUL = document.querySelector(".link-list");

  linkListUL.innerHTML = "";

  for (let i = 1; i <= numOfPages.length; i++) {
    var button = `<li>
                     <button type="button">${i}</button>
               </li>`;

    linkListUL.insertAdjacentHTML("beforeend", button);

    var clickedButton = document.querySelector("button");
    clickedButton.className = "active";

    linkListUL.addEventListener("click", (e) => {
      if (e.target.tagname === "BUTTON") {
        var removeButton = document.querySelector(".active");
        removeButton.className = "";

        e.target.className = "active";

        showPage(data, e.target.textContent);
      }
    });
  }
}

// Call functions
showPage(data, 1);
addPagination(data);
