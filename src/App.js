import React, { Component } from "react";
import CarCard from "./components/CarCard";
import Navbar from "./components/Navbar";
import cars from "./Car.json";
import "./App.css";

class App extends Component {
    state = {
        cars,
        clickedCharacters: [],
        score: 0
    };

    imageClick = event => {
        const currentCharacter = event.target.alt;
        const characterAlreadyClicked =
            this.state.clickedCharacters.indexOf(currentCharacter) > -1;

        if (characterAlreadyClicked) {
            this.setState({
                cars: this.state.cars.sort(function(a, b) {
                    return 0.5 - Math.random();
                }),
                clickedCharacters: [],
                score: 0
            });
        } else {
            this.setState({
                    cars: this.state.cars.sort(function(a, b) {
                        return 0.5 - Math.random();
                    }),
                    clickedCharacters: this.state.clickedCharacters.concat(
                        currentCharacter
                    ),
                    score: this.state.score + 1
                },
                () => {
                    if (this.state.score === 12) {
                        alert("Hey! You Won!");
                        this.setState({
                            cars: this.state.cars.sort(function(a, b) {
                                return 0.5 - Math.random();
                            }),
                            clickedCharacters: [],
                            score: 0
                        });
                    }
                }
            );
        }
    };

    render() {
        return ( 
            <div>
              <Navbar name={
                  "Some Awesome Cars"
              }
              score = { this.state.score }
            </div> 
            <div>
           className = "wrapper" > {
                this.state.cars.map(Car => ( 
                    CarCard imageClick={this.imageClick}
                    id={car.id}
                    key={car.id}
                    image={car.image}
                  
                ))}
            } <
            <
            /div>
        );
    }
}
export default App;