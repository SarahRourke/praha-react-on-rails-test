import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Items from './ItemList';

class SiteContainer extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {items: {}};
    }

    handleChange(e) {
        this.setState({items: e.target.value});
    }

    render() {
        const items = this.state.items.items;
        return (
            <Items items = {this.state.items} />
        )
    }
}

export default SiteContainer;