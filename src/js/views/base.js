export const elements = {
    searchForm:document.querySelector('.search'),
    result:document.querySelector('.results'),
    searchInput : document.querySelector('.search__field'),
    searchResList:document.querySelector('.results__list'),
    searchResPages:document.querySelector('.results__pages')
}

export const  elementString = {
    loader: 'loader'

}
export const renderLoder = parent =>{
    const loader = `
    <div class=${elementString.loader}>
    <svg>
    <use href="img/icons.svg#icon-cw"></use>
    </svg>
    </div>
    `
    parent.insertAdjacentHTML('afterbegin',loader)
}

export const clearLoader = ()=>{

    const loader = document.querySelector(`.${elementString.loader}`);

    if(loader)loader.parentElement.removeChild(loader);



}
