import React from "react"
import "./projectsstyles.css"
import ProjectTile from "./ProjectTile"
import SectionHeader from "../SectionHeader/SectionHeader"
import Contact from "../Contact/Contact"


const Projects = React.forwardRef(({mainPage}, ref) => {

    return (
        <div ref={ref}>
            <SectionHeader title={"PROJECTS"}/>
            <div className="Projects">

                <ProjectTile imageName={"scanslight.png"}
                             projectName={"Aegir"} url={"/aegir"}
                             languages={["React-Native"]}/>

                <ProjectTile imageName={"radii.PNG"}
                             projectName={"Radii"} url={"/radii"}
                             languages={["React-Native"]}/>

                <ProjectTile imageName={"berkeley.png"}
                             projectName={"Time Capsule"} url={"/timecapsule"}
                             languages={["Android"]}/>


                <ProjectTile imageName={"cryptocurrencytrader.png"}
                             projectName={"Bittrex Cryptocurrency Trading Algorithm with Reddit Scraper / Data Miner"}
                             url={"/cryptotrader"}
                             languages={["Python"]}
                />


                <ProjectTile imageName={"Portfolio.png"}
                             projectName={"Holdings: An Automated Cryptocurrency Portfolio App"}
                             url={"/holdings"}
                             languages={["React-Native"]}/>

                <ProjectTile imageName={"mcafeebot.png"}
                             projectName={"McAfee Twitter Cryptocurrency Bot"} url={"/mcafeebot"}
                             languages={["Python"]}/>


                <ProjectTile
                    languages={["Python", "pi"]}
                    imageName={"distancelightsthumb.png"}
                    projectName={"WIFI Distance Lights"}
                    url={"/distancelights"}/>

                <ProjectTile imageName={"canlauncher.png"}
                             projectName={"Can Launching Mini Fridge"} url={"/canlauncher"}
                             languages={["Android", "Arduino"]}/>

                <ProjectTile imageName={"cputhumb.png"} projectName={"MIPS Assembler, Linker, and CPU"}
                             url={"/cpu"} languages={["C", "MIPS"]}/>

            </div>
            {mainPage ? "" : <Contact/>}

        </div>
    )
})


export default Projects
