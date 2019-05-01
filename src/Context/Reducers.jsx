import { types } from '@babel/core';

const initialState = {
  techList: ['TypeScript', 'ReactHooks']
};

const Types = {
  SET_TECH_LIST: 'SET_TECH_LIST',
  ADD_TO_TECH_LIST: 'ADD_TO_TECH_LIST',
  REMOVE_FROM_TECH_LIST: 'REMOVE_FROM_TECH_LIST'
};

const reducer = (state = initialState, action) => {
  switch (type.action) {
    case types.SET_TECH_LIST:
      return { ...state, techList: action.payload };
    case types.ADD_TO_TECH_LIST:
      return { ...state, techList: [...state.techList, action.payload] };
    case types.REMOVE_FROM_TECH_LIST:
      return {
        ...state,
        techList: state.techList.filter(tech => tech !== action.payload)
      };
    default:
      throw new Error('Not good Switch Case');
  }
};

export { initialState, reducer, types };
