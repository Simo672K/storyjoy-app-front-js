import { createContext } from "react";

const NotifContext= createContext({show: false});

function NotifCtxProvider(props) {
  return <NotifContext.Provider {...props}/>
}

export {NotifContext, NotifCtxProvider}