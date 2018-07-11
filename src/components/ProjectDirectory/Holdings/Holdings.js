import React from 'react';
import "./Holdings.css"

import ProjectBackground from '../../../components/ProjectBackground/ProjectBackground'
import Projects from '../../../components/Projects/Projects'
import GithubShare from "../../../components/GithubShare/GithubShare"

import Portfolio from '../../../images/Portfolio.png'
import addcoin from '../../../images/addcoin.png'
import addexchange from '../../../images/addexchange.png'
import playicon from '../../../images/playicon.png'

export default class Holdings extends React.Component {

    render() {
        return (
            <div className="DashClass">

                <ProjectBackground projectName={"Holdings: An Automated Cryptocurrency Portfolio App"}
                                   backgroundColor={'linear-gradient(to top right, #141E30, #243B55)'} languages={['React-Native']}/>
                <div className="TextBlock">
                    <h2>A React-Native app that takes data straight from a user's Binance, Bittrex, and Kucoin
                        exchange
                        accounts, and displays the total
                        portfolio value. Also has the ability to manually add and modify coin holdings that may
                        be held on different
                        exchanges
                    </h2>

                    <h3>
                        When I first got into Cryptocurrency trading, I used an app called Delta to track my portfolio,
                        and
                        while it's a great app,
                        it only had the option to manually enter coins. It became tedious to manually adjust my
                        portfolio
                        whenever I
                        made a trade, so I decided to put together my own app that could automatically keep track of my
                        coins and update automatically on each trade.
                    </h3>


                    <img alt="" className="MobileImages Image" src={Portfolio}/>

                    <h2>Holdings main screen. (I manually added these coins, unfortunately I do not yet have 121.2K
                        in
                        Cryptocurrency)</h2>


                    <img alt="" className="MobileImages Image" src={addcoin}/>
                    <img alt="" className="MobileImages Image" src={addexchange}/>


                    <h2>Add Coin, Add Keys, and Edit Bought</h2>

                    <h3>
                        On start and refresh, Holdings takes the user's coin balances from all exchange APIs
                        that they
                        have
                        entered
                        keys for,
                        and aggregates them along with the coins the user has entered manually. It then uses
                        the
                        Coinmarketcap API to find the 1 hour, 24 hour, and 7day change percentages for each
                        held coin.
                        When
                        that is
                        finished, it calculates
                        the total portfolio value as well as the overall percentage gains and losses, and
                        displays
                        everything on
                        the main screen.
                    </h3>


                    <a href="https://play.google.com/store/apps/details?id=com.automatedcryptocurrencyportfolio" className="LinkText">
                        <h3 >
                            Holdings on Google Play</h3>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.automatedcryptocurrencyportfolio">
                        <img alt="" src={playicon}/>
                    </a>
                </div>
                <GithubShare url={'https://github.com/cedricholz/AutomatedCryptocurrencyPortfolio'}/>
                <Projects mainPage={false}/>
            </div>
        )
    }
};