let form=document.getElementById("form")
form.addEventListener("submit",function(event){
    event.preventDefault()
    let email=form.email.value;
    let password=form.password.value;
    console.log(email,password)
    if(email=="admin@empher.com"&&password=="empher@123"){
        alert("Logged in as Admin.")
        window.location.href = "admin.html"
    }
})