import { createContext, useState } from "react";

export const DataContext = createContext();

export default function ContextProvider(props) {
  const [sendMailModal, setSendMailModal] = useState(0);
  const [price, setPrice] = useState();

  return (
    <DataContext.Provider
      value={{
	    sendMailModal,
        setSendMailModal,
        price,
        setPrice,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
