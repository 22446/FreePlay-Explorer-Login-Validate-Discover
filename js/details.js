let allHtml=document.querySelector("html")
let LightMoon=document.getElementById("mode")
let loader = document.querySelector(".loading")
let search=location.search;
let getParams=new URLSearchParams(search)
let id=getParams.get("id");

(async function(){
    loader.classList.remove("d-none")
    const options = {
        method: "GET",
        headers: {
           "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
           "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
     };
     const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
     let getData=await api.json();
     displayData(getData)

     loader.classList.add("d-none")
})()

LightMoon.addEventListener("click",function(){
   this.classList.toggle("fa-moon") 
    if(allHtml.getAttribute("data-theme")=="dark"){

      allHtml.setAttribute("data-theme","light") 
   }
   else {
      allHtml.setAttribute("data-theme","dark")
   }
})
function displayData(getData) {
    const detailsBox = `
    
    <div class="col-md-4">
    <figure>
       <img src="${getData.thumbnail}" class="w-100" alt="details image" />
    </figure>
 </div>
 <div class="col-md-8">
 
    <div>
       <nav aria-label="breadcrumb">
          <ol class="breadcrumb" class="text-light">
             <li class="breadcrumb-item text-reset"><a href="./home.html">Home</a></li>
             <li class="breadcrumb-item text-info" aria-current="page">${getData.title}</li>
          </ol>
       </nav>
 
       <h1>${getData.title}</h1>
 
       <h3>About ${getData.title}</h3>
       <p>${getData.description}</p>
 
       
    </div>
 </div>
 
    `;
 
    document.getElementById("detailsData").innerHTML = detailsBox;
}