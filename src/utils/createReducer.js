export default function createReducer(config, initialState) {
  return (state = initialState, action) => {
    if(config.hasOwnProperty(action.type)) {

      const newState = config[action.type](state, action);

      if(typeof state === 'object') {
        return {
          ...state,
          ...newState
        };
      } else if (typeof state === 'array') {
        return [
          ...state,
          ...newState
        ];
      } else {
        return newState;
      }

    } else {
      return state;
    }
  };
}
