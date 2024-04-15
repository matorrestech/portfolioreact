import React from "react"

import SkillsCard from "./SkillsCard"
import SectionTitle from "../SectionTitle"

import iconFrontEnd from "../../assets/icon-front-end.svg"
import iconCode from "../../assets/icon-code.svg"
import iconResponsiveDesign from "../../assets/icon-responsive-design.svg"
import iconSeo from "../../assets/icon-seo.svg"
import iconMobile from "../../assets/icon-mobile.svg"
import iconDesign from "../../assets/icon-design.svg"

export default function Skills() {
    return (
        <section
            id="skills"
            className="
                relative max-w-screen-xl mx-auto"
        >
            <SectionTitle
                title="SKILLS"
                description="I transform designs into agile, high-quality, and high-performance web pages."
            />
            <div
                className="
                flex flex-wrap justify-center items-center"
            >
                <SkillsCard
                    icon={iconFrontEnd}
                    title="FRONT-END"
                    text="The art of transforming code into captivating visual experiences that connect users and technology."
                />

                <SkillsCard
                    icon={iconCode}
                    title="CODE"
                    text="Through coding, I transform ideas into digital realities, accelerating innovation and sculpting the future."
                />

                <SkillsCard
                    icon={iconResponsiveDesign}
                    title=" RESPONSIVE DESIGN"
                    text="Adapting the web for any screen, ensuring flawless experiences across all devices."
                />

                <SkillsCard
                    icon={iconSeo}
                    title="SEO"
                    text="The art of positioning your digital presence on the main stage of search results."
                />

                <SkillsCard
                    icon={iconMobile}
                    title="MOBILE"
                    text="Turning ideas into incredible apps with native performance from a single source code."
                />

                <SkillsCard
                    icon={iconDesign}
                    title="DESIGN"
                    text="Creating visual connections that speak directly to the heart, transforming the ordinary into the extraordinary."
                />
            </div>
        </section>
    )
}
