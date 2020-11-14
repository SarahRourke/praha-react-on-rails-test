import React, { Component } from 'react';
import axios from 'axios';
import FormData from 'form-data'
import { Container, Form, Button } from 'react-bootstrap';
import FormFileInput from 'react-bootstrap/esm/FormFileInput';
import Item from './Item';


class AddItemForm extends Component {
   constructor(props) {
       super(props); 
    
        this.state = { name: '', price: '', image: null };    

    }   
    

    onChange = (e) => {
        
        this.setState(() => {
            if (e.target.name === "image")
                return {
                image : e.target.files[0]
                }
                else return {
                  [e.target.name]: e.target.value
                 }
                }  
        
        )
    }


    onSubmit = (e) => {
        e.preventDefault();
        const form = new FormData()
        form.append("name", this.state.name)
        form.append("price", this.state.price)
        form.append("image", this.state.image)
        
        axios.post('api/v1/items', form)
        .then((resp) => {
            console.log(resp)
            this.props.history.push(`/items/${resp.data.id}`);
            })
            .catch(error => console.log('error', error));
        // .then((resp) => (resp.data))
        // .then((resp) => console.log(resp.data))
    }

    render() {
        
        
        
        return(

            <Container fluid className="main">
                <form onSubmit={this.onSubmit}>
                    <Form.Group controlId="addItemForm">
                        <Form.Label>Add New Item</Form.Label>
                            <h3>{console.log(this.state)} </h3>
                            
                            <Form.Control as="input" 
                            type="text" placeholder="Item Name" onChange={this.onChange} name="name" 
                            
                            value={this.state.name}
                            />

                            <Form.Control as="input" 
                            type="text"
                            placeholder="Price" onChange={this.onChange} name="price" 
                            
                            
                            />

                            <FormFileInput id="itemImage"
                            type="file"
                            label="Item Photo" onChange={this.onChange} name="image" 
                            // value={this.state.item.image}
                            />
                        <Button type="submit" value="Add this item!" />
                    </Form.Group>

                </form>
            </Container>
        )
    }

 
}


export default AddItemForm;