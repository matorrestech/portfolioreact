import React from "react"

import "./App.css"

import "@mdi/font/css/materialdesignicons.css"

import Start from "./components/Start/Start"
import Navbar from "./components/Navbar/Navbar"
import Skills from "./components/Skills/Skills"

function App() {
    return (
        <div
            id="home"
            className="
              bg-navyBlue text-beige"
        >
            <Navbar />
            <Start />
            <Skills />
        </div>
    )
}

export default App
