import React from 'react';
import "./bearmaps.css"

import ProjectBackground from '../../../components/ProjectBackground/ProjectBackground'
import Projects from '../../../components/Projects/Projects'
import GithubShare from "../../../components/GithubShare/GithubShare"
import qt from '../../../images/qt.png'
import quadtree from '../../../images/quadtree.png'
import Astar from '../../../images/Astar.gif'
import trie from '../../../images/trie.jpg'
import bearmaps from '../../../images/bearmaps.png'
import dijkstras from '../../../images/dijkstras.gif'

export default class BearMaps extends React.Component {

    render() {
        return (
            <div className="DashClass">

                <ProjectBackground projectName={"Bear Maps"}
                                   backgroundColor={'linear-gradient(to top right, #E44D26, #F16529)'}/>
                <div className="TextBlock">

                    <h2><b>Google Maps for Berkeley</b>
                    </h2>

                    <h3>
                        I started with about 40k images of Berkeley. When the map is all the way zoomed out, 4 images
                        with the single digit names 1.jpg, 2.jpg, etc., are displayed and stitched together. Each image
                        then has 4 child images which are of it's zoomed in quadrants, whose names correspond to a
                        concatenation of their parent's name, and their quadrant, as shown below.
                    </h3>

                    <img src={qt}/>


                    <h3>When the program starts, it fills a "Quad-Tree" data structure with nodes corresponding to every
                        level of zoom containing image names, as well as the upper left and lower bottom (Lat, Lon)
                        coordinates of each image. When the camera is zoomed in to a certain spot, we can recurse
                        through the tree quickly and efficiently by only recusing through the quadrants that contain the
                        camera's rectangle until we reach the desired level of zoom. Then we can stitch together however
                        many images are required to fill the camera view.</h3>


                    <img src={quadtree}/>


                    <h3> Then using the OpenStreetMap Database, I created a database of every place of interest and
                        street intersection in Berkeley. With that database I used an improved version of Dijkstra's
                        algorithm, known as A*, to compute the best path between two points on the map. From a start
                        point on a graph, to an end point, instead mindlessly finding the shortest path in whatever
                        direction like Dijkstra's, A* adds a Heuristic to its priority queue, favoring to check nodes
                        that are closer in physical distance to the target destination.</h3>

                    <h2>Dijkstras</h2>

                    <img src={dijkstras}/>

                    <h2>A*</h2>
                    <img src={Astar}/>

                    <h3>To finish the map I put all the place names into a Trie data structure, which creates a tree
                        whose nodes are the consecutive letters of words. When given part of a string, it will go down
                        the tree the length of that string, following the letters, and will then be able to return every
                        word in the Trie that comes after that. This is used for the Auto-Complete function for the
                        search bar.</h3>


                    <img src={trie}/>

                    <h2>Bear Maps</h2>

                    <img src={bearmaps}/>

                </div>
                <GithubShare url={'https://github.com/cedricholz/Bear-Maps'}/>
                <Projects/>
            </div>
        )
    }
};