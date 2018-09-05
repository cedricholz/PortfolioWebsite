import React from 'react';
import "./projectsstyles.css"
import ProjectTile from './ProjectTile'
import SectionHeader from "../../components/SectionHeader/SectionHeader"
import Contact from "../Contact/Contact";

export default class Projects extends React.Component {
    render() {
        const {mainPage} = this.props;

        return (
            <div>
                <SectionHeader title={"PROJECTS"}/>
                <div className="Projects">

                    <ProjectTile imageName={'radii.png'}
                                 projectName={'Radii'} url={'/radii'}
                                 languages={['React-Native']}/>

                    <ProjectTile imageName={'berkeley.png'}
                                 projectName={'Time Capsule'} url={'/timecapsule'}
                                 languages={['Android']}/>


                    <ProjectTile imageName={'cryptocurrencytrader.png'}
                                 projectName={'Bittrex Cryptocurrency Trading Algorithm with Reddit Scraper / Data Miner'}
                                 url={'/cryptotrader'}
                                 languages={['Python']}
                    />


                    <ProjectTile imageName={'Portfolio.png'}
                                 projectName={'Holdings: An Automated Cryptocurrency Portfolio App'}
                                 url={'/holdings'}
                                 languages={['React-Native']}/>

                    <ProjectTile imageName={'dashthumb.png'} projectName={'Dash Class'} url={'/dashclass'}
                                 languages={['React']}/>


                    <ProjectTile imageName={'mcafeebot.png'}
                                 projectName={'McAfee Twitter Cryptocurrency Bot'} url={'/mcafeebot'}
                                 languages={['Python']}/>


                    <ProjectTile
                        languages={['Python', 'pi']}
                        imageName={'distancelightsthumb.png'}
                        projectName={'WIFI Distance Lights'}
                        url={'/distancelights'}/>

                    <ProjectTile imageName={'canlauncher.png'}
                                 projectName={'Can Launching Mini Fridge'} url={'/canlauncher'}
                                 languages={['Android', 'Arduino']}/>

                    <ProjectTile imageName={'bearmapsthumb.png'} projectName={'Bear Maps'}
                                 url={'/bearmaps'} languages={['Java']}/>

                    <ProjectTile imageName={'cputhumb.png'} projectName={'MIPS Assembler, Linker, and CPU'}
                                 url={'/cpu'} languages={['C', 'MIPS']}/>

                    <ProjectTile imageName={'towerdefense.png'} projectName={'Tower Defense Game'}
                                 url={'/towerdefense'} languages={['Python']}/>

                    <ProjectTile imageName={'sqlframework.png'} projectName={'SQL Framework'}
                                 url={'/sqlframework'} languages={['Java']}/>


                </div>
                {mainPage ? "" : <Contact/>}

            </div>
        )
    }
}
