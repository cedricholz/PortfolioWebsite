import React from 'react';
import "./projectsstyles.css"
import ProjectTile from './ProjectTile'
import SectionHeader from "../../components/SectionHeader/SectionHeader"

export default class Projects extends React.Component {
    render() {
        return (
            <div>
                <SectionHeader title={"PROJECTS"}/>
                <div className="Projects">

                    <ProjectTile imageName={'cryptocurrencytrader.png'}
                                 projectName={'Bittrex Cryptocurrency Trading Algorithm with Reddit Scraper / Data Miner [Python]'}
                                 url={'/cryptotrader'}
                    />

                    <ProjectTile imageName={'distancelightsthumb.png'}
                                 projectName={'WIFI Distance Lights [Python] [Raspberry Pi]'}
                                 url={'/distancelights'}/>

                    <ProjectTile imageName={'dashthumb.png'} projectName={'Dash Class [React.js]'} url={'/dashclass'}/>

                    <ProjectTile imageName={'berkeley.png'}
                                 projectName={'Time Capsule [Android]'} url={'/timecapsule'}/>

                    <ProjectTile imageName={'mcafeebot.png'}
                                 projectName={'McAfee Twitter Cryptocurrency Bot [Python]'} url={'/mcafeebot'}/>

                    <ProjectTile imageName={'Portfolio.png'}
                                 projectName={'Holdings: An Automated Cryptocurrency Portfolio App [React-Native]'}
                                 url={'/holdings'}/>

                    <ProjectTile imageName={'canlauncher.png'}
                                 projectName={'Can Launching Mini Fridge [Android] [Arduino]'} url={'/canlauncher'}/>

                    <ProjectTile imageName={'bearmapsthumb.png'} projectName={'Bear Maps [Java]'}
                                 url={'/bearmaps'}/>

                    <ProjectTile imageName={'cputhumb.png'} projectName={'MIPS Assembler, Linker, and CPU [C] [MIPS]'}
                                 url={'/cpu'}/>

                    <ProjectTile imageName={'towerdefense.png'} projectName={'Tower Defense Game [Python]'}
                                 url={'/towerdefense'}/>

                    <ProjectTile imageName={'sqlframework.png'} projectName={'SQL Framework [Java]'}
                                 url={'/sqlframework'}/>
                </div>
            </div>
        )
    }
}