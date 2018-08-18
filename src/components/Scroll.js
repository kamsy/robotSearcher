/**
 in this folder because it is supposed to be a PURE FUNCTION but i chose to write it as a SMART COMPONENT
 */


import React, { Component } from 'react';

class Scroll extends Component {
    render() {
        return (
            <div style={{ overflow: 'scroll', height: '800px', border: '3px solid black' }}>
                {this.props.children}
            </div>
        );
    }
}

// const Scroll = ({ props }) => (
//     <div style={{ overflow: 'scroll', height: '800px', border: '3px solid black' }}>
//         {props.children}
//     </div>
// );

export default Scroll;
