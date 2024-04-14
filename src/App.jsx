import React from "react"

import "./App.css"

import "@mdi/font/css/materialdesignicons.css"

import Start from "./components/Start/Start"
import Navbar from "./components/Navbar/Navbar"

function App() {
    return (
        <>
            <Navbar />
            <Start />
        </>
    )
}

export default App
