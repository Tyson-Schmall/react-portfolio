import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            data: [
                {title: "Quip" },
                {title: "Eventbrite" }, 
                {title: "Ministry Safe" },
                {title: "SwingAway" }
            ]
        };
    }

    portfolioItems() {
        return data.map(item => {
            return <PortfolioItem title={item.title} url="https://www.google.com"/>;
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.portfolioItems()}  
            </div>

        )
    }
}