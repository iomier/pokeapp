export const useActions = (state, dispatch) => {
  function addTechToListAction(newTech) {
    const techIndex = state.techList.indexOf(newTech);
    if (techIndex !== -1) {
      alert('tech exists');
    } else {
      dispatch({ type: types.ADD_TO_TECH_LIST, payload: newTech });
    }
  }

  return {
    addTechToListAction
  };
};
