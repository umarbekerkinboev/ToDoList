// ******* Add to-do to the list *******
const todosContainer = document.querySelector('.todos');
const input = document.querySelector('.input');
const plusBtn = document.querySelector('.plus-icon');

//retrive toDos from localStorage
let toDos =
  localStorage.getItem('todos') !== null
    ? JSON.parse(localStorage.getItem('todos'))
    : [];

//recreate all toDos in toDosContainer
toDos.forEach((toDo) => {
  todosContainer.innerHTML += `<!--Single TODO -->
            <div class="todo-container">
              <!-- FIRST PART -->
              <div class="todo-first-part">
                <span class="stars">
                  <i class="fa-regular fa-star white"></i>
                  <i class="fa-solid fa-star black"></i>
                </span>
                <span class="checkbox">
                  <input type="checkbox" name="checkbox" id="checkbox" />
                </span>
                <span class="new-text">${toDo.value}</span>
              </div>
              <!-- SECOND PART -->
              <div class="todo-second-part">
                <span class="edit-btn"
                  ><i class="fa-solid fa-pen-to-square"></i
                ></span>
                <span class="delete-btn"><i class="fa-solid fa-trash"></i></span>
              </div>
            </div>`;
});

plusBtn.addEventListener('click', function () {
  addToDo();
  hideNothingToDo();
});

input.addEventListener('keydown', function (event) {
  if (event.keyCode === 13 || event.key === 'Enter') {
    addToDo();
    hideNothingToDo();
  }
});

function addToDo() {
  const newToDo = input.value.trim();

  if (newToDo !== '') {
    const newToDoMarkup = `<!--Single TODO -->
            <div class="todo-container">
              <!-- FIRST PART -->
              <div class="todo-first-part">
                <span class="stars">
                  <i class="fa-regular fa-star white"></i>
                  <i class="fa-solid fa-star black"></i>
                </span>
                <span class="checkbox">
                  <input type="checkbox" name="checkbox" id="checkbox" />
                </span>
                <span class="new-text">${newToDo}</span>
              </div>
              <!-- SECOND PART -->
              <div class="todo-second-part">
                <span class="edit-btn"
                  ><i class="fa-solid fa-pen-to-square"></i
                ></span>
                <span class="delete-btn"><i class="fa-solid fa-trash"></i></span>
              </div>
            </div>`;
    todosContainer.innerHTML += newToDoMarkup;
    input.value = '';
    starCheck();

    //add toDos to localStorage
    toDos.push({ id: 1, value: newToDo, checked: true });
    localStorage.setItem('todos', JSON.stringify(toDos));
  } else {
    // setInterval((input.value = 'Please add todo'));
  }
}

// ***** Hide nothing-text function
function hideNothingToDo() {
  const nothing = document.querySelector('.nothingtodo');
  nothing.classList.add('hidenothing');
}

// ****** Star check function ******
function starCheck() {
  const starsConts = document.querySelectorAll('.stars');

  starsConts.forEach(function (star) {
    const whiteStar = star.querySelector('.white');
    const blackStar = star.querySelector('.black');

    whiteStar.addEventListener('click', () => {
      blackStar.classList.add('show-star');
      whiteStar.classList.add('hide');
    });

    blackStar.addEventListener('click', () => {
      blackStar.classList.remove('show-star');
      whiteStar.classList.remove('hide');
    });
  });
}

// Edit and Delete buttons
document.addEventListener('click', function (event) {
  const editBtn = event.target;
  // const deleteBtn = event.target;
  if (
    editBtn.classList.contains('edit-btn') ||
    editBtn.classList.contains('fa-pen-to-square')
  ) {
    input.value = '';
  }
});
