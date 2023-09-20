const title = document.querySelector(".title")
const image = document.querySelector("#image")
const openingTimes = document.querySelector(".opening-times")


function loadTab(){
   if (this.textContent.toLowerCase() === "breakfast"){
        breakfast()
   }

   else if (this.textContent.toLowerCase() === "lunch"){
        lunch()
   }

   else if (this.textContent.toLowerCase() === "dinner"){
        dinner()
   }
}

function lunch(){
    title.textContent = "Lunch Buffet";
    image.src = "/src/lunch.jpg"
    openingTimes.textContent = "12pm - 4pm"

}

function breakfast(){
    title.textContent = "Breakfast Buffet";
    image.src = "/src/breakfast.jpg"
    openingTimes.textContent = "7am - 10:30am"

}

function dinner(){
    title.textContent = "Dinner Buffet";
    image.src = "/src/dinner.jpg"
    openingTimes.textContent = "6pm - 11:30pm (last order at 11pm)"
}

const tab = document.querySelectorAll(".tab")
tab.forEach(element => element.addEventListener("click",loadTab))


