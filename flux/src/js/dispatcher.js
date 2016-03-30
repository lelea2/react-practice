import { Dispatcher } from "flux";

const flux = new Dispatcher();

export function register(callback) {
  return flux.register(callback);
}

export function dispatch(actionType, action) {
  return flux.dispatch(actionType, action);
}

//export default new Dispatcher;

