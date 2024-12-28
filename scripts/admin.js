const email = localStorage.getItem("email");
if (!email) {
    alert("Not logged in redirecting to homepage")
    window.location.href = "home.html"
}
const form = document.getElementById("bookform");
const bookgrid = document.getElementById("book-grid")
document.addEventListener("DOMContentLoaded", tetchbooks);
// add new book
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = form.title.value;
    let author = form.author.value;
    let category = form.category.value;
    const book = {
        title,
        author,
        category,
        isVerified: false,
        borrowedDays: null;
        availability: "Available"
    }
    fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
    })
        .then((response) => response.json())
        .then(() => {
            alert("Book Added Successfully")
            form.request();
            fetchBooks();
        })
        .catch((err) => console.error("error adding book:", err));
});
// fetch books
function fetchBooks(){

}
// create a book card
function createBookCard(){
    
}
// verify book
const verifyButton=Clipboard.queryselector("verify");
if(confirm("Are you sure toverify..?")){
fetch("http://localhost:3000/books", {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({isVerified:true}),
})
    .then((response) => response.json())
    .then(() => {
        alert("Book Verified Successfully")
        fetchBooks();
    })
    .catch((err) => console.error("error Verifying book:", err));
}
});