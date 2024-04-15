import React, { useState } from "react"

import logo from "../../assets/logo-mt-horizontal.svg"
import hamburger from "../../assets/icon-menu-hamburger.svg"
import closeIcon from "../../assets/icon-menu-close.svg"
import flagBr from "../../assets/flag-br.png"
import flagUk from "../../assets/flag-uk.png"
import MobileLink from "./MobileLink"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav
            className="
                flex justify-between items-center bg-navyBlue fixed w-full text-beige h-12 px-3 mt-0 z-50 
                sm:h-16"
        >
            <div className="flex">
                <img
                    src={logo}
                    alt="Logo Matheus Torres"
                    className="
                        w-16 px-1
                        sm:w-24"
                />
                <p
                    className="
                        font-sm font-thin pt-1 px-1
                        sm:text-2xl"
                >
                    MATHEUS <span className="font-semibold">TORRES</span>
                </p>
            </div>
            <img
                src={isOpen ? closeIcon : hamburger}
                className="
                    w-8 p-1
                    sm:w-12"
                onClick={toggleMenu}
            />
            {isOpen && (
                <div
                    className="
                        fixed top-12 right-0 w-full h-full bg-navyBlue text-beige 
                        sm:top-16 sm:text-2xl"
                >
                    <MobileLink link="#home" text="HOME" click={toggleMenu} />

                    <MobileLink
                        link="#skills"
                        text="SKILLS"
                        click={toggleMenu}
                    />

                    <MobileLink
                        link="#aboutMe"
                        text="ABOUT ME"
                        click={toggleMenu}
                    />

                    <MobileLink
                        link="#projects"
                        text="PROJECTS"
                        click={toggleMenu}
                    />

                    <MobileLink
                        link="#contacts"
                        text="CONTACTS"
                        click={toggleMenu}
                    />

                    <MobileLink
                        link="#"
                        text="DOWNLOAD CV"
                        click={toggleMenu}
                    />

                    <hr
                        className="
                            my-5 mx-4"
                    />
                    <div
                        className="
                            mt-7 flex w-full justify-center items-center"
                    >
                        <a
                            href="#"
                            className="
                                flex justify-center items-center px-3 hover:bg-beige hover:text-navyBlue hover:font-medium"
                            onClick={toggleMenu}
                        >
                            <img
                                src={flagBr}
                                alt="Brazilian flag"
                                className="
                                    w-8 p-1
                                    sm:w-10"
                            />
                            <p>PT-BR</p>
                        </a>

                        <a
                            href="#"
                            className="
                                flex justify-center items-center px-3 hover:bg-beige hover:text-navyBlue hover:font-medium"
                            onClick={toggleMenu}
                        >
                            <img
                                src={flagUk}
                                alt="British flag"
                                className="
                                    w-8 p-1
                                    sm:w-10"
                            />
                            EN-GB
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}
