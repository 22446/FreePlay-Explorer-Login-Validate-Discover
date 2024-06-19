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
                checkNameValidation(inputs[0])
                &&checkNameValidation(inputs[1])
                &&checkEmailValidation()
                &&checkPassValidation()
                &&checkAgeValidation()
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
        
	   first_name:inputs[0].value,
	   last_name:inputs[1].value,
       email:inputs[2].value,
       password:inputs[3].value,
	   age:inputs[4].value
    }

    postData(data)
   
}

async function postData(data){
    let apiData=await fetch("https://movies-api.routemisr.com/signup",{
        method:"post",
        body:JSON.stringify(data),
        headers:{
            'Accept': 'application/json',
             'Content-Type': 'application/json'
        }
        
    })

    let datarespon =await apiData.json();
    if(datarespon.message==="success"){
        location.href="./index.html"
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
 
function checkNameValidation(input){
    const regex=/^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/
    if(regex.test(input.value)){
        
        input.classList.add('is-valid')
        input.classList.remove('is-invalid')

        return true
    }
    else{
        input.classList.add('is-invalid')
         input.classList.remove('is-valid')
        return false
    }
}
function checkEmailValidation(){
    const regexx=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if(regexx.test(inputs[2].value)){
       
        inputs[2].classList.add("is-vallid")
        inputs[2].classList.remove("is-invalid")

                return true
    }
    else{
        inputs[2].classList.add("is-invalid")
        inputs[2].classList.remove("is-valid")
       return false
    }
}
function checkPassValidation(){
    const regex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(regex.test(inputs[3].value)){
        inputs[3].classList.add("is-vallid")
        inputs[3].classList.remove("is-invalid")

                return true
    }
    else{
        inputs[3].classList.add("is-invalid")
         inputs[3].classList.remove("is-valid")
        return false
    }
}

function checkAgeValidation(){
    const regex=/^([1-7][0-9]|80)$/
    if(regex.test(inputs[4].value)){
        inputs[4].classList.add("is-valid")
        inputs[4].classList.remove("is-invalid")

        return true
    }
    else{
        inputs[4].classList.add("is-invalid")
         inputs[4].classList.remove("is-valid")
        return false
    }
}

      