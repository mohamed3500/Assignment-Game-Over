import { GetGameDetails } from './details.js';
import { spinnerDiv } from './index.js';

export class DisplayGamesListByCategory {
    dataContainer = document.getElementById("data-container");
    container = "";
    constructor(gamesArray) {
        this.gamesArray = gamesArray;
    }

    putInHtml() {

        for (const element of this.gamesArray) {
            this.container += `
             <div class="col-md-6 col-lg-4 col-xl-3" gameid="${element.id}">
                        <div class="card h-100">
                            <div class="card-img p-2">
                                <img src="${element.thumbnail}" class="card-img-top" alt="${element.title} game">
                            </div>
                            <div class="card-body">
                                <div class="name-and-price d-flex justify-content-between align-items-center">
                                    <h5 class="card-title text-white">${element.title}</h5>
                                    <a href="#" class="btn btn-primary btn-sm">Free</a>
                                </div>

                                <p class="card-text text-center my-2 opacity-50 text-white">${element.short_description.split(" ").slice(0, 8).join(" ")}</p>
                            </div>
                            <div class="card-footer d-flex justify-content-between ">
                                <span class="badge text-bg-secondary">${element.genre}</span>
                                <span class="badge text-bg-secondary">${element.platform}</span>
                            </div>
                        </div>
                        </div>
            `
        }

        this.dataContainer.innerHTML = this.container;
        this.addEventsToDivs();
        spinnerDiv.classList.add('d-none');
    }

    addEventsToDivs() {
        const gameDiv = document.querySelectorAll('#data-container > div');

        for (let i = 0; i < gameDiv.length; i++) {

            gameDiv[i].addEventListener('click', function () {
                this.getGamedetails = new GetGameDetails(this.getAttribute("gameid"));
                spinnerDiv.classList.remove('d-none');

                this.getGamedetails.fetchById();
            })
        }
    }
}

export class DisplayGameDetails {
    gameDetailsContainer = document.getElementById("game-details-container");
    gamesListSection = document.getElementById("games-list");
    gameDetailsSection = document.getElementById("game-details-section");
    pageHeader = document.getElementsByTagName("header")[0];
    pageNavbar = document.getElementsByTagName("nav")[0];
    closeBtn = document.getElementById("close-btn");
    constructor(gameObject) {
        this.gameObject = gameObject;
    }

    showGameDetails() {
        let gameDetailsHtml = `
        <div class="row g-5">
                        <div class="col-md-4">
                            <img src="${this.gameObject.thumbnail}" alt="${this.gameObject.title} image" class="w-100">
                        </div>
                        <div class="col-md-8">
                            <h3>Title: ${this.gameObject.title}</h3>
                            <p>Category: <span class="badge rounded-pill text-bg-info">${this.gameObject.genre}</span></p>
                            <p>Platform: <span class="badge rounded-pill text-bg-info">${this.gameObject.platform}</span></p>
                            <p>Status: <span class="badge rounded-pill text-bg-info">${this.gameObject.status}</span></p>
                            <p>${this.gameObject.description}</p>
                            <a href="${this.gameObject.game_url}" target="_blank">
                                <button type="button" class="btn btn-outline-warning text-white fw-bold">Show
                                    Game</button>
                            </a>
                        </div>
                    </div>
        `
        this.gamesListSection.classList.add("d-none");
        this.pageHeader.classList.add("d-none");
        this.pageNavbar.classList.add("d-none");
        this.gameDetailsContainer.innerHTML = gameDetailsHtml;
        this.closeBtn.addEventListener('click', this.addEventToClose.bind(this));
        this.gameDetailsSection.classList.remove("d-none");
        spinnerDiv.classList.add('d-none');
    }

    addEventToClose() {
        this.gamesListSection.classList.remove("d-none");
        this.gameDetailsSection.classList.add("d-none");
        this.pageHeader.classList.remove("d-none");
        this.pageNavbar.classList.remove("d-none");
    }
}