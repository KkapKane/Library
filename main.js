class Book {
  constructor(name, author, pages) {
      this.name = name;
      this.author = author;
    this.pages = pages;
    this.readStatus = false;
  }
  addBookToLibrary() {
    myLibrary.push(this.name, this.author, this.pages);
  }
}


const addBtn = document.querySelector('button');

addBtn.addEventListener("click", Add);


myLibrary = [];
function Add() {
    let nameprompt = prompt("name of book")
    let authorprompt = prompt("name of author")
    let pageprompt = prompt("how many pages")
    var bookOne = new Book(nameprompt, authorprompt, pageprompt);
    bookOne.addBookToLibrary();
    console.log(myLibrary);
}

function Clear() {
    myLibrary = [];
    console.log(myLibrary)
}