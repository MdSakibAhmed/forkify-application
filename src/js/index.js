
// Global App controler
//Default export
//import str from './modules/search'

// Named Export

// First way 
//import {f1,ahmed} from './views/searchView'
//secand way by new name
//import {f1 as x, ahmed as y} from './views/searchView'

// third way

// import * as searchView from './views/searchView'


// console.log(`I am ${searchView.f1(2)} and ${searchView.ahmed(5)} sakib`);

// console.log(`Hi I am ${str}`);

import Search from './modules/Search'
import * as SearchView from './views/searchView'
import {elements,renderLoder,clearLoader} from './views/base'
import Recipe from './modules/Recipe'



/*
Global App controler
*-- search object
*-- recipe object
*-- shoping list object
*-- liked recipes

*/

const state = {}

/*
 *SEARCH CONTROLER
*/

const controlSearch = async () =>{

    // 1) get query from the view
    const query = SearchView.getInput();
    console.log(query);

    if(query){

        // 2) New seacrh object and add to state
        state.search = new Search(query)
        console.log(state.search);

        // 3) prapare UI for results
         
        SearchView.clearInput()

        SearchView.clearResult();
        renderLoder(elements.result)

        // 4) search for recipes

        try{
        await state.search.getSearch();

        clearLoader()

        // 5) render result on the UI
       
        SearchView.renderResult(state.search.result);}
        catch(error){
            alert(error)
        }

        

       
    }
    

}

elements.searchForm.addEventListener('submit', e =>{
    e.preventDefault()
    console.log(e);
    controlSearch()

})



elements.searchResPages.addEventListener('click', e =>{
    const btn = e.target.closest('.btn-inline')

    if(btn){

        const goToPage = parseInt(btn.dataset.goto,10)
        SearchView.clearResult()
        SearchView.renderResult(state.search.result,goToPage);
        console.log(goToPage);
    }
    console.log(btn);
})

/*
 * RECIPE CONTROLER

*/
// The Window.location read-only property returns a Location object with information about the current location of the document.


const controleRecipe = async () =>{
    // Get Id from URL
    const id = window.location.hash.replace('#','');
    //console.log(id);

    // Prepeare UI for changes

    // Creat new  recipe Object
    if(id){
    state.recipe = new Recipe(id);

try{

    await state.recipe.getRecipe()
    
    // Calcaulating Servicing and timing
    state.recipe.calcTime()
    state.recipe.calcServing()
    // Render recipe
    console.log(state.recipe);
}
catch(error){
    alert(error)
}
    // Get Recipe Data
    }


}
// The hashchange event fires when a window's hash changes (see Window.location and HTMLHyperlinkElementUtils.hash).
// window.addEventListener('hashchange',controleRecipe)
// window.addEventListener('load',controleRecipe)

// add multiple diferents events with one eventListener

['hashchange','load'].forEach(  event => window.addEventListener(event,controleRecipe));







// const r = new Recipe(46956)
//  r.getRecipe()
// console.log(r);



