import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import { robots as localRobots } from "../robots";

class App extends React.Component {
    constructor () {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }))
        .catch(() => this.setState({ robots: localRobots }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }

    render () {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ? 
        (
          <div className="loading-container">
            <div className="loader"></div>
            <div className="loading-text">Loading...</div>
          </div>
        ) :
         (
        <div className="tc" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <h1>Robofriends from Rickelme</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <CardList robots={filteredRobots}/>
            </Scroll>
        </div>
        );
    }
}

export default App;