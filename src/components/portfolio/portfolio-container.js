import React, { Component } from "react";
import axios from "axios";
import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.getPortfolioItems = this.getPortfolioItems.bind(this)

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: [
                {title: "Quip", category: "eCommerce", slug: 'quip' },
                {title: "Eventbrite", category: "Scheduling", slug: 'eventbrite' }, 
                {title: "Ministry Safe", category: "Enterprise", slug: 'ministrysafe' },
                {title: "SwingAway", category: "eCommerce", slug: 'swingaway' }
            ]
        };

        this.handleFilter = this.handleFilter.bind(this)
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        });
    }

    getPortfolioItems() {
        axios.get('https://tysonschmall.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        // handle success
        console.log("response data", response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
      }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url="https://www.google.com"/>;
        })
    }

    render() {
        this.getPortfolioItems();
        if (this.state.isLoading) {
            return <div>Gimme just a moment...</div>
        }
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('eCommerce')}>
                    eCommerce
                </button>

                <button onClick={() => this.handleFilter('Scheduling')}>
                    Scheduling
                </button>

                <button onClick={() => this.handleFilter('Enterprise')}>
                    Enterprise
                </button>

                {this.portfolioItems()}  
            </div>
        );
    }
}