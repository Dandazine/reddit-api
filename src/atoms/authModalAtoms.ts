import { atom } from "recoil";

export interface AuthModalState {
  open: boolean; // if modal is open or not, true or false
  view: "login" | "signup" | "resetPassword"; // Which modal is open- which string is it going to show
}

const defaultModalState: AuthModalState = {
  open: false,
  view: "login",
};

// creating the atom
export const authModalState = atom<AuthModalState>({
  // unique parameter for recoil atom
  key: "authModalState",
  //   initial value
  default: defaultModalState,
});
