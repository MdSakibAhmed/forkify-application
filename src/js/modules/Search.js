// export default 'I am default exported'
import axios from 'axios'
export default class Search{
    constructor(query){
        this.query = query;

    }

   async getSearch (query){

        try {
    
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
            //console.log(res);
            
            this.result = res.data.recipes

           // return this.result;

            console.log(this.result);

            

            
    
            //console.log(res.data.recipes);
        }
        catch(error){
            console.log(error);
        }
    
    
    
    
    }

}