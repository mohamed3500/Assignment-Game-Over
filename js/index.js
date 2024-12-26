import { GetGamesListByCategory } from './games.js';


const categoryLinks = document.querySelectorAll(".navbar-nav li a");
export const spinnerDiv = document.getElementById("spinner-div");

let getGamesList = new GetGamesListByCategory('mmorpg');
spinnerDiv.classList.remove('d-none');
getGamesList.fetchByCategory();


for (let i = 0; i < categoryLinks.length; i++) {
    categoryLinks[i].addEventListener('click', function () {
        getGamesList = new GetGamesListByCategory(categoryLinks[i].innerText);
        spinnerDiv.classList.remove('d-none');
        getGamesList.fetchByCategory();
        for (let j = 0; j < categoryLinks.length; j++) {
            categoryLinks[j].classList.remove("active");
        }
        categoryLinks[i].classList.add("active");
    })
}



