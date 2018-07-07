import React, {Component} from 'react';

import './App.css';
import Navigation from "./components/Navigation/Navigation"
import Experience from "./components/Experience/Experience"
import Banner from "./components/Banner/Banner"
import SectionHeader from "./components/SectionHeader/SectionHeader"
import Projects from "./components/Projects/Projects"
import github from './images/blackgithub.png';
import linkedIn from './images/linked.png';
import RelevantCourses from "./components/RelevantCourses/RelevantCourses";
import ucberkeleyseal from "./images/ucberkeleyseal.jpg"
import Skills from "./components/Skills/Skills"
import scrollToComponent from 'react-scroll-to-component';


export default class HomePage extends Component {
    scrollToComponents = (componentName) => {
        switch (componentName) {
            case 'EXPERIENCE':
                return () => scrollToComponent(this.Experience, {offset: 0, align: 'top', duration: 1500});
            case 'PROJECTS':
                return () => scrollToComponent(this.Projects, {offset: 0, align: 'top', duration: 1500});
            case 'EDUCATION':
                return () => scrollToComponent(this.Education, {offset: 0, align: 'top', duration: 1500});
            case 'COURSES':
                return () => scrollToComponent(this.Courses, {offset: 0, align: 'top', duration: 1500});
            case 'SKILLS':
                return () => scrollToComponent(this.Skills, {offset: 0, align: 'top', duration: 1500});
            case 'CONTACT':
                return () => scrollToComponent(this.Contact, {offset: 0, align: 'top', duration: 1500});
        }
    };

    getScrollFunctions = () => {
        const componentsToScrollTo = ["EXPERIENCE", "PROJECTS", "EDUCATION", "COURSES", "SKILLS", "CONTACT"];
        let componentFunctions = [];
        for (let component of componentsToScrollTo) {
            componentFunctions.push(this.scrollToComponents(component))
        }
        return componentFunctions;
    }

    render() {
        let scrollFunctions = this.getScrollFunctions();

        return (
            <div className="App">
                <header className="header">
                    <Navigation scrollFunctions={scrollFunctions}/>
                    <Banner/>
                </header>
                <section ref={(section) => {
                    this.Experience = section;
                }}>
                    <SectionHeader id={"EXPERIENCE"} title={"EXPERIENCE"}/>
                </section>

                <Experience/>

                <section ref={(section) => {
                    this.Projects = section;
                }}>
                    <Projects/>
                </section>


                <section ref={(section) => {
                    this.Education = section;
                }}>
                    <SectionHeader title={"EDUCATION"}/>
                </section>

                <div className="CenterText">
                    <a href={"https://www.berkeley.edu/"} target="_blank">
                        <img src={ucberkeleyseal} className="BerkeleySeal"/>
                    </a>

                    <h2 className="School">University of California, Berkeley</h2>
                    <div className="ListItem">B.S. Electrical Engineering and Computer Science - December 2018</div>
                </div>

                <section ref={(section) => {
                    this.Courses = section;
                }}>
                    <SectionHeader title={"RELEVANT COURSES"}/>
                </section>


                <RelevantCourses/>

                <section ref={(section) => {
                    this.Skills = section;
                }}>
                    <SectionHeader title={"SKILLS"}/>
                </section>


                <Skills/>

                <section ref={(section) => {
                    this.Contact = section;
                }}>
                    <SectionHeader title={"CONTACT"}/>
                </section>


                <div className="Contact">
                    <h2>cedricholz@gmail.com</h2>
                    <div>
                        <a href={"https://github.com/cedricholz"}>
                            <img src={github} className="ContactLinks" target="_blank"/>
                        </a>
                        <a href={"https://www.linkedin.com/in/cedricholz/"}>
                            <img src={linkedIn} className="ContactLinks" target="_blank"/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
