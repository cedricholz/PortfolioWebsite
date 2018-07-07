import React from 'react';
import "./cpu.css"

import ProjectBackground from '../../../components/ProjectBackground/ProjectBackground'
import Projects from '../../../components/Projects/Projects'
import GithubShare from "../../../components/GithubShare/GithubShare"
import assember from '../../../images/assember.jpg'
import mips from '../../../images/mips.png'
import cpu from '../../../images/cpu.png'
import blackgithub from '../../../images/blackgithub.png'

blackgithub
export default class CPU extends React.Component {

    render() {
        return (
            <div className="DashClass">

                <ProjectBackground projectName={"MIPS Assembler, Linker, and CPU"}
                                   backgroundColor={'linear-gradient(to top right, #000428, #004e92)'}/>
                <div className="TextBlock">

                    <h2>A computer built from the ground up using Logicism for the circuitry design and C for the
                        MIPS assembly
                        language compiler</h2>


                    <h3>The MIPS Assembler parses MIPS commands in C, and translates them into machine code.</h3>


                    <img src={assember}/>


                    <GithubShare customTitle={'Assembler Code on GitHub'} url={'https://github.com/cedricholz?tab=repositories'}/>

                    <h3>The MIPS Linker combines code into an executable file and relocates the appropriate memory
                        addresses.</h3>


                    <img src={mips}/>

                    <GithubShare customTitle={'Linker Code on GitHub'} url={'https://github.com/cedricholz/Mips-Linker'}/>


                    <h3>The Single Cycle MIPS CPU that executes MIPS commands.</h3>

                    <img src={cpu}/>

                </div>

                <Projects/>
            </div>
    )
    }
    };