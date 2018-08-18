/**
 in this folder because it is supposed to be a PURE FUNCTION but i chose to write it as a SMART COMPONENT
 */

import React, { Component } from 'react';
// import React from 'react';
import Card from './Card';
// import { robots } from './robots';

class CardList extends Component {
    render() {
        return (
            <div >
                {
                    this.props.robots.map((user, i) => (
                        <Card
                            key={this.props.robots[i].id}
                            id={this.props.robots[i].id}
                            name={this.props.robots[i].name}
                            email={this.props.robots[i].email}
                        />))
                }
            </div>
        );
    }
}

// const CardList = ({ robots }) => (
//     <div >
//         {
//             robots.map((user, i) => (
//                 <Card
//                     key={i}
//                     id={robots[i].id}
//                     name={robots[i].name}
//                     email={robots[i].email}
//                 />
//             ))
//         }
//     </div>

// );


export default CardList;
