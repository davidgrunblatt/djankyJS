import React from 'react';

const Jumbotron = (props) => {
    return (
        <div id='jumbotron'>
            <div style={props.styling}>
              <h1>Hello World</h1>
            </div>
        </div>
    )
}

export default Jumbotron;