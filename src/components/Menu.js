import React, { Component } from 'react';
import { Divider } from '../helpers/helpers';
import Platos from './Platos';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descripcion: props.menu.descripcion,
            detalles: props.menu.detalles,
            Entrantes: {},
            Primeros: {},
            Segundos: {},
            Postres: {},
            precio: props.menu.precio
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeSelected = this.onChangeSelected.bind(this);
    }

    onChangeSelected(formValues) {
        this.setState(formValues);
    }

    onSubmit() {
        console.log('usted ha elegido:');
        console.log(this.state);
    }

    render() {
        const { menu, delay } = this.props;
        return (
            <div style={{ animationDuration: `0.${delay}s` }} className={`menu animate__animated animate__fadeInLeft`}>

                <div>
                    <div className='cabeceraMenu'>

                        <span>{menu.descripcion}</span>
                    </div>

                    <div className='precio'>{menu.precio}</div>
                </div>

                {
                    menu.menu.map((element, i) => (
                        <div className='grupo' key={i}>
                            <Divider><span>{element.grupName}</span></Divider>
                            <Platos
                                groupName={element.grupName}
                                platos={element}
                                onChangeSelected={this.onChangeSelected}
                            />
                        </div>
                    ))
                }

                <div>
                    <button onClick={this.onSubmit} className='boton'>Seleccionar</button>
                </div>
                <span className='detalles' style = {{padding: '10px'}}>{menu.detalles}</span>
            </div>);
    }
}

export default Menu;


