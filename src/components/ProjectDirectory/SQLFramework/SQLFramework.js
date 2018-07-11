import React from 'react';
import "./sqlframework.css"

import ProjectBackground from '../../../components/ProjectBackground/ProjectBackground'
import Projects from '../../../components/Projects/Projects'
import GithubShare from "../../../components/GithubShare/GithubShare"
import db from '../../../images/db.jpg'
import UML from '../../../images/UML.jpg'


export default class SQLFramework extends React.Component {

    render() {
        return (
            <div className="DashClass">

                <ProjectBackground projectName={"Java SQL Framework"}
                                   backgroundColor={'linear-gradient(to top right, #396afc, #2948ff)'} languages={['Java']}/>
                <div className="TextBlock">
                    <h2>A framework to parse and execute SQL-like commands</h2>

                    <h3>We were tasked with the open ended goal of creating a Relational Database System with Domain
                        Specific Language, a lot like SQL, for storing data,into tables and columns like the one
                        below.</h3>

                    <img alt="" className="Image" src={db}/>


                    <h3>We began by getting together to write up a full design for the system on a whiteboard. We came to
                        the conculsion that we should create data tables by storing data in generic type nodes and
                        organizing them into Arraylist columns, so we could more easily join tables together.
                        We then ironed out some finer details by creating this rough UML diagram.</h3>

                    <img alt="" className="Image" src={UML}/>

                    <h3>By creating our design and ironing out the kinks before jumping into writing code, we were able
                        to write the whole thing without any major setbacks and when finished, we had an operational
                        database that could parse and compute commands just like an SQL database.
                    </h3>

                </div>
                <GithubShare url={'https://github.com/cedricholz/SQL-Framework'}/>
                <Projects mainPage={false}/>
            </div>
        )
    }
};