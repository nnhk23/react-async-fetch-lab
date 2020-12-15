import React from 'react';

export default class App extends React.Component{

    state = {
        people: []
    }

    render() {
        return(
            <div>
                {this.state.people.map(p => <h1 key={p.name}>{p.name}</h1>)}
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(json => this.setState({people: json.people}))
    }
}
