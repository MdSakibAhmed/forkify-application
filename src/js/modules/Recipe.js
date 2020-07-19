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

    calcTime() {
        // Assuming that we need 15 min for each 3 ingradients
        const numIngr = this.ingredients.length;
        const peroieds = Math.ceil(numIngr / 3);
        this.time = peroieds * 15;

    }

    calcServing() {
        this.serving = 4;
    }

    parseIngredients() {

            const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
            const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
            const newIngredients = this.ingredients.map(el => {
                    // 1. Uniform units
                    let ingredient = el.toLowerCase();
                    unitsLong.forEach((unit, i) => {
                        ingredient = ingredient.replace(unit, unitsShort[i]);

                        // 2. remove parentheses

                        // 3 .parse ingredients into count , unit and ingredient

                    })

                    this.ingredients = newIngredients;


                }
            }