import { atom } from "recoil";
const authState = atom({
    key: 'authState', // unique ID (with respect to other atoms/selectors)
    default: {
        token: null,
        userId: null,
        user: null,
    }, // default value (aka initial value)
  });

  export default authState

  /*
  auth = store 
  State = atom

  */