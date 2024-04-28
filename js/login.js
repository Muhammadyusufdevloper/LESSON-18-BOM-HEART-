const API_URL = "https://dummyjson.com"


export async function getUser(userData) {
    await fetch(`${API_URL}/auth/login`,{
        method:"POST",
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(res =>{
        console.log("res>>>>",res)
        if (res.message === "Invalid credentials") {
            return alert("username or password is incorrect")
        }
        localStorage.setItem("x-auth-token", res.token)
        window.open(`./pages/admin.html`,"_self")
    })
} 

