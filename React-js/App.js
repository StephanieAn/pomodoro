import React,{ ReactDOM } from "react";
import Header from "./header";
import Timer from "./timer";
import Buttons from "./buttons";
import "../App.css";

function App() {
    return (
        <>
            <Header />
            <Timer />
            <Buttons />
        </>
    );
}
export default App;