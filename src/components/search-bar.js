import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange(event) {
        console.log(event.type);
        console.log(event.target.value);
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
        this.setState({
            term: ''
        });
    }

    render() {
        return (
            <div className='ui segment'>
                <form className="ui form" onSubmit={ this.onFormSubmit }>
                    <div className="field">
                        <label>Search Image:</label>
                        {/* <input type='text' onChange={ this.onInputChange } /> */}
                        <input type="text" value={ this.state.term } onChange={ e => this.setState({ term: e.target.value }) } />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;