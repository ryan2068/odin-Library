form = document.querySelector("form")
firstName = document.querySelector("#first-name")
lastName = document.querySelector("#last-name")
pages = document.querySelector("#pages")

read = document.querySelector("#yes")
isNotRead = document.querySelector("#no")
isRead = document.getElementsByName("is-read")
addBookButton = document.querySelector(".add-book-button")

cardContainer = document.createElement("div")
cardContainer.classList.add("card-container")
document.body.appendChild(cardContainer)


function radioChoice() {
    if (read.checked === true)    
        return ` Yes.`
    else if (isNotRead.checked === true)
        return ` No.`
}


addBookButton.addEventListener("click", () => {
    form.classList.toggle("hidden")
    addBookButton.classList.toggle("hidden")
})


form.addEventListener('submit', (e) => {
    e.preventDefault() 
    userCreatedBook = function() {
        userBook = new Book(firstName.value, lastName.value, pages.value, isRead.value)
        return userBook.info()
    }
    
    card = document.createElement("div")
    card.classList.add("card")
    card.textContent = userCreatedBook()
    cardContainer.appendChild(card)
    addBookButton.classList.toggle("hidden")
    form.classList.toggle("hidden")



})

library = []

function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = radioChoice()
    this.info = function() {
        return `Title: ${this.title}, Author: ${this.author}, Page count: ${this.pages},  Read:${this.isRead}`
    }
}






