import React from 'react';
import Input from './Input';
import io from 'socket.io-client';
const socket = io(process.env.REACT_URL_BACKEND);

class FormNovoContato extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            procurar: '',
        }
        this.controla_input = this.controla_input.bind(this);
    }

    controla_input = event => {
        this.setState({ procurar: event.target.value });
        socket.emit('procurarBanco', event.target.value);
    }

    render() {
        return (
            <form>
                <Input
                    type='text'
                    label='Procurar'
                    placeholder='Procure um contato em sua agenda...'
                    name='procurar'
                    controla_input={this.controla_input} />
            </form>
        );
    }
}

export default FormNovoContato;
