import React, {Component} from 'react';

import './App.css';
import Navigation from "./components/Navigation/Navigation"
import Experience from "./components/Experience/Experience"
import Banner from "./components/Banner/Banner"
import SectionHeader from "./components/SectionHeader/SectionHeader"
import Projects from "./components/Projects/Projects"
import github from './images/github.png';
import linkedIn from './images/linked.png';
import RelevantCourses from "./components/RelevantCourses/RelevantCourses";
import ucberkeleyseal from "./images/ucberkeleyseal.png"
import Skills from "./components/Skills/Skills"
import scrollToComponent from 'react-scroll-to-component';
import BurgerMenu from 'react-burger-menu';
import {Fade} from "react-reveal";


class MenuWrap extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.side}>
                {this.props.children}
            </div>
        );
    }
}

export default class HomePage extends Component {

    scrollToComponents = (componentName) => {
        this.setState({open: false});
        switch (componentName) {
            case 'EXPERIENCE':
                scrollToComponent(this.Experience, {offset: 0, align: 'top', duration: 1500});
                break;
            case 'PROJECTS':
                scrollToComponent(this.Projects, {offset: 0, align: 'top', duration: 1500});
                break;
            case 'EDUCATION':
                scrollToComponent(this.Education, {offset: 0, align: 'top', duration: 1500});
                break;
            case 'COURSES':
                scrollToComponent(this.Courses, {offset: 0, align: 'top', duration: 1500});
                break;
            case 'SKILLS':
                scrollToComponent(this.Skills, {offset: 0, align: 'top', duration: 1500});
                break;
            case 'CONTACT':
                scrollToComponent(this.Contact, {offset: 0, align: 'top', duration: 1500});
                break;
        }
    };

    constructor(props) {
        super(props);
        this.state = {open: false}
    }

    getMenu() {
        const Menu = BurgerMenu['pushRotate'];
        const items = [
            <h2 key="0"><i className="fa fa-fw fa-inbox fa-2x"/><span>Navigation</span></h2>,

            <div className="MenuContainer" onClick={() => this.scrollToComponents("EXPERIENCE")}>
                <span className="MenuItem">EXPERIENCE</span>
            </div>,
            <div className="MenuContainer" onClick={() => this.scrollToComponents("PROJECTS")}>
                <span className="MenuItem">PROJECTS</span>
            </div>,
            <div className="MenuContainer" onClick={() => this.scrollToComponents("EDUCATION")}>
                <span className="MenuItem">EDUCATION</span>
            </div>,
            <div className="MenuContainer" onClick={() => this.scrollToComponents("COURSES")}>
                <span className="MenuItem">COURSES</span>
            </div>,
            <div className="MenuContainer" onClick={() => this.scrollToComponents("SKILLS")}>
                <span className="MenuItem">SKILLS</span>
            </div>,
            <div className="MenuContainer" onClick={() => this.scrollToComponents("CONTACT")}>
                <span className="MenuItem">CONTACT</span>
            </div>,

        ];

        return (
            <MenuWrap wait={20} side={'right'}>
                <Menu isOpen={this.state.open} id={'pushRotate'} pageWrapId={'page-wrap'}
                      outerContainerId={'outer-container'} right>
                    {items}
                </Menu>
            </MenuWrap>
        );

    }

    render() {

        return (

            <div className="App">

                <div id="outer-container">
                    {this.getMenu()}
                    <main id="page-wrap">
                        <header className="header">
                            <Navigation/>
                            <Banner/>
                        </header>
                    </main>
                </div>

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

                <Fade up>
                    <div className="CenterText">
                        <a href={"https://www.berkeley.edu/"} target="_blank">
                            <img src={ucberkeleyseal} className="BerkeleySeal"/>
                        </a>

                        <h2 className="School">University of California, Berkeley</h2>
                        <h3 className="ListItem">B.S. Electrical Engineering and Computer Science - December
                            2018</h3>
                    </div>
                </Fade>

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
