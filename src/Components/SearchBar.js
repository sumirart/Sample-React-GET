
import React from 'react';

class SearchBar extends React.Component {
    constructor(){
        super()
        this.state = {
            value: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        this.setState({ value: event.target.value})
    }

    render(){
        return (
            <div>
                <p>SearchBar</p>
    
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
        )
    }
}

export default SearchBar;