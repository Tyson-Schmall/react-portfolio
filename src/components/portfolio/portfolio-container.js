import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    // State will not work inside of a functional component, it has to be in a class component.
    render() {
        return (
            <div>
                <h2>Portfolio items go here...</h2>

                <PortfolioItem />            
            </div>

        )
    }
}