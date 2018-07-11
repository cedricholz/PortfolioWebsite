import React from 'react';
import "./skillsstyles.css"

export default class Skills extends React.Component {

    render() {

        const skills = [
                {
                    Name: "Python",
                    //BarColor: "#366E9D",
                    BarColor: "linear-gradient(to top right, #005C97, #363795)",
                    percentage: 90,
                    imageName: 'python.png'
                },
                {
                    Name: "React.js",
                    // BarColor: "#00d8ff",
                    BarColor: "linear-gradient(to top right, #06beb6, #48b1bf)",
                    percentage: 86,
                    imageName: 'react.png'
                },
                {
                    Name: "Java",
                    //BarColor: "#F8981D",
                    BarColor: "linear-gradient(to top right, #fc4a1a, #f7b733)",
                    percentage: 86,
                    imageName: 'java.png'
                },

                {
                    Name: "Android",
                    //BarColor: "#A4C639",
                    BarColor: "linear-gradient(to top right, #00b09b, #96c93d)",
                    percentage: 84,
                    imageName: 'android.png'
                },

                {
                    Name: "Javascript",
                    BarColor: "#F0DB4F",
                    percentage: 70,
                    imageName: 'javascript.png'
                },
                {
                    Name: "HTML",
                    //BarColor: "#E34C25",
                    BarColor: "linear-gradient(to top right, #E44D26, #F16529)",
                    percentage: 70,
                    imageName: 'html.png'
                },
                {
                    Name: "CSS",
                    //BarColor: "#33A9DC",
                    BarColor: "linear-gradient(to top right, #2193b0, #6dd5ed)",
                    percentage: 70,
                    imageName: 'css.png'
                },
                {
                    Name: "C",
                    //BarColor: "#65D0B6",
                    BarColor: "linear-gradient(to top right, #11998e, #38ef7d)",
                    percentage: 65,
                    imageName: 'cprog.png'
                },
                {
                    Name: "C++",
                    //BarColor: "#004283",
                    BarColor: "linear-gradient(to top right, #1e3c72, #2a5298)",
                    percentage: 62,
                    imageName: 'c.png'
                },
                {
                    Name: "Linux",
                    //BarColor: "#FCB713",
                    BarColor: "linear-gradient(to top right, #FDC830, #F37335)",
                    percentage: 75,
                    imageName: 'linux.png'
                },

                {
                    Name: "SQL",
                    //BarColor: "#0072C6",
                    BarColor: "linear-gradient(to top right, #396afc, #2948ff)",
                    percentage: 65,
                    imageName: 'sql.png'
                },
            ]
        ;

        const graphHeightPixels = 300;
        return (
            <div className="FullGraph">

                <div className="BarsGraph">
                    <div className="Bars">
                        <div className="YAxis">
                            <h3 className="YValue">Wizard</h3>
                            <h3 className="YValue">85 Decibel keyboard clacks</h3>
                            <h3 className="YValue">Comfortable</h3>
                            <h3 className="YValue">Competent</h3>
                            <h3 className="YValue">Dog inherits from Animal</h3>
                            <h3 className="YValue">Saw it once in a dream</h3>
                        </div>

                        {skills.map((skill) =>
                            <div key={skill.Name} className="Bar">
                                <img alt="" src={require('../../images/' + skill.imageName)} className='BarImage' />
                                <div style={{
                                    background: skill.BarColor,
                                    height: `${skill.percentage / 900 * graphHeightPixels}vh`, marginBottom: '2vh'
                                }}/>
                                <div className={"SkillText"}>
                                    <span className="text-overflow-center">{skill.Name}</span>

                                </div>
                            </div>)
                        }
                    </div>

                </div>
            </div>

        )
    }
}