export function combineEvents(reducers: any, initialState: any): any {
  return (state: any = initialState, event: any) => {
    if (reducers.hasOwnProperty(event.type)) {
      return reducers[event.type](state, event);
    } else if (reducers.hasOwnProperty('default')) {
      return reducers.default(state, event);
    } else {
      return state;
    }
  };
}
