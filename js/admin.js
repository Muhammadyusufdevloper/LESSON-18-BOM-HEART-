const headerLogUtLink = document.querySelector("#header__log-ut-link")
const isLogin = localStorage.getItem("x-auth-token")

function  checkUser() {
    if (!isLogin) {
        window.location.replace("../index.html")
    }
}
checkUser()
headerLogUtLink.addEventListener("click", ()=>{
    localStorage.clear()
    window.open("../index.html","_self")
})