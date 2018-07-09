import React, {Component} from 'react';

import './App.css';
import HomePage from "./HomePage"
import CryptoTrader from "./components/ProjectDirectory/CryptoTrader/CryptoTrader"
import DashClass from "./components/ProjectDirectory/DashClass/DashClass"
import Holdings from "./components/ProjectDirectory/Holdings/Holdings"
import CanLauncher from "./components/ProjectDirectory/CanLauncher/CanLauncher"
import CPU from "./components/ProjectDirectory/CPU/CPU"
import BearMaps from "./components/ProjectDirectory/BearMaps/BearMaps"
import TowerDefense from "./components/ProjectDirectory/TowerDefense/TowerDefense"
import SQLFramework from "./components/ProjectDirectory/SQLFramework/SQLFramework"
import DistanceLights from "./components/ProjectDirectory/DistanceLights/DistanceLights"
import TimeCapsule from "./components/ProjectDirectory/TimeCapsule/TimeCapsule"

import {HashRouter, BrowserRouter, Router} from 'react-router-dom'
import {Link, Route, Switch} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import McAfee from "./components/ProjectDirectory/McAfee/McAfee";

const Home = () => (
    <div>
        <div className="App">
            <HomePage/>
        </div>
    </div>
);

const Project = (projectName) => {
    switch (projectName) {
        case 'Crypto':
            return <CryptoTrader/>;
        case 'DistanceLights':
            return <DistanceLights/>;
        case 'DashClass':
            return <DashClass/>;
        case 'McAfee':
            return <McAfee/>;
        case 'Holdings':
            return <Holdings/>;
        case 'CanLauncher':
            return <CanLauncher/>;
        case 'BearMaps':
            return <BearMaps/>;
        case 'Cpu':
            return <CPU/>;
        case 'TowerDefense':
            return <TowerDefense/>;
        case 'SqlFramework':
            return <SQLFramework/>
        case 'TimeCapsule':
            return <TimeCapsule/>
    }
};


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route exact={true} path="/" component={Home}/>
                    <ScrollToTop>
                        <Route path="/cryptotrader" component={() => Project('Crypto')}/>
                    </ScrollToTop>
                    <Route path="/distancelights" component={() => Project('DistanceLights')}/>
                    <Route path="/dashclass" component={() => Project('DashClass')}/>
                    <Route path="/mcafeebot" component={() => Project('McAfee')}/>
                    <Route path="/timecapsule" component={() => Project('TimeCapsule')}/>
                    <Route path="/holdings" component={() => Project('Holdings')}/>
                    <Route path="/canlauncher" component={() => Project('CanLauncher')}/>
                    <Route path="/bearmaps" component={() => Project('BearMaps')}/>
                    <Route path="/cpu" component={() => Project('Cpu')}/>
                    <Route path="/towerdefense" component={() => Project('TowerDefense')}/>
                    <Route path="/sqlframework" component={() => Project('SqlFramework')}/>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;
