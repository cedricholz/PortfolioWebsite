import React from 'react';
import "./relevantcoursesstyles.css"
import Fade from 'react-reveal/Fade';

export default class RelevantCourses extends React.Component {

    render() {
        return (
            <div className="CenterCourses">

                <div className="LinkText">
                    <a href="https://inst.eecs.berkeley.edu/~cs61a/fa16/" target="_blank">
                        <Fade left>

                            <div className="Courses">Structure and Interpretation of Computer Programs <div
                                className="Python">[Python]</div></div>

                        </Fade>
                    </a>
                </div>

                <div className="LinkText">
                    <a href="http://science.sbcc.edu/physics/young/index.html" target="_blank">
                        <Fade right>

                            <div className="Courses">Physics I, II, III</div>
                        </Fade>
                    </a>
                </div>

                <div className="LinkText">
                    <a href="https://inst.eecs.berkeley.edu/~ee16a/fa16/" target="_blank">

                        <Fade left>

                            <div className="Courses">Electrical Engineering I, II <div className="Python">[Python]</div>
                            </div>

                        </Fade>
                    </a>
                </div>

                <div className="LinkText">
                    <a href="http://datastructur.es/sp16/" target="_blank">
                        <Fade right>

                            <div className="Courses">Data Structures <div className="Java">[Java]</div></div>


                        </Fade>
                    </a>
                </div>

                <div className="LinkText">
                    <a href="http://sp17.eecs70.org/" target="_blank">
                        <Fade left>

                            <div className="Courses">Discrete Mathematics and Probability Theory</div>

                        </Fade>

                    </a>
                </div>

                <div className="LinkText">
                    <a href="http://www-inst.eecs.berkeley.edu/~cs61c/su17/" target="_blank">
                        <Fade right>

                            <div className="Courses">Machine Structures <div className="C">[C]</div></div>

                        </Fade>
                    </a>
                </div>

                <div className="LinkText">
                    <a href="http://www-inst.eecs.berkeley.edu/~cs170/fa17/" target="_blank">
                        <Fade left>

                            <div className="Courses">Efficient Algorithms and Intractable Problems <div
                                className="Python">[Python]</div></div>

                        </Fade>
                    </a>
                </div>

                <div className="LinkText">
                    <a href="https://blockchain.berkeley.edu/decal/fa17/fund/" target="_blank">
                        <Fade right>

                            <div className="Courses">Blockchain Fundamentals</div>


                        </Fade>
                    </a>
                </div>

                <div className="LinkText">
                    <a href="https://www2.eecs.berkeley.edu/Courses/CS188/" target="_blank">
                        <Fade left>

                            <div className="Courses">Artificial Intelligence <div className="Python">[Python]</div>
                            </div>

                        </Fade>
                    </a>
                </div>

                <div className="LinkText">
                    <a href="https://www.icir.org/vern/cs161-sp17/" target="_blank">
                        <Fade right>

                            <div className="Courses">Computer Security <div className="Python">[Python]</div></div>


                        </Fade>
                    </a>
                </div>

                <div className="LinkText">
                    <a href="http://teaching.paulos.net/cs160_SP2016/" target="_blank">
                        <Fade left>
                            <div className="Courses">User Interface Design and Development <div
                                className="Android">[Android]</div></div>
                        </Fade>
                    </a>
                </div>

                <div className="LinkText">
                    <a href="https://www2.eecs.berkeley.edu/Courses/CSC100/" target="_blank">
                        <Fade right>
                            <div className="Courses">Principles & Techniques of Data Science - Fall 2018</div>
                        </Fade>
                    </a>
                </div>

            </div>
        )
    }
}