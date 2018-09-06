import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
      persons: [
          { name: 'Max', age: 28 },
          { name: 'Manu', age: 29 },
          { name: 'Steph', age: 26 }
      ],
        otherState: 'Some other value',
        showPersons: false
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: 'Manual', age: 29 },
                { name: 'Stephanie', age: 26 }
            ]});
    };

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Max', age: 28 },
                { name: event.target.value, age: 29 },
                { name: 'Stephanie', age: 26 }
            ]});
    };

    togglePersonsHandler = () => {
      this.setState({

      });
    };

    render() {
        const style= {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
          <div className="App">
              <h1>Hi, I'm a React App!</h1>
              <p>This is really working!</p>
              <button
                  style={style}
                  onClick={this.togglePersonsHandler}
              >Switch Name</button>
              <div>
                  <Person
                      name={this.state.persons[0].name}
                      age={this.state.persons[0].age}/>
                  <Person
                      name={this.state.persons[1].name}
                      age={this.state.persons[1].age}
                      click={this.switchNameHandler.bind(this, 'Manu clicked')}
                      changed={this.nameChangeHandler}
                  >My Hobbies: Racing</Person>
                  <Person
                      name={this.state.persons[2].name}
                      age={this.state.persons[2].age}/>
              </div>
          </div>
        );
    }
}

export default App;
