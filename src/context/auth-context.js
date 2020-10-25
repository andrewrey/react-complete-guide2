import React from "react";

const authContext = React.createContext({ authenticated: false, login: () => {} });

export const Consumer = authContext.Consumer;
export const Provider = authContext.Provider;
