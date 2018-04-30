
function subb(){
    var fname = document.querySelector("form").firstname.value;
    var lname = document.querySelector("form").lastname.value;
    var email = document.querySelector("form").email.value;
    var comment = document.querySelector("form").comment.value;
    
    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("email", email);
    localStorage.setItem("comment", comment);
    
    if (localStorage.getItem("fname") != null && localStorage.getItem("lname") != null && localStorage.getItem("email") != null && localStorage.getItem("comment") != null){
    document.getElementById("subbedInfo").innerHTML = "Name: " + localStorage.getItem("fname") + " " + localStorage.getItem("lname") + "<br>" + "E-Mail: " + localStorage.getItem("email") + "<br>" + "Comment: " + localStorage.getItem("comment");
    }
    
}

if (localStorage.getItem("fname") != null && localStorage.getItem("lname") != null && localStorage.getItem("email") != null && localStorage.getItem("comment") != null){
    document.getElementById("subbedInfo").innerHTML = "Name: " + localStorage.getItem("fname") + " " + localStorage.getItem("lname") + "<br>" + "E-Mail: " + localStorage.getItem("email") + "<br>" + "Comment: " + localStorage.getItem("comment");
}
