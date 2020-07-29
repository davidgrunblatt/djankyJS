import React from 'react';

// RETRIEVED FROM USER OBJECT IN DB.
const state = {
    data: {
        name: 'Navbar'
    },
    styles: {
        width: "100%",
        height: '200px',
        background: 'blue'
    }
}

// COMPONENTS STORED HERE IN FILE SYSTEM
const navbar = <div style={state.styles}><h1> { state.data.name } </h1></div>;
const jumbotron = <div style={ state.styles}><h1> { state.data.name }  </h1></div>;
const other = <div style={ state.styles}><h1> { state.data.name }  </h1></div>;

// EXPORTS THE COMPONENTS ABOVE DEPENDING ON GUID
function exporter(guid) {
    if (guid === 0) return navbar;
    else if (guid === 1) return jumbotron
    else return other;
}

export default exporter;
