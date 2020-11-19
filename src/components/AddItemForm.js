import React, { Component } from 'react';
import axios from 'axios';
import FormData from 'form-data'
import { Container, Form, Button } from 'react-bootstrap';
import FormFileInput from 'react-bootstrap/esm/FormFileInput';



class AddItemForm extends Component {
   constructor(props) {
       super(props); 
    //sets image to null so it will accept a file upload - using a string or object parameter prevents the file from attaching
        this.state = { name: '', price: '', image: null };    

    }   
    

    onChange = (e) => {
        
        this.setState(() => {
            //sets file base for image upload then active storage computes the data into the correct blob form 
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
        //prevents the page from refreshing after submit
        e.preventDefault();
        //FormData imported from 'npm install form-data' api
        const form = new FormData()
        form.append("name", this.state.name)
        form.append("price", this.state.price)
        form.append("image", this.state.image)

        //sets the FormData as new item data
        axios.post('api/v1/items', form)
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
                                placeholder="Item Name" 
                                name="name" 
                                onChange={this.onChange} 
                            />

                            <Form.Control 
                                as="input" 
                                type="text"
                                placeholder="Price" 
                                name="price" 
                                onChange={this.onChange} 
                            />
                            {/* file input from react-bootstrap */}
                            <FormFileInput 
                                id="itemImage"
                                //type must be file
                                type="file"
                                label="Item Photo" 
                                name="image" 
                                onChange={this.onChange} 
                            />

                        <Button type="submit" value="Add this item!" />
                    </Form.Group>
                </form>
            </Container>
        )
    }

 
}


export default AddItemForm;