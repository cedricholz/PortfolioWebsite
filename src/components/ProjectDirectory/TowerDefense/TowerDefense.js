import React from 'react';
import "./towerdefense.css"

import ProjectBackground from '../../../components/ProjectBackground/ProjectBackground'
import Projects from '../../../components/Projects/Projects'
import GithubShare from "../../../components/GithubShare/GithubShare"
import antsdemo from '../../../images/antsdemo.png'
import scuba from '../../../images/scuba.gif'
import hungry from '../../../images/hungry.gif'
import bodyguard from '../../../images/ninja.gif'
import ant_tank from '../../../images/ant_tank.gif'
import ant_queen from '../../../images/ant_queen.gif'

import harvester from '../../../images/harvester.gif'
import thrower from '../../../images/thrower.gif'
import fire from '../../../images/fire.gif'
import short from '../../../images/short.gif'
import long from '../../../images/long.gif'
import wall from '../../../images/wall.gif'
import ninja from '../../../images/ninja.gif'


export default class TowerDefense extends React.Component {

    render() {
        return (
            <div className="DashClass">

                <ProjectBackground projectName={"Python Tower Defense Game"}
                                   backgroundColor={'linear-gradient(to top right, #F09819, #EDDE5D)'}/>
                <div className="TextBlock">

                    <h2>A graphical tower defense game similar to Plants Vs Zombies, written in Python demonstrating
                        good a good use of Python classes and code re-usability
                    </h2>

                    <h3>The point of the game is to keep the Bees out of the hill and away from the Queen. On each turn,
                        the
                        Bees will either move forward one space, or attack an ant, and the ants will perform their
                        respective actions.</h3>

                    <img src={antsdemo}/>

                    <h3>Harvester Ant <img src={harvester} width="80" height="80"/>
                        <blacktext>Gains 1 food per turn.</blacktext>
                    </h3>

                    <h3>Thrower Ant<img src={thrower} width="80" height="80"/>
                        <blacktext>Throws leaf at nearest Bee.</blacktext>
                    </h3>


                    <h3>Fire Ant <img src={fire} width="80" height="80"/>
                        <blacktext>Reduces armor of all Bees on its space when it is eaten.</blacktext>
                    </h3>

                    <h3>Short Thrower Ant <img src={short} width="80" height="80"/>
                        <blacktext>Throws leaf at nearest Bee up to 3 spaces away.</blacktext>
                    </h3>

                    <h3>Long Thrower Ant <img src={long} width="80" height="80"/>
                        <blacktext>Throws leaf at nearest Bee up to 5 spaces away.</blacktext>
                    </h3>


                    <h3>Wall Ant <img src={wall} width="80" height="80"/>
                        <blacktext>Acts as a strong barrier.</blacktext>
                    </h3>

                    <h3>Ninja Ant <img src={ninja} width="80" height="80"/>
                        <blacktext>Invisible to Bees, but can stil attack.</blacktext>
                    </h3>

                    <h3>Scuba Ant <img src={scuba} width="80" height="80"/>
                        <blacktext>Will not lose armor when placed on water.</blacktext>
                    </h3>

                    <h3>Hungry Ant <img src={hungry} width="80" height="80"/>
                        <blacktext>Selects Bee from its place and eats it whole, waiting 3 turns before eating again.
                        </blacktext>
                    </h3>

                    <h3>Bodyguard Ant <img src={bodyguard} width="80" height="80"/>
                        <blacktext>Can be placed over any ant to add to its armor.</blacktext>
                    </h3>

                    <h3>Tank Ant <img src={ant_tank} width="80" height="80"/>
                        <blacktext>Can be placed over any any ant to add to its armor and can also attack.</blacktext>
                    </h3>

                    <h3>Queen Ant <img src={ant_queen} width="80" height="80"/>
                        <blacktext>Doubles the damage of ants behind her, but game is over if she dies.</blacktext>
                    </h3>

                </div>
                <GithubShare url={'https://github.com/cedricholz/Tower-Defense-Game'}/>
                <Projects/>
            </div>
        )
    }
};