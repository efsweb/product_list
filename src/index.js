import React from "react";
import {ReactDOM, createRoot} from 'react-dom/client';
import "./App.css";
import App from "./App";

const container = document.getElementById("root")
const root 		= createRoot(container);
root.render(<App />)
