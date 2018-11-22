import React from 'react';

// Component Import Statements
import SearchBar from './search-bar';
import unsplash from '../apis/unsplash';
import ImageList from './image-list/image-list';

class App extends React.Component {

    state = { images: [], term: '' };
    onSearchInput = (term) => {
        // 1 Approach => with chaining through then 

        unsplash.get('/search/photos', {
            params: {
                query: term,
                per_page: 10
            },
        }).then((response) => {
            console.log(response.data.results);
            this.setState(
                { images: response.data.results, term: term }
            );
        })

        // 2 Approach => w/o chaining and with async wait syntax

        // const response = await Axios.get('https://api.unsplash.com/search/photos', {
        //     params: {
        //         query: term
        //     },
        //     headers: {
        //         Authorization: 'Client-ID 43e189eb35642417b34726c9f791278377d3d25ed7e3ba0ec77812da71b2936e'
        //     }
        // });
        // this.setState(
        //     { images: response.data.results }
        // );
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={ this.onSearchInput }/>
                <p>Found  <strong>{ this.state.images.length }</strong> images for <em>{ this.state.term }</em>.</p>
                <ImageList images={ this.state.images } />
            </div>
        );
    }
}

export default App;