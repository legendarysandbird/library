class Library {
    constructor() {
        this.myLibrary = [];
    }

    addBookToLibrary() {
        let title = window.prompt("Title: ");
        let author = window.prompt("Author: ");
        let pages = window.prompt("Number of pages: ");

        let b1 = new Book(author, title, pages);
        this.myLibrary.push(b1);
        this.displayLibrary();
    }

    displayLibrary() {
        let bookshelf = document.getElementById("bookshelf");
        bookshelf.innerHTML = "";

        this.myLibrary.forEach((book) => {

            // The book text
            let newBook = document.createElement("div");
            newBook.id = "book";
            newBook.textContent = `${book.title} by ${book.author} is ${book.pages} pages.`

            // The read button
            let read = document.createElement("input");
            read.type = "checkbox";
            read.id = "read";
            read.addEventListener("change", () => {
                book.toggleRead();
            })
            newBook.appendChild(read);

            // The remove button
            let remove = document.createElement("button");
            remove.id = "remove";
            remove.textContent = "Remove";
            remove.addEventListener("click", () => {
                bookshelf.removeChild(newBook);
                let index = this.myLibrary.indexOf((book));
                this.myLibrary.splice(index, 1);
            })
            newBook.appendChild(remove);
        
            // Add the book
            bookshelf.appendChild(newBook);
        });
        
    }
}

class Book {
    constructor(author, title, pages) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = false;
    }

    toggleRead() {
        this.read = !this.read;
    }
}

l1 = new Library();

let newButton = document.getElementById("new");
newButton.addEventListener("click", () => {
    l1.addBookToLibrary();
})
