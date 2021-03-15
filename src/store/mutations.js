//funções que vão editar o estado
import state from "./state";

export default {
	// Updates da pokedex
	updateOffset() {
		state.offset += state.limit;
	},
	//Adiciona pokemons na pokedex para ter o infinite loading
	setList(list) {
		state.list.push(...list);
		state.tmpList.push(...list);
	},
	//Informa se a pokedex precisa de mais dados
	setListHasNext(flag) {
		state.listHasNext = flag;
	},
	//Informa se a pokedex terminou de buscar os dados
	setListHasCompleted(flag) {
		state.listHasCompleted = flag;
	},
	//Informa se a pokedex deu algum erro
	setListHasError(flag) {
		state.listHasError = flag;
	},
	//reseta a pokedex para o ultimo cache que vai remover a info de search
	resetList() {
		state.list = [...state.tmpList];
		state.isPokemonSearch = false;
		state.listHasError = false;
		state.searchHasError = false;
		state.pokemonId = null;
	},
	// Adiciona na pokedex somente o pokemon procurado
	setPokemonSearched(pokemon) {
		state.list = [pokemon];
	},
	//Informa que a busca está acontecendo
	setIsSearching(flag) {
		state.isSearching = flag;
	},
	// O Search foi feito
	setIsPokemonSearch(flag) {
    state.isPokemonSearch = flag;
  },
  //Search error
  setSearchHasError(flag){
    state.searchHasError = flag
	},
	//Seleciona o pokemon
	setPokemonId(id = null){
		state.isPokemonSearch = false;
		state.pokemonId = id;
	}
};
