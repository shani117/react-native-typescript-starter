import ACTION_TYPES from "../constants";
import * as SI from "seamless-immutable";

const initialState = SI.from({
  root: undefined // 'login' / 'after-login'
});

const app = (state: any = initialState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.ROOT_CHANGED:
      return state.merge({
        root: action.root
      });
    default:
      return state;
  }
}

export default app;