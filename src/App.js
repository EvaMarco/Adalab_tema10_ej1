import React from 'react';
import {getPeople} from './service/random_people';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      Data : [], 
      Cities: []
    }
    this.getInfo= this.getInfo.bind(this);
  }
  componentDidMount(){
    this.getInfo()
  }

  getInfo(){
    getPeople()
      .then(data=> {
        this.setState({Data:data.results})
        console.log(data)})
      }

  render() {
    return (
      <div className="App">
        <ul className="people_list">
        {this.state.Data.map(item=> <li className ="person" key={item.login.uuid}>
          <div className="person_div">
            <p className= "name"> {item.name.title} {item.name.first} {item.name.last}</p>
            <img className="img"src={item.picture.medium} alt={item.name.first}/>
            <p className="city">{item.location.city}</p>
            <p className="age">{item.dob.age} years</p>
          </div>
        </li>)}
        </ul>
      </div>
    );
  }
}

export default App;
