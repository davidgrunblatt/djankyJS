import React from 'react';
import './App.css';
import axios from 'axios';

// CMS
// A user will be represented by an object. This user object will contain basic info + an array
// of components (each represented by an object, containing a GUID);
// There will be classes of components. e.g: Navbar Class.
// When a user adds a navbar to their site, they are creating an instance of the navbar class
// and pushing it into the user objects template array.
// Their will be a second array which contains all the component ID's. This array will be used by 
// the front end to iterate through and call the exporte function with the guid.

// TEMPLATE
// Call to conditionally render components based on the retrieved array from the DB 
// The array will contain the id's of the components that make up the template
// iterate through the array in the return method each time calling the exporter function
// which will render components conditionally depening on the GUID.

import exporter from './skeletons/exporter';

// Array of Component Skeletons
const objects =  [ 0, 0, 1 ];

// APP COMPONENT
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // populate state with elements array
      objects
    }
  }

  render() {
    return(
      <div>
        { // iterate over elements array 
          this.state.objects.map(e => {
            return exporter(e);
          }) 
        }
      </div>
    )
  }
}

export default App;
