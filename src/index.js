import React from 'react'
import ReactDOM from 'react-dom'
import DisplayHemisphere from './DisplayHemisphere';

class App extends React.Component {
    state = {
        latitude: null,
        errorMessage: ''
    }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude })
            },
            (error) => {
                this.setState({ errorMessage: error.message })
            }
        );
    }

    render() {
        const { latitude, errorMessage } = this.state;

        if (errorMessage && !latitude) {
            return <>{errorMessage}</>
        }
        if (!errorMessage && latitude) {
            return <>
                <DisplayHemisphere latitude={latitude} />
            </>
        }
        else {
            return <>Loading...</>
        }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)