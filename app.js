let task = document.querySelector('#task');
let person = document.querySelector('#person');
let date = document.querySelector('#date');
let submit1 = document.querySelector('#submit1');
let deleteChecked = document.querySelector('#delete-checked');
let deleteAll = document.querySelector('#delete-all');
let tableBody = document.querySelector('.table-body');

let tasks = [];

function saveData() {
    localStorage.setItem('data', tableBody.innerHTML);
}

function showTasks() {
    tableBody.innerHTML = localStorage.getItem('data');
    tasks = tableBody.innerHTML;
}

showTasks();

function addTask () {
  showTasks();
  if (task.value === '' || person.value === ''){
    alert('Musisz wpisać zadanie i osobę, która je wykona');
  } else {
    let var1 = task.value;
    let var2 = person.value;
    let var3 = date.value;

    const newTask = `
    <tr class="">
      <td>${var1}</td>
      <td>${var2}</td>
      <td>${var3}</td>
      <td class="close-button"><img class="img-close" src="images/close.png"></td>
    </tr>
    `;

    tasks += newTask;
    tableBody.innerHTML = tasks;
    saveData();

    task.value = '';
    person.value = '';
    date.value = '';
  }
}
 
submit1.addEventListener('click', () => {
  addTask();
});

tableBody.addEventListener('click', function(e) {
  if (e.target.tagName === "TD"){
    e.target.parentElement.classList.toggle("checked"); 
  } 
  else if (e.target.className === "img-close"){
    e.target.parentElement.parentElement.remove();
  }
  saveData();
})

deleteChecked.addEventListener('click', () => {
  let tasksToDelete = document.querySelectorAll('.checked');

  for(let i = 0; i < tasksToDelete.length; i++){
    tasksToDelete[i].remove();
  }
  saveData();
})

deleteAll.addEventListener('click', () => {
  tableBody.innerHTML = '';
  saveData();
})


