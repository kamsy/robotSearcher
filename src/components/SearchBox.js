/**
 in this folder because it is supposed to be a PURE FUNCTION but i chose to write it as a SMART COMPONENT
 */


import React, { Component } from 'react';
// import React from 'react';

class SearchBox extends Component {
    render() {
        return (
            <div className="pa2">
                <input
                    className="pa3 ba b--green bg-lightest-blue br3"
                    type="search"
                    placeholder="search robots"
                    onChange={this.props.searchChange}
                />
            </div>);
    }
}

// const SearchBox = ({ searchChange }) => (
//     <div className="pa2">
//         <input
//             className="pa3 ba b--green bg-lightest-blue br3"
//             type="search"
//             placeholder="search robots"
//             onChange={searchChange}
//         />
//     </div>);


export default SearchBox;
