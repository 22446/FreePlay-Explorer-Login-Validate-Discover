let row = document.getElementById("gameData")
const links=document.querySelectorAll(".menu a");
let loader = document.querySelector('.loading')
let logout=document.querySelector(".logout-btn")
let allHtml=document.querySelector("html")
let LightMoon=document.getElementById("mode")

GetData("mmorpg");
for(let i =0;i<links.length;i++){
        links[i].addEventListener("click",function(){
        document.querySelector('.active').classList.remove("active")
        links[i].classList.add("active")
        let getName=links[i].getAttribute("data-category")
        GetData(getName)
        console.log(getName);
    })
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

async function GetData(getName){
    loader.classList.remove("d-none")
    const options = {
        method: 'GET',
        headers: {
            "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        }
    };
    let apiResponse = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${getName}`, options);
    let response=await apiResponse.json()
    display(response)
    loader.classList.add("d-none")

}


function display(gamesData){
    let cartona=""
    for(let i=0;i<gamesData.length;i++)
    {
    cartona+= ` <div class="col">
      <div  onclick="showDetails(${gamesData[i].id})"  class="card h-100 bg-transparent" role="button" >
      <div class="card-body">

         <figure class="position-relative">
            <img class="card-img-top object-fit-cover h-100" src="${gamesData[i].thumbnail}"/>
         </figure>

         <figcaption>

            <div class="hstack justify-content-between">
               <h3 class="h6 small"> ${gamesData[i].title} </h3>
               <span class="badge text-bg-primary p-2">Free</span>
            </div>

            <p class="card-text small text-center opacity-50">
               ${gamesData[i].short_description}
            </p>

         </figcaption>
      </div>

      <footer class="card-footer small hstack justify-content-between">

         <span class="badge badge-color">${gamesData[i].genre}</span>
         <span class="badge badge-color">${gamesData[i].platform}</span>

      </footer>
   </div>
</div>
   `
    }
    row.innerHTML=cartona
}

function showDetails(id){
 location.href=`./details.html?id=${id}`
}

logout.addEventListener("click",function(){
   localStorage.removeItem("uToken")
   location.href="./index.html"
})