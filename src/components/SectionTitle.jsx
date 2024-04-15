import React from "react"

export default function SectionTitle(props) {
    return (
        <div>
            <div
                className="
                    flex items-center justify-center
                    md:pt-2"
            >
                <hr
                    className="
                        w-12 border-t-1 border-beige
                        sm:w-40"
                />
                <h1
                    className="
                    text-4xl font-semibold
                    sm:text-5xl"
                >
                    &nbsp;{props.title}&nbsp;
                </h1>
                <hr
                    className="
                        w-12 border-t-1 border-beige
                        sm:w-40"
                />
            </div>
            <p
                className="
                    text-sm text-center p-3 py-5
                    sm:text-lg"
            >
                {props.description}
            </p>
        </div>
    )
}
