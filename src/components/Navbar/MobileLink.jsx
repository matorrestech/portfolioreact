import React from "react"

export default function MobileLink(props) {
    return (
        <div>
            <a
                href={props.link}
                className="
                    px-4 py-4 mt-4 hover:bg-beige hover:text-navyBlue hover:font-medium w-full flex justify-center"
                onClick={props.click}
            >
                <span
                    className="
                        px-2"
                >
                    {props.text}
                </span>
            </a>
        </div>
    )
}
