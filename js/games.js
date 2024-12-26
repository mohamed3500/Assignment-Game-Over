import { DisplayGamesListByCategory } from './ui.js'
import { spinnerDiv } from './index.js';

export class GetGamesListByCategory {

    constructor(category) {
        this.category = category;
    }

    async fetchByCategory() {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`;
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
            let displayByCategory = new DisplayGamesListByCategory(result);
            displayByCategory.putInHtml();
            spinnerDiv.classList.add('d-none');
        } catch (error) {
            console.error(error);
            spinnerDiv.classList.add('d-none');
        }
    }


}