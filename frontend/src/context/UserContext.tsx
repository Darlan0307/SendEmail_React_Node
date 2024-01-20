import { createContext, useContext, useState } from "react";

type UserValues = {
  userEmail:string,
  setUserEmail:(value:string)=>void
}

export const UserContext = createContext({} as UserValues)


type ProviderProps = {
  children: React.ReactNode;
}

export const UserProvider = ({children}:ProviderProps) => {
  const [userEmail,setUserEmail] = useState('')

  return (
    <UserContext.Provider value={{
      userEmail,
      setUserEmail
    }}>
      {children}
    </UserContext.Provider>

  );
}

export const UseUser = () => {
  return useContext(UserContext)
}
