import { atom } from "recoil";
import { IUser } from "../../type";
import { getFromLocalStorage } from "../../utils/localStorage";
import { TOKEN_KEY, USER_KEY } from "../constance";

export const tokenAtom = atom<string | null>({
  key: "tokenAtom",
  default: getFromLocalStorage(TOKEN_KEY),
});

export const userAtom = atom<IUser | null>({
  key: "userAtom",
  default: getFromLocalStorage(USER_KEY),
});
