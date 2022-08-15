import { createContext, useContext } from "react";

export type GlobalContent = {
    token?: string
    setToken?:(c:string)=>void;
  }
  
  export const TokenContext = createContext<GlobalContent>({});


