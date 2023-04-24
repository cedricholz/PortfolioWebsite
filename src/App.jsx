import React from "react"

import "./App.css"
import HomePage from "./HomePage"
import CryptoTrader from "./components/ProjectDirectory/CryptoTrader/CryptoTrader"
import Holdings from "./components/ProjectDirectory/Holdings/Holdings"
import CanLauncher from "./components/ProjectDirectory/CanLauncher/CanLauncher"
import CPU from "./components/ProjectDirectory/CPU/CPU"
import DistanceLights from "./components/ProjectDirectory/DistanceLights/DistanceLights"
import TimeCapsule from "./components/ProjectDirectory/TimeCapsule/TimeCapsule"

import {BrowserRouter, Route} from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import McAfee from "./components/ProjectDirectory/McAfee/McAfee"
import Radii from "./components/ProjectDirectory/Radii/Radii"

const Home = () => (
    <div>
        <div className="App">
            <HomePage/>
        </div>
    </div>
)

const Project = (projectName) => {
    switch (projectName) {
        case "Crypto":
            return <CryptoTrader/>
        case "DistanceLights":
            return <DistanceLights/>
        case "McAfee":
            return <McAfee/>
        case "Holdings":
            return <Holdings/>
        case "CanLauncher":
            return <CanLauncher/>
        case "Cpu":
            return <CPU/>
        case "TimeCapsule":
            return <TimeCapsule/>
        case "Radii":
            return <Radii/>
        default:
            return ""
    }
}


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact={true} path="/" component={Home}/>
                <ScrollToTop>
                    <Route path="/cryptotrader" component={() => Project("Crypto")}/>
                </ScrollToTop>
                <Route path="/distancelights" component={() => Project("DistanceLights")}/>
                <Route path="/mcafeebot" component={() => Project("McAfee")}/>
                <Route path="/timecapsule" component={() => Project("TimeCapsule")}/>
                <Route path="/radii" component={() => Project("Radii")}/>
                <Route path="/holdings" component={() => Project("Holdings")}/>
                <Route path="/canlauncher" component={() => Project("CanLauncher")}/>
                <Route path="/cpu" component={() => Project("Cpu")}/>
            </div>
        </BrowserRouter>
    )
}

export default App
