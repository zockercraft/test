function login()
{
    let usermane = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(usermane == "admin" && password == "abc") {
        window.location.href = './index';
    }
    else
    {
        alert("login failed");
    }
}
