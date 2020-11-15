import React, { Component, useState } from 'react';
import axios from 'axios';
import FormData from 'form-data'
import { Container, Form, Button } from 'react-bootstrap';
import FormFileInput from 'react-bootstrap/esm/FormFileInput';



class EditItemForm extends Component {
    constructor(props){
        super(props);

        this.state = { 
            
            item: {

                name: props.name,
                price: props.price,
                image: props.image

            }

        }
    }

    handleItemEdit = (e) => {

        this.setState({ item: { ...this.state.item, [e.target.name]: e.target.value }})
    }
        
    handleImageEdit = (e) => {

        this.setState({ item: { ...this.state.item, image: e.target.files[0] }})
    }
              
        
    


    onSubmit = (e) => {
        //prevents the page from refreshing after submit
        e.preventDefault();
        //FormData imported from 'npm install form-data' api
        const form = new FormData()
        form.append("name", this.item.name)
        form.append("price", this.item.price)
        form.append("image", item.image)

        //sets the FormData as new item data
        axios.put('api/v1/items', form)
        .then((resp) => {
            console.log(resp)
            //redirects to created item Item page
            this.props.history.push(`/items/${resp.data.id}`);
            })
            .catch(error => console.log('error', error));
        
    }
    render() {
        return(

            <Container fluid className="main">
                <form onSubmit={this.onSubmit}>
                    <Form.Group controlId="addItemForm">
                        <Form.Label>Add New Item</Form.Label>
                            <h3>{console.log(this.state)} </h3>
                            {/* Form element from react-bootstrap */}
                            <Form.Control 
                                as="input" 
                                type="text" 
                                placeholder="Update Item Name?" 
                                name="name" 
                                onChange={this.handleItemEdit} 
                            />

                            <Form.Control 
                                as="input" 
                                type="text"
                                placeholder="Update Item Price?" 
                                name="price" 
                                onChange={this.handleItemEdit} 
                            />
                            {/* file input from react-bootstrap */}
                            <FormFileInput 
                                id="itemImage"
                                //type must be file
                                type="file"
                                label="Item Photo" 
                                name="image" 
                                onChange={this.handleImageEdit} 
                            />

                        <Button type="submit" value="Edit this item!" />
                    </Form.Group>
                </form>
            </Container>
        )
    
        }
    }
 



export default EditItemForm;