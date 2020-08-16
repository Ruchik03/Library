//reference to buttons
const addBookbtn = document.querySelector('#addBook');
const cancelbtn = document.querySelector('#cancel');
const addbtn = document.querySelector('#addBookM');



//reference to modal and my library 
const modal = document.querySelector('#modal');
const myLibraryDiv = document.querySelector('#myLibrary');
hideModal();

let myLibrary = [];

//create a Book object constructor
class Book {
    constructor(bookName, author, pages, read) {
        this.bookName = bookName,
        this.author = author,
        this.pages = pages,
        this.read = read;
    }
}

//for show case create two books 


showcase();

function showcase(){
    let book = new Book('Harry Potter','ruchik chaudhari','450','true');
    let book1 = new Book('example book','example author','43','read');
    //let book2 = new Book('example book','example author','43','read');
    myLibrary.push(book,book1);
    for(let i = 0; i < myLibrary.length;i++){

        displayMyLibrary(myLibrary[i],i);
    }
    updateDeletebtn();
 
}
 
//  let book3 = new Book('example book','example author','43','read');
//  let book4 = new Book('example book','example author','43','read');
//  let book5 = new Book('example book','example author','43','read');
//  let book6 = new Book('example book','example author','43','read');
 
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


//User interacts with the modal

//user enters cancel button-->hide the modal
cancelbtn.addEventListener('click', hideModal);

//user enter add button--> add the book to my libary array
addbtn.addEventListener('click', addBookToMyLibrary);







function addBookToMyLibrary(){

    let title = '', author = '', pages = '', read = '';

    //get the complete information from the user
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    pages = document.getElementById('pages').value;
    read = document.getElementById('radioTxt').value;

    let addBook = new Book (title, author, pages, 'literalRead'); 
    console.log(addBook);
    //add the book to my library array
    myLibrary.push(addBook);
    hideModal();
    displayMyLibrary(addBook,myLibrary.length-1);
    updateDeletebtn();

}

function displayMyLibrary(newBook,id){
    


    //get each object in the array
    

        //get the data of each object 


        //create a div element
        let myBookDiv = document.createElement('div');
       // let idName = 'book '+myLibrary.length-1;
        myBookDiv.setAttribute('id',id);
        myBookDiv.classList.add('myBooks'); 


        //create the inner elements
        let spanTitle = document.createElement('span');
        let spanAuthor = document.createElement('span');
        let spanPages = document.createElement('span');
        let spanRead = document.createElement('span');
        let btnDelete = document.createElement('BUTTON');

        btnDelete.classList.add('deleteIcon');


        spanTitle.innerHTML = newBook.bookName;
        spanAuthor.innerHTML = 'By: '+ newBook.author;
        spanPages.innerHTML = 'Pages: '+newBook.pages;
        spanRead.innerHTML = read;
        btnDelete.innerHTML = '<img src="images/deleteIcon.png">';



        
        //add the elements to their parent elements
        myBookDiv.appendChild(spanTitle);
        myBookDiv.appendChild(spanAuthor);
        myBookDiv.appendChild(spanPages);
        myBookDiv.appendChild(spanRead);
        myBookDiv.appendChild(btnDelete);

        myLibraryDiv.appendChild(myBookDiv);

    
}
function displayRemoveBook(divId){

    myLibraryDiv.removeChild(document.getElementById(divId));

}
function deleteBook(event){
    
   //get the #id of the div which represent the book
   let divId = event.target.parentNode.parentNode.id;

   //all the id's are in format 'book [index]'
   //get the index by getting the end of the id --> 'book 10' --> '10'
   
    myLibrary.splice(divId,1);
    displayRemoveBook(divId);
    //alert(myLibrary.length);
}







function hideModal(){
    modal.style.display = 'none';
    addBookbtn.disabled = false
}
function showModal(){
    modal.style.display = 'block';
    addBookbtn.disabled = true;
   // myLibraryDiv.style.display='none';
}

//myLibraryDiv.style.display='block';