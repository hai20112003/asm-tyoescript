import { ISignup, IUser } from "../interface/user";
import instance from "./instance";

export const login = (user: IUser) => {
  return instance.post("/signin", user);
};

export const signin = (user: ISignup) => {
  return instance.post("/signup", user);
};
