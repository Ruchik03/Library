/**
 * My library application lets the user store books with the title name, 
 * author and pages. All the stored books are displayed on the application with
 * the book details and a delete button with it, incase user wants to remove any books. 
 * NOTE: The application is not provided with any type of storage.
 * Date: 08/10/2020
 * @author Ruchik Chaudhari
 */

//reference to all the buttons
const addBookbtn = document.querySelector('#addBook');
const cancelbtn = document.querySelector('#cancel');
const addbtn = document.querySelector('#addBookM');

//reference to modal and my library 
const modal = document.querySelector('#modal');
const myLibraryDiv = document.querySelector('#myLibrary');
hideModal();

//store all the books in an array
let myLibrary = [];

//create a Book object constructor
class Book {
    constructor(bookName, author, pages) {
        this.bookName = bookName,
        this.author = author,
        this.pages = pages
        //this.read = read;
    }
}

//for show case create two books 
showcase();
function showcase(){
    let book = new Book('Game of Thrones','George R.R. Martin','694');
    let book1 = new Book('To Kill a Mockingbird','Harper Lee','281');
    myLibrary.push(book,book1);

    for(let i = 0; i < myLibrary.length;i++){

        displayMyLibrary(myLibrary[i],i);
    }
    updateDeletebtn();
}
 
//update the delete the 
function updateDeletebtn(){

    const deletebtn=document.querySelectorAll('.deleteIcon');

    deletebtn.forEach((button)=>{
        button.addEventListener('click',(event)=>{
            
            deleteBook(event);
            });
    });
}



//User clicks add book button-->display the modal
addBookbtn.addEventListener('click', showModal);


//User interaction with the modal
//user enters cancel button-->hide the modal
cancelbtn.addEventListener('click', hideModal);

//user enters add button--> add the book to my libary array
addbtn.addEventListener('click', addBookToMyLibrary);






/**
 * The function gets the information from the user and
 * creates a new book object from that information.
 * The object is then pushed to the array and other 
 * functions are called to update the UI.
 */
function addBookToMyLibrary(){

    let title = '', author = '', pages = '', read = '';

    //get the information from the user
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    pages = document.getElementById('pages').value;
   
    let addBook = new Book (title, author, pages); 
    myLibrary.push(addBook);
    hideModal();

    displayMyLibrary(addBook,myLibrary.length-1);
    updateDeletebtn();

}

/**
 * The function creates a new div element and it's child
 * elements and together they represent the book with
 * its inforamtion.
 * @param {*} newBook 
 * @param {*} id 
 */
function displayMyLibrary(newBook,id){
    

        //create a div element--> This is the parent element 
        //which holds all the other elements 
        let myBookDiv = document.createElement('div');

        //set it's id --> The id is always the very last index 
        //of the my library array.
        myBookDiv.setAttribute('id',id);
        myBookDiv.classList.add('myBooks'); 


        //create the inner elements
        let spanTitle = document.createElement('span');
        let spanAuthor = document.createElement('span');
        let spanPages = document.createElement('span');
        //add a delete button
        let btnDelete = document.createElement('BUTTON');
        btnDelete.classList.add('deleteIcon');

        //give value to all the elements 
        spanTitle.innerHTML = newBook.bookName;
        spanAuthor.innerHTML = 'By: '+ newBook.author;
        spanPages.innerHTML = 'Pages: '+newBook.pages;
        btnDelete.innerHTML = '<img src="images/deleteIcon.png">';

        //add all the elements to their parent element
        myBookDiv.appendChild(spanTitle);
        myBookDiv.appendChild(spanAuthor);
        myBookDiv.appendChild(spanPages);
        myBookDiv.appendChild(btnDelete);
        myLibraryDiv.appendChild(myBookDiv);

    
}

/**
 * Removes the book from the application
 * @param {*} divId 
 */
function displayRemoveBook(divId){

    myLibraryDiv.removeChild(document.getElementById(divId));

}


/**
 * Deletes the specific book from the array and the application
 * @param {*} event 
 */
function deleteBook(event){
    
   //get the #id of the div which represent the book
    let divId = event.target.parentNode.parentNode.id;
    myLibrary.splice(divId,1);
    displayRemoveBook(divId);
}





/**
 * Hides the modal
 */
function hideModal(){
    modal.style.display = 'none';
    addBookbtn.disabled = false
}
/**
 * Shows the modal
 */
function showModal(){
    modal.style.display = 'block';
    addBookbtn.disabled = true;
   // myLibraryDiv.style.display='none';
}
