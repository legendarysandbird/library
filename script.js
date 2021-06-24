let myLibrary = [];

function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = false;
}

function addBookToLibrary() {
    let title = window.prompt("Title: ");
    let author = window.prompt("Author: ");
    let pages = window.prompt("Number of pages: ");

    let b1 = new Book(author, title, pages);
    myLibrary.push(b1);
    displayLibrary();
}

function displayLibrary() {
    let bookshelf = document.getElementById("bookshelf");
    bookshelf.innerHTML = "";

    myLibrary.forEach((book) => {
        let newBook = document.createElement("div");
        newBook.id = "book";
        newBook.textContent = `${book.title} by ${book.author} is ${book.pages} pages.`

        let remove = document.createElement("button");
        remove.id = "remove";
        remove.textContent = "Remove";
        remove.addEventListener("click", () => {
            bookshelf.removeChild(newBook);
            let index = myLibrary.indexOf((book));
            myLibrary.splice(index, 1);
        })
        newBook.appendChild(remove);

        bookshelf.appendChild(newBook);
    });
        
}

let newButton = document.getElementById("new");
newButton.addEventListener("click", () => {
    addBookToLibrary();
})

