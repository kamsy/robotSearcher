/**
 in this folder because it is supposed to be a PURE FUNCTION but i chose to write it as a SMART COMPONENT
 */


import React, { Component } from 'react';
// import React from 'react;'


class Card extends Component {
    render() {
        return (
            <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
                <img src={`https://robohash.org/${this.props.id}?200x200`} alt="robot_image" />
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
        );
    }
}

// const Card = ({ name, email, id }) => (
//     <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
//         <img src={`https://robohash.org/${id}?200x200`} alt="robot_image" />
//         <div>
//             <h2>{name}</h2>
//             <p>{email}</p>
//         </div>
//     </div>
// );


export default Card;
