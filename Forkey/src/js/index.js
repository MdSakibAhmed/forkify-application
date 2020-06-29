
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





/*
Global App controler
*-- search object
*-- recipe object
*-- shoping list object
*-- liked recipes

*/

const state = {}

const controlSearch = async () =>{

    // 1) get query from the view
    const query = 'pizza'

    if(query){

        // 2) New seacrh object and add to state
        state.search = new Search(query)
        console.log(state.search);

        // 3) prapare UI for results

        // 4) search for recipes
       const recip = await state.search.getSearch();
       console.log(recip);
       console.log(state.search.result);
    }
    

}

document.querySelector('.search').addEventListener('submit', e =>{
    e.preventDefault()
    console.log(e);
    controlSearch()

})

// const search = new Search('pizza')


// console.log(search);

// search.getSearch();
  

//getSearch('garlic')



