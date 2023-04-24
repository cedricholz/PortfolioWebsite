import React from "react"
import "./cpu.css"

import ProjectBackground from "../../ProjectBackground/ProjectBackground"
import Projects from "../../Projects/Projects"
import GithubShare from "../../GithubShare/GithubShare"
import {ASSETS_BASE_URL} from "../../../constants"

const CPU = () => {


    return (
        <div>

            <ProjectBackground projectName={"MIPS Assembler, Linker, and CPU"}
                               backgroundColor={"linear-gradient(to top right, #000428, #004e92)"}
                               languages={["C", "Mips"]}/>
            <div className="TextBlock">

                <h2>A computer built from the ground up using Logicism for the circuitry design and C for the
                    MIPS assembly
                    language compiler</h2>


                <h3>The MIPS Assembler parses MIPS commands in C, and translates them into machine code.</h3>


                <img alt="" className="Image" src={`${ASSETS_BASE_URL}assembler.png`}/>


                <GithubShare customTitle={"Assembler Code on GitHub"}
                             url={"https://github.com/cedricholz?tab=repositories"}/>

                <h3>The MIPS Linker combines code into an executable file and relocates the appropriate memory
                    addresses.</h3>


                <img alt="" className="Image" src={`${ASSETS_BASE_URL}mips.png`}/>

                <GithubShare customTitle={"Linker Code on GitHub"}
                             url={"https://github.com/cedricholz/Mips-Linker"}/>


                <h3>The Single Cycle MIPS CPU that executes MIPS commands.</h3>

                <img alt="" className="Image" src={`${ASSETS_BASE_URL}cpu.png`}/>

            </div>

            <Projects mainPage={false}/>
        </div>
    )

}

export default CPU