let allHtml=document.querySelector("html")
let LightMoon=document.getElementById("mode")

const inputs=document.querySelectorAll("input")
const form = document.querySelector("form")
let msg = document.getElementById("msg")

let flag=false;
form.addEventListener("submit",function(e){
    e.preventDefault();
if(flag==true){
    setForm();
}
})
form.addEventListener("input",function(){
             if(
               
                checkEmailValidation()
                &&checkPassValidation()
               
              )
                 {
                     flag=true
                    
                 }else{
                     flag
                 }
         })

function setForm(){
    let data=
    {
        
	  
       email:inputs[0].value,
       password:inputs[1].value,
	  
    }

    postData(data)
   
   
}

async function postData(data){
    let apiData=await fetch("https://movies-api.routemisr.com/signin",{
        method:"post",
        body:JSON.stringify(data),
        headers:{
            'Accept': 'application/json',
             'Content-Type': 'application/json'
        }
        
    })


    let datarespon =await apiData.json();
    if(datarespon.message==="success"){
        localStorage.setItem("uToken",datarespon.token)
        location.href="./home.html"
    }
    else{
        msg.innerHTML=datarespon.errors?.email.message
    }
    console.log(datarespon);
}
LightMoon.addEventListener("click",function(){
    this.classList.toggle("fa-moon") 
     if(allHtml.getAttribute("data-theme")=="dark"){
 
       allHtml.setAttribute("data-theme","light") 
    }
    else {
       allHtml.setAttribute("data-theme","dark")
    }
 })
 

function checkEmailValidation(){
    const regexx=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if(regexx.test(inputs[0].value)){
       
        inputs[0].classList.add("is-vallid")
        inputs[0].classList.remove("is-invalid")

                return true
    }
    else{
        inputs[0].classList.add("is-invalid")
        inputs[0].classList.remove("is-valid")
       return false
    }
}
function checkPassValidation(){
    const regex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(regex.test(inputs[1].value)){
        inputs[1].classList.add("is-vallid")
        inputs[1].classList.remove("is-invalid")

                return true
    }
    else{
        inputs[1].classList.add("is-invalid")
         inputs[1].classList.remove("is-valid")
        return false
    }
}

      