import React, { Component } from 'react';
import axios from 'axios';
import FormData from 'form-data'
import { Container, Form, Button } from 'react-bootstrap';
// import Items from './ItemList';



class AddItemForm extends Component {
   
    
    
    state = {
        item: {
            name: '',
            price: '',
            image: {}
        }    
    }    
    

    onChange = (e) => {
        e.persist()
        this.setState(() => {
            if (e.target.name === "image")
                return {
                     [e.target.name]: e.target.files[0]
            }
            else;
                return {
                    [e.target.name]: e.target.value
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const form = new FormData()
        form.append("name", this.state.name)
        form.append("price", this.state.price)
        form.append(File, this.state.image)
        
        axios.post('api/v1/items', this.state)
        .then((resp) => (resp.json()))
        .then((data) => console.log(data))
    }
    
      
        



    render() {
        
        
        
        return(

            <Container fluid className="main">
                <form onSubmit={this.onSubmit}>
                    <Form.Group controlId="addItemForm">
                        <Form.Label>Add New Item</Form.Label>
                            <h3>{console.log(this.props)} </h3>
                            <Form.Control as="input" 
                            type="text" placeholder="Item Name" onChange={this.onChange} name="name" 
                            value={this.state.name} 
                            />

                            <Form.Control as="input" 
                            type="text"
                            placeholder="Price" onChange={this.onChange} name="price" 
                            value={this.state.price}
                            
                            />

                            <Form.File id="itemImage"
                            type="file"
                            label="Item Photo" onChange={this.onChange} name="image" 
                            
                            />
                        <Button type="submit" value="Add this item!" />
                    </Form.Group>

                </form>
            </Container>
        )
    }

 
}

export default AddItemForm;