import { pokemons } from '../utils/list';
const initialState = {
  pokemons: pokemons,
  searchquery: '',
  cartitems: []
};

const types = {
  SET_TECH_LIST: 'SET_TECH_LIST',
  ADD_TO_TECH_LIST: 'ADD_TO_TECH_LIST',
  REMOVE_FROM_TECH_LIST: 'REMOVE_FROM_TECH_LIST',
  SEARCH_ITEMS: 'SEARCH_ITEMS',
  ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TECH_LIST:
      return { ...state, techList: action.payload };
    case types.ADD_TO_TECH_LIST:
      return { ...state, techList: [...state.techList, action.payload] };
    case types.REMOVE_FROM_TECH_LIST:
      return {
        ...state,
        techList: state.techList.filter(tech => tech !== action.payload)
      };
    case types.SEARCH_ITEMS:
      return { ...state, searchquery: action.keyword };
    case types.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartitems: [...state.cartitems.concat(action.payload)]
      };
    default:
      throw new Error('Not good Switch Case');
  }
};

export { initialState, reducer, types };
