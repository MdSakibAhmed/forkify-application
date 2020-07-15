import axios from 'axios'
export default class Recipe {
    constructor(id) {
        this.id = id
    }

    async getRecipe() {
        try {
            const res = await axios(`https://forkify-api.herokuiiiapp.com/api/get?rId=${this.id}`)
            console.log(res);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;

        } catch (error) {
            console.log(error);
            alert('something went wrong :(')

        }




    }

    calcTime(){
        // Assuming that we need 15 min for each 3 ingradients
       const  numIngr = this.ingredients.length;
       const peroieds = Math.ceil(numIngr / 3);
       this.time = peroieds * 15;

    }

    calcServing (){
        this.serving = 4;
    }
}