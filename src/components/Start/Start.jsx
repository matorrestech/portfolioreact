import React from "react"

import logo from "../../assets/logo-mt-horizontal.svg"

export default function Start() {
    return (
        <section
            className="
                bg-default bg-cover bg-center h-screen flex flex-col justify-center items-center
                sm:bg-sm 
                md:bg-md 
                lg:bg-lg 
                xl:bg-xl 
                2xl:bg-2xl"
        >
            <div
                className="
                    text-beige flex flex-col items-center"
            >
                <img
                    src={logo}
                    alt="logo"
                    className="
                        w-60
                        sm:w-96"
                />
                <p
                    className="
                        font-sm font-thin py-3 text-xl pb-1
                        sm:text-4xl"
                >
                    MATHEUS <span className="font-semibold">TORRES</span>
                </p>

                <div className="flex justify-center items-center">
                    <a
                        href="https://instagram.com/matorrestech"
                        target="_blank"
                        className="
                            text-beige"
                    >
                        <i
                            className="
                                mdi mdi-instagram
                                text-2xl text-beige
                                sm:text-4xl"
                        ></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/matorrestech/"
                        target="_blank"
                        className="
                            text-beige"
                    >
                        <i
                            className="
                                mdi mdi-linkedin
                                text-2xl text-beige
                                sm:text-4xl"
                        ></i>
                    </a>
                    <a
                        href="https://github.com/matorrestech"
                        target="_blank"
                        className="
                            text-beige"
                    >
                        <i
                            className="
                                mdi mdi-github
                                text-2xl text-beige
                                sm:text-4xl"
                        ></i>
                    </a>
                    <p
                        className="
                        text-xs
                        sm:text-lg"
                    >
                        /matorres<span className="font-semibold">tech</span>
                    </p>
                </div>
            </div>
            <div
                className="
                    text-beige py-10 px-6 text-center
                    sm:py-16"
            >
                <p
                    className="
                        sm:text-lg"
                >
                    As a&nbsp;
                    <span
                        className="
                            font-semibold text-xl"
                    >
                        Web Developer
                    </span>
                    , I build digital bridges that connect users and innovation
                    through design and technology.
                </p>
            </div>

            <div
                className="
                    text-beige flex justify-center items-center"
            >
                <a
                    href="#"
                    className="
                        hover:bg-beige hover:text-navyBlue hover:font-semibold px-2 text-lg
                        sm:text-xl"
                >
                    <spam>Start a neu project </spam>
                    <i
                        className="
                            mdi mdi-arrow-right
                            "
                    ></i>
                </a>
            </div>
        </section>
    )
}
