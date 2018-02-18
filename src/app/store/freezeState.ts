function deepFreeze(o) {
  Object.freeze(o);

  Object.getOwnPropertyNames(o).forEach(prop => {
    const currentObject = o[prop];
    if (o.hasOwnProperty(prop)
      && (currentObject !== null)
      && (typeof currentObject === 'object')
      && !Object.isFrozen(currentObject)
    ) {
      deepFreeze(currentObject);
    }
  });

  return o;
}

export default function freezeState(store) {
  return (next) => (action) => {
    const result = next(action);
    const state = store.getState();
    deepFreeze(state);
    return result;
  };
}
