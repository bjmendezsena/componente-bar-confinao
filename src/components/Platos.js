import React, { Component } from 'react';


export default class Platos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: null
        }
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue({ target }) {
        let value = null;
        console.log(target.name)
        if (target.value !== this.state.checked) {
            value = Number.parseInt(target.value);
        }
        this.setState({
            checked: value
        });

        if (value) {
            this.props.onChangeSelected({
                [this.props.groupName]: value
            });
        }
    }


    render() {
        const { platos } = this.props;
        return (
            <div className='platos' onChange = {this.onChangeValue} name = 'checked'>

                {
                    platos.plato.map((plato) => (<div key={plato.idPlato}>
                        <div onClick={this.onClick} style={{ padding: '5px', display: 'flex' }}>
                            <input onChange={this.onChangeValue} name = 'checked' checked={ (this.state.checked !== null && plato.idPlato === this.state.checked) ? true: false} type="radio" value={plato.idPlato} name={plato.nombre} />
                            <label htmlFor={plato.name} ><b>{plato.name}</b></label>
                        </div>

                        {
                            (plato.notas)
                                ? <div className='nota'>
                                    <br /><span><strong>Nota:</strong> {plato.notas}</span>
                                </div>
                                : null
                        }

                    </div>))

                }
            </div>
        )
    }
}