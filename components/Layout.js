import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SendMailModal from "./Modals/SendMailModal/SendMailModal";
import { useState, useContext, useEffect, useRef } from "react";
import ContextProvider from "../components/Context";
export default function Layout({ children }) {
  return (
    <ContextProvider>
     <SendMailModal />
      <Header></Header>
      {children}
      <Footer></Footer>
    
    </ContextProvider>
  );
}
