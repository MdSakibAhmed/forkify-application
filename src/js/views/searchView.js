import {
    elements
} from './base'

export const getInput = () => elements.searchInput.value


const limitRicepTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, curr) => {
            if (acc + curr.length <= limit) {

                newTitle.push(curr)


            }
            return acc + curr.length
        }, 0)

        return `${newTitle.join(' ')}...`
    }

   

 //Another way of solution
    // if (title.length > limit) {    
    //     title = title.slice(0, limit);    
    //     title = title.slice(0, title.lastIndexOf(' ')) + ' …';
    // }
    // return title;

   

    return title
}


const renderRecipe = recipes => {
    const markup = `
    
        <li>
            <a class="results__link" href= #${recipes.recipe_id}>
                <figure class="results__fig">
                <img src=${recipes.image_url} alt=${recipes.title}>
                </figure>
                <div class="results__data">
                  <h4 class="results__name">${limitRicepTitle(recipes.title)}</h4>
                  <p class="results__author">${recipes.publisher}</p>
                 </div>
            </a>
        </li>
     

    `
    elements.searchResList.insertAdjacentHTML('beforeend', markup);

}

const creatButton = (page,type)=>`
<button class="btn-inline results__btn--${type}" data-goto=${type === 'prev'? page-1 : page+1}>
           <span>Page ${type === 'prev'? page-1 : page+1}</span>
             <svg class="search__icon">
                 <use href="img/icons.svg#icon-triangle-${type === 'prev'? 'left' : 'right'}"></use>
              </svg>
             
             </button>

`




const renderButtons = (page,numResults,resPerpage) =>{
    const pages = Math.ceil(numResults /  resPerpage);
let button;
    if(page === 1 && pages > 1){
     
        // Only button to get the next page
       button =  creatButton(page,'next')
    }
    else if(page < pages){

        // Both button
   button = `${creatButton(page,'next')}${creatButton(page,'prev')}`
        
        

    }
    else if (page === pages && pages > 1){

        // Only button to go the previous page

        button = creatButton(page, 'prev')

    }

    elements.searchResPages.insertAdjacentHTML('afterbegin',button)

}
export const renderResult = (recipes,page= 1, resPerpage = 10)=> {
    // render result of cureent page
    const start = (page -1) * resPerpage;
    const end = page  * resPerpage;
    recipes.slice(start,end).forEach(renderRecipe)

    // render paganation button

    renderButtons(page,recipes.length,resPerpage);
}


export const clearInput = () => {

    elements.searchInput.value = ''
    elements.searchResPages.innerHTML =''

}

export const clearResult = () => {
    elements.searchResList.innerHTML = ""
    elements.searchResPages.innerHTML =''
}