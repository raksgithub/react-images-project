import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // console.log(this.imageRef);
        // console.log(this.imageRef.current.clientHeight);
        this.imageRef.current.addEventListener('load', () => {
            //console.log(this.imageRef.current.clientHeight);
            const spans = Math.ceil(this.imageRef.current.clientHeight / 10);
            this.setState({ spans });
        });
    }
    
    render() {
        // Destructuring the props
        const { urls, description } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={ this.imageRef } src={ urls.regular } alt={ description } title={ description } />
            </div>
        );
    }
}

export default ImageCard;