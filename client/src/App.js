import React from 'react';
import './App.css';
import axios from 'axios';

// NAVBAR COMPONENT DATA / SKELETON
// const navbar = {
//   id: 0,
//   name: 'navbar', 
//   styles: {
//     background: 'blue',
//     height: "100px",
//     width: '100%',
//   },
//   skeleton: function() {
//     return <div style={this.styles}>
//       <h1>{this.name}</h1>
//       <p>{this.background}</p>
//     </div>
//   }
// }

// const jumbotron = {
//   id: 1,
//   name: 'jumbotron', 
//   styles: {
//     background: 'red',
//     height: "300px",
//     width: '100%',
//   },
//   skeleton: function() {
//     return <div style={this.styles}>
//       <h1>{this.name}</h1>
//       <p>{this.background}</p>
//     </div>
//   }
// }


// Array of Component Skeletons
// const objects = [ navbar, jumbotron ];

// APP COMPONENT
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // populate state with elements array
      objects: []
    }
  }

  async componentDidMount() {
    await axios.get('/api/get_component')
    .then(data => {
      console.log('AXIOS RETRIEVED DATA: ', data.data);
      let array = this.state.objects.concat(data.data);
      this.setState({
        objects: array
      })
    })
    .catch(ex => console.log('AXIOS ERROR, ', ex));
  }

  render() {
    return(
      <div>
        { // iterate over elements array 
          this.state.objects.map(e => {
            return JSON.parse((e.skeleton_string));
          }) 
        }
      </div>
    )
  }
}

export default App;
