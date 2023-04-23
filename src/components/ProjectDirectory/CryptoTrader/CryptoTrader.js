import React from "react"
import "./cryptotrader.css"

import ProjectBackground from "../../../components/ProjectBackground/ProjectBackground"
import Projects from "../../../components/Projects/Projects"

import GithubShare from "../../../components/GithubShare/GithubShare"
import {ASSETS_BASE_URL} from "../../../constants"

export default class CryptoTrader extends React.Component {

    render() {
        return (
            <div className="CryptoTrader">

                <ProjectBackground projectName={"Crypto Trading Algorithm and Reddit Scraper / Data Miner"}
                                   backgroundColor={"linear-gradient(to top right,#ad5389, #3c1053)"}
                                   languages={["Python"]}/>
                <div className="TextBlock">
                    <h2>A series of strategies coded in Python to buy and sell Cryptocurrencies</h2>
                    <h3>We first began with a basic strategy to construct the Trader framework with functions for
                        buying,
                        selling, and requesting coin data from Bittrex and Coinmarketcap. We had it make decisions based
                        on
                        daily and hourly percentage changes in order to try to capture the arbitrary "whales" we saw
                        everyday that would shoot up sometimes 200-300% unexpectedly. We got lucky several times and
                        snared
                        our Moby Dicks, but the algorithm would often sell too soon so we wouldn't make the entire gain,
                        or
                        it would buy too many false whales and we would lose several times in a day. </h3>

                    <h3>We then moved on to a strategy we researched, useful for following trends of highly volatile
                        price
                        changes known as Keltner Channels. The idea was to create a middle Exponential Moving Average
                        line
                        based on the past 20 minute prices, and two copies of the line shifted up and down by an Average
                        True Range value, or volatility score. The strategy is then to buy when the price makes an
                        upward
                        cross from below the top line to outside of the channel, and sell when it makes a downward cross
                        to
                        below the bottom line.</h3>

                    <img alt="" className="WideImage" src={`${ASSETS_BASE_URL}Keltnerchannels.png`}/>

                    <h3>For our third strategy, we noticed that Reddit.com/r/CryptoCurrency would often mention coins
                        days or
                        months before they would shoot up astronomically high, so we started scraping the top 24 hour
                        posts
                        and all of their comments for mentions of coins that we have access to through Bittrex. We then
                        organize the coins and rank them by the total upvotes associated with them as well as analyze
                        the
                        sentiment of what is being said about each coin using the Python Natural Language Toolkit. We
                        then
                        have the algorithm check the top 10 currencys' 24 hour change. If the price is dipping down and
                        the
                        sentiment is still positive, the algorithm buys it and waits for it go back up again at least
                        20% up
                        before selling.</h3>


                    <img alt="" src={`${ASSETS_BASE_URL}reddit.png`} className="RedditImage"/>

                    {/*<h2>Reddit r/Cryptocurrency Data Updated Hourly (When Pi is Running)</h2>*/}

                    <h2>Headless Raspberry Pi running the Algorithm</h2>

                    <img alt="" src={`${ASSETS_BASE_URL}pi.jpg`} className="WideImage"/>
                </div>

                <GithubShare url={"https://github.com/cedricholz/Python-Cryptocurrency-Scraper-Trader"}/>
                <Projects mainPage={false}/>
            </div>
        )
    }
}