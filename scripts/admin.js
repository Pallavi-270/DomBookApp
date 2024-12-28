const email= localStorage.getItem("email");
if(!email){
    alert("Not logged in redirecting to homepage")
window.location.href="home.html"
}
const form=document.getElementById("bookform");
const bookgrid=document.getElementById("book-grid")
document.addEventListener("DOMContentLoaded",tetchbooks);
// add new book
form.addEventListener("submit",(e) =>{
    e.preventDefault();
    let title=form.title.value;
    let author=form.author.value;
    let category=form.category.value;
    const book={
        title,
        author,
        category,
        isVerified:false,
        borrowedDays:null;
        availability:"Available"
    }
    fetch()
})