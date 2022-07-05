const usePaginationLogic = (currentPage, pokemons) => {


    //logica de paginacion
    let arrayPokemons = []
    const pokemonsPerPage = 20
     if(pokemons?.length < pokemonsPerPage){
       arrayPokemons.push(...pokemons.map(pokemon => pokemon))
     }else{
       const lastPokemon = currentPage * pokemonsPerPage
       arrayPokemons = pokemons?.slice(lastPokemon - pokemonsPerPage, lastPokemon)
     }
  
     let arrayPages = []
     let quantityPages = Math.ceil(pokemons?.length / pokemonsPerPage)
     let pagesPerBlock = 20
     let currentBlock = Math.ceil(currentPage / pagesPerBlock)
     if (currentBlock * pagesPerBlock >= quantityPages){
       for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages; i++){
         arrayPages.push(i)
       }
     }else{
      for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock; i++){
        arrayPages.push(i)
      }
     }
  
     return {arrayPokemons, quantityPages, arrayPages}
  }
  
  export default usePaginationLogic