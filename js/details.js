import { DisplayGameDetails } from './ui.js'
import { spinnerDiv } from './index.js';

export class GetGameDetails {
    constructor(gameId) {
        this.gameId = gameId;
    }

    async fetchById() {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.gameId}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'bd01b84ef9msh99a733071a0dd58p11e002jsn213251160bd9',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            let displayGameDetails = new DisplayGameDetails(result);
            displayGameDetails.showGameDetails();
        } catch (error) {
            console.error(error);
            spinnerDiv.classList.add('d-none');
        }
    }
}

