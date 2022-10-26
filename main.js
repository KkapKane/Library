class Book {
  constructor(name, author, pages, readStatus) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.readStatus = false;
  }
  addBookToLibrary() {
    myLibrary.push([this.name, this.author, this.pages, this.readStatus]);
    console.log(myLibrary);
    return this;
  }
  markRead() {
    this.readStatus = true;
    return this;
  }
}

myLibrary = [];

//---------Labels-----------/
const addBtn = document.querySelector(".AddBook");
const SubmitBtn = document.querySelector(".submit");
const libCont = document.querySelector(".libCont");

//---------Modal Popup-----------/
addBtn.addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "flex";
});

//---------Modal close-----------/
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
});

//---------Submit button----------/
document.querySelector(".submit").addEventListener("click", Add);

var checkValue = false;

//this function creates div and then add books to array
function Add() {
  let nameprompt = document.querySelector(".BookName").value;
  let authorprompt = document.querySelector(".AuthorName").value;
  let pageprompt = document.querySelector(".Pages").value;
  var books = new Book(nameprompt, authorprompt, pageprompt);
  var checkbox = document.querySelector("input[name=checkbox]");

  checkbox.addEventListener("change", function () {
    checkValue = true;
    if (this.checked) {
      checkValue = true;
      books.markRead();
    } else {
      console.log("check box is not checked..");

      checkValue = false;
    }
  });
  if (checkValue == true) {
    books.markRead().addBookToLibrary();
  } else {
    books.addBookToLibrary();
  }
  createDiv();
  console.log(books.readStatus);
  return this;
}

//---------function that creates div and set text content to user input-----------/
function createDiv() {
  const emptydiv = document.createElement("divCard");
  const rowOne = document.createElement("bookNum");
  const rowTwo = document.createElement("nameDiv");
  const rowThree = document.createElement("authorDiv");
  const rowFour = document.createElement("pages");
  const readBox = document.createElement("input");
  const readText = document.createElement("ReadStatus" + myLibrary.length);

  emptydiv.classList.add("book" + myLibrary.length);
  rowOne.innerHTML =
    "Book" +
    " " +
    myLibrary.length +
    "<button onclick='changeRead(" +
    myLibrary.length +
    ")'" +
    "class='buttonCheck'" +
    "> </button>" +
    "<button onclick='Delete(" +
    myLibrary.length +
    ")'> </button>";
  rowTwo.textContent = "Book Name:" + " " + myLibrary.slice(-1)[0][0];
  rowThree.textContent = "Author:" + " " + myLibrary.slice(-1)[0][1];
  rowFour.innerHTML = "Pages:" + " " + myLibrary.slice(-1)[0][2];
  if (checkValue == true) {
    readText.textContent = "Read";
  } else {
    readText.textContent = "Not Read";
  }

  libCont.appendChild(emptydiv);
  emptydiv.appendChild(rowOne);
  emptydiv.appendChild(rowTwo);
  emptydiv.appendChild(rowThree);
  emptydiv.appendChild(rowFour);
  emptydiv.appendChild(readText);
}

//---------Delete all div childs and set array to none-----------/
function Clear() {
  myLibrary = [];
  removeAllChildNodes(libCont);
  console.log(myLibrary);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function Delete(num) {
  className = ".book" + num;
  let ele = document.querySelector(className);
  ele.remove();
}

function changeRead(num) {
  console.log("hi");
  className = "readstatus" + num;
  let ele = document.querySelector(className);
  let index = num - 1
  
  if (ele.textContent == "Read") {
    myLibrary[index][3] = false;
    ele.textContent = "Unread";
    console.log(myLibrary[index][3])
  }
  else {
    ele.textContent = "Read";
    myLibrary[index][3] = true;
    console.log(myLibrary[index][3]);
  }
  
}
