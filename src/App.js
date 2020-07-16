import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox.js'


class App extends Component {
	constructor() {
		super()
		this.state={
			robots: [],
			searchfield: ''
		}
	}

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

	onSearchChange = (eve) =>{
		this.setState({searchfield: eve.target.value});
	}

	render() {
		const { searchfield, robots} = this.state;
  		const edit = robots.filter(robo => {
  			return robo.name.toLowerCase().includes(searchfield.toLowerCase());
  		})

  		return !robots.length ?
      <h1 className='tc white'>Loading</h1> :(
  			
  		   		<div className='tc'>
  		  		   <h1 className='f1'>RoboFriends</h1>
  				   <SearchBox SearchChange={this.onSearchChange} /> 
  				  
  				   	  	<CardList robs={edit} />
  				   
   					
   				   
   		    </div>
   		   		
   		);
    }
}

export default App;
