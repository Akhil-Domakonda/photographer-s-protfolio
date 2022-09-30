var sigIn=document.getElementById("signIn")
const body=document.getElementsByTagName('body')

var links=["https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8UjBQQnZSQ1AyeEF8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80","https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80","https://images.unsplash.com/photo-1470081989310-425cc509b8f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80","https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1511&q=80","https://images.unsplash.com/photo-1445813792994-1d804a9453c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2145&q=80","https://images.unsplash.com/photo-1483356256511-b48749959172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80","https://images.unsplash.com/photo-1526169882751-ed7a04feac73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NTQ2NjE2fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1576190348129-d158fb6c67fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80","https://images.unsplash.com/photo-1508234562163-534667a7e3ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"]
console.log(links.length)
body.addEventListener("load",()=>{
    let index=Math.floor(Math.random()*10);
    let url1=links[index];
    body.style.backgroundImage="url('${url1}')"
})

console.log(links.length)
sigIn.addEventListener("click",(e)=>{
    e.preventDefault();
    var email=document.getElementById("email").value
    console.log(email);

    var password=document.getElementById("password").value
    console.log(password)
    var isMatch=true
    // if(email!=="akhildomakonda@gmail.com"){
    //     isMatch=false
    // }
    // if(password!="12345678") isMatch=false

    // console.log(isMatch)
    if(isMatch){
        location.replace("home.html")
    }
})