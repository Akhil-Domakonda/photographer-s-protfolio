const add=document.getElementById('add');
const addMenu=document.getElementById('add-menu')
const closeAddMenu=document.getElementById('closeMenu')

add.addEventListener("click",()=>{
    addMenu.style.display="block";
    add.style.display="none";
})
closeAddMenu.addEventListener('click',()=>{
    addMenu.style.display="none"
    add.style.display="block"
})

const  closeAddPhoto=document.getElementById("closeAddPhoto")
const modalWrapper=document.querySelector(".modal-wrapper")
const addPhoto =document.querySelector("#addPhoto")
const progressBar = document.getElementById("progressBar");
closeAddPhoto.addEventListener("click",()=>{
    modalWrapper.style.display="none"
    add.style.display="block"
    message.innerHTML=""
    newPhoto.value=null
    setProgressBar()
})

addPhoto.addEventListener("click",()=>{
    modalWrapper.style.display="flex"
    addMenu.style.display="none"
})

const uploadButton=document.getElementById("uploadButton")
const newPhoto=document.getElementById("newPhoto")
const message=document.querySelector(".message")

uploadButton.addEventListener("click",(e)=>{
    e.preventDefault()

    if(newPhoto.value.length==0){
        message.innerHTML="No file selected";
        message.style.textAlign="center"
        message.style.color="red"
    }
    else{
        message.innerHTML="Uploaded Successfully"
        message.style.textAlign="center"
        message.style.color="lightgreen"
        updateProgressBar()
        
    }

})

const logOut=document.getElementById("logOut")
logOut.addEventListener("click",()=>{
    location.replace("index.html")
})

async function updateProgressBar(){
    for(let i=0;i<101;i++){ progressBar.value=i;
        await new Promise(resolve => setTimeout(resolve,10))
    }
}

function setProgressBar(){
    progressBar.value=0     
}
