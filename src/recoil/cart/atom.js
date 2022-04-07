import { atom } from "recoil";
const cartState = atom({
    key: 'cartState', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
  });

  export default cartState

  