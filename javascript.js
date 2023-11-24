//selects all the dom elements
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


//returns if the book has been read or not
function radioChoice() {
    if (read.checked === true) {  
        hasBeenRead = true
        return `Read: Yes.`
    }
    else if (isNotRead.checked === true)
        hasNotRead = true
        return `Read: No.`
}


addBookButton.addEventListener("click", function(e) {
    form.classList.toggle("hidden")
    addBookButton.classList.toggle("hidden")
    if (e.target.textContent === "Add a new book?") {
        e.target.textContent = "click me again to return (:"
    }
    else {
        e.target.textContent = "Add a new book?"
    }



})



console.log("this is connected to github")





const library = []

form.addEventListener('submit', (e) => {
    e.preventDefault() 
    
    
    userBook = new Book(firstName.value, lastName.value, pages.value)
    library.push(userBook.info())
    
    
    
    

    card = document.createElement("div")
    card.classList.add("card")



    card.textContent = library.at(-1)
    cardContainer.appendChild(card)


    deleteButton = document.createElement("button")
    deleteButton.classList.add("delete-button", "card-button")
    deleteButton.textContent += "Delete this book?"

    


    deleteButton.addEventListener('click', (e) => {
        console.log("Card Deleted")
        e.target.parentNode.parentNode.remove()
        



    })
    
    



            


    

    //adds a label, and read or not read radio buttons 
    readStatus = document.createElement("input")
    notReadStatus = document.createElement("input")
    isReadLabel = document.createElement("label")
    isReadSpan = document.createElement("span")
    notReadStatusSpan = document.createElement("span")
    notReadStatusSpan.textContent = 'No'
    isReadSpan.textContent = 'Yes'
    isReadLabel.textContent = 'Have I read this book?'
    readStatus.textContent = 'Yes'
    notReadStatus.classList.add("NotReadStatus")
    notReadStatus.classList.add("NotReadStatusInput")
    notReadStatusSpan.classList.add("NotReadStatus")
    isReadLabel.classList.add("isReadLabel")
    isReadSpan.classList.add("readStatus")
    readStatus.classList.add("readStatus")
    
    readStatus.type = 'radio'
    notReadStatus.type = 'radio'

    

    cardDiv = document.createElement("div")
    cardDiv.classList.add("card-div")




        


        
    card.appendChild(cardDiv)
    cardDiv.appendChild(deleteButton)
    cardDiv.appendChild(isReadLabel)
    
    cardDiv.appendChild(isReadSpan)
    
    cardDiv.appendChild(readStatus)
    cardDiv.appendChild(notReadStatus)
    cardDiv.appendChild(notReadStatusSpan)
    



    addBookButton.classList.toggle("hidden")
    form.classList.toggle("hidden")
    addBookButton.textContent = "Add a new book?"

    console.log(library)

    

})







function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = radioChoice()
    this.info = function() {
        return `Title: ${this.title}, Author: ${this.author}, Page count: ${this.pages}`
    }



}