import React from "react"

export default function SkillsCard(props) {
    return (
        <div
            className="
                w-80 h-60 flex flex-col justify-center p-5 m-2 bg-beige bg-opacity-5 hover:bg-opacity-10
                sm:w-96 sm:mx-3"
        >
            <img src={props.icon} className="w-10" />
            <p
                className="
                    text-xl font-medium p-2
                    sm:text-2xl"
            >
                {props.title}
            </p>
            <p
                className="
                    text-sm text-justify
                    sm:text-base"
            >
                {props.text}
            </p>
        </div>
    )
}
