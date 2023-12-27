const myLibrary = [];
let readBtn = document.createElement('button');
readBtn.innerText = "Mark as Read";
readBtn.id = "readBtn";
let removeBtn = document.createElement('button');
removeBtn.innerText = "Remove Book";
removeBtn.id = "removeBtn";


function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}
function addBookToLibrary(event) {
  event.preventDefault();
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('read').checked;
  book = new Book(title, author, pages, read);
  form = document.querySelector('form');
  form.reset();
  myLibrary.push(book);
  dialog.close();
  displayBooks();
}
function displayBooks(){
  tableBody =  document.querySelector('table tbody');
  tableBody.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++){
        let bookObject = myLibrary[i];
        tableRow = document.createElement('tr');
        for (let key in bookObject) {
            if (bookObject.hasOwnProperty(key)) {
                let cell = document.createElement('td');
                cell.innerText = bookObject[key];
                tableRow.appendChild(cell);
            }
          tableRow.appendChild(readBtn);
          tableRow.appendChild(removeBtn);
        }
        tableBody.appendChild(tableRow);

    }
}

dialog = document.querySelector("#newBookModal");

formShowBtn = document.querySelector(".btn");
formShowBtn.addEventListener("click", () => {
  dialog.showModal();
});

removeBtn.addEventListener("click", () => {
  let row = removeBtn.closest('tr');
  row.remove();

});

readBtn.addEventListener("click", () => {
  
  let row = readBtn.closest('tr');
  let siblingTd = row.querySelector('td:nth-child(4)');
  console.log(siblingTd)
  
  
  siblingTd.innerText === "true" ? siblingTd.innerText = "false" : siblingTd.innerText = "true";

});

