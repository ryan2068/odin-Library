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









const library = []

form.addEventListener('submit', (e) => {
    e.preventDefault() 
    
    
    userBook = new Book(firstName.value, lastName.value, pages.value)
    library.push(userBook.info())
    
    
    
    

    card = document.createElement("div")
    card.classList.add("card")



    card.textContent = library.at(-1)
    cardContainer.appendChild(card)




    
    



    library.forEach((i, index) => {
            
        deleteButton = document.createElement("button")
        deleteButton.classList.add("delete-button", "card-button")
        deleteButton.textContent += "Delete this book?"
        deleteButton.setAttribute("data-num", index)

        changeReadStatus = document.createElement("button")
        changeReadStatus.classList.add("change-read-status", "card-button")
        changeReadStatus.textContent += "Change read status?"
        
        readStatus = document.createElement("button")
        readStatus.classList.add("readStatus", "card-button")
        readStatus.textContent = radioChoice()
        

        cardDiv = document.createElement("div")
        cardDiv.classList.add("card-div")
    
        changeReadStatus.addEventListener("click", (e) => {
            if (readStatus.textContent === "Read: Yes.") {
                readStatus.textContent = "Read: No."
            }
            else if (readStatus.textContent === "Read: No.") {
                readStatus.textContent = "Read: Yes."
            
            }



        deleteButton.addEventListener('click', (e) => {
            console.log("i work")
            e.target.parentNode.remove()
            
        })
                

    
        })

        
    



        
    });
    card.appendChild(cardDiv)
    cardDiv.appendChild(deleteButton)
    cardDiv.appendChild(changeReadStatus)
    cardDiv.appendChild(readStatus)

    




    
    

    







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







