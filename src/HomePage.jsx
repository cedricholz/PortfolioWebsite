import React, {useEffect, useRef} from "react"

import "./App.css"
import Navigation from "./components/Navigation/Navigation"
import Experience from "./components/Experience/Experience"
import Banner from "./components/Banner/Banner"
import SectionHeader from "./components/SectionHeader/SectionHeader"
import Projects from "./components/Projects/Projects"

import RelevantCourses from "./components/RelevantCourses/RelevantCourses"
import Skills from "./components/Skills/Skills"
import BurgerMenu from "react-burger-menu"
import Contact from "./components/Contact/Contact"
import Education from "./Education/Education"

const MenuWrap = (
    {
        side, children,
    }
) => {

    return (
        <div className={side}>
            {children}
        </div>
    )

}

const HomePage = () => {

    const experienceRef = useRef()
    const projectsRef = useRef()
    const educationRef = useRef()
    const coursesRef = useRef()
    const skillsRef = useRef()
    const contactRef = useRef()

    const scrollToComponents = (componentName) => {
        switch (componentName) {
            case "EXPERIENCE":
                experienceRef.current.scrollIntoView({behavior: "smooth"})
                break
            case "PROJECTS":
                projectsRef.current.scrollIntoView({behavior: "smooth"})
                break
            case "EDUCATION":
                educationRef.current.scrollIntoView({behavior: "smooth"})
                break
            case "COURSES":
                coursesRef.current.scrollIntoView({behavior: "smooth"})
                break
            case "SKILLS":
                skillsRef.current.scrollIntoView({behavior: "smooth"})
                break
            case "CONTACT":
                contactRef.current.scrollIntoView({behavior: "smooth"})
                break
            default:
                break
        }
    }

    useEffect(() => {
        const myName = "\n" +
            " __   ___  __   __     __  \n" +
            "/  ` |__  |  \\ |__) | /  ` \n" +
            "\\__, |___ |__/ |  \\ | \\__, \n" +
            "                           \n" +
            "      __       __          \n" +
            "|__| /  \\ |     /          \n" +
            "|  | \\__/ |___ /_          \n" +
            "                           \n"
        console.log(myName)
    }, [])

    const getMenu = () => {
        const Menu = BurgerMenu["pushRotate"]
        const items = [
            <h2 key="0"><i className="fa fa-fw fa-inbox fa-2x"/><span>Navigation</span></h2>,

            <div key="1" className="MenuContainer" onClick={() => scrollToComponents("EXPERIENCE")}>
                <span className="MenuItem">EXPERIENCE</span>
            </div>,
            <div key="2" className="MenuContainer" onClick={() => scrollToComponents("PROJECTS")}>
                <span className="MenuItem">PROJECTS</span>
            </div>,
            <div key="3" className="MenuContainer" onClick={() => scrollToComponents("EDUCATION")}>
                <span className="MenuItem">EDUCATION</span>
            </div>,
            <div key="4" className="MenuContainer" onClick={() => scrollToComponents("COURSES")}>
                <span className="MenuItem">COURSES</span>
            </div>,
            <div key="5" className="MenuContainer" onClick={() => scrollToComponents("SKILLS")}>
                <span className="MenuItem">SKILLS</span>
            </div>,
            <div key="6" className="MenuContainer" onClick={() => scrollToComponents("CONTACT")}>
                <span className="MenuItem">CONTACT</span>
            </div>,

        ]

        return (
            <MenuWrap wait={20} side={"right"}>
                <Menu id={"pushRotate"} pageWrapId={"page-wrap"}
                      outerContainerId={"outer-container"} right>
                    {items}
                </Menu>
            </MenuWrap>
        )

    }

    return (

        <div className="App">
            {getMenu()}
            <div id="outer-container">

                <main id="page-wrap">
                    <header className="header">
                        <Navigation/>
                        <Banner/>
                    </header>
                </main>
            </div>


            <SectionHeader ref={experienceRef} id={"EXPERIENCE"} title={"EXPERIENCE"}/>

            <Experience/>

            <Projects ref={projectsRef} mainPage={true}/>

            <SectionHeader ref={educationRef} title={"EDUCATION"}/>

            <Education/>

            <SectionHeader ref={coursesRef} title={"RELEVANT COURSES"}/>

            <RelevantCourses/>

            <SectionHeader ref={skillsRef} title={"SKILLS"}/>

            <Skills/>

            <Contact ref={contactRef}/>


        </div>

    )

}
export default HomePage
