
import React, { Component } from 'react';
import { data } from '../carta/data';
import Menu from './Menu';
import './CardBox.css';
import './animate.css';

class CardBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carta: data.Datos
        };
        this.geDelay = this.geDelay.bind(this);
    }

    geDelay(value) {
        let delay = value * (-value) * (-1);
        if (delay >= 0) {
            delay++;
        } else if (delay <= 9) {
            delay = 5
        }

        return delay;
    }
    render() {

        return (

            <div className = 'contenedor'>
                {
                    this.state.carta.map((element, i) => (
                        <Menu
                            delay={this.geDelay(i)}
                            key={i}
                            menu={element}
                        />))
                }
            </div>

        );
    }
}

export default CardBox;