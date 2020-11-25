import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormData from 'form-data'
import { Container, Form, Button } from 'react-bootstrap';
import FormFileInput from 'react-bootstrap/esm/FormFileInput';



const EditItemForm = (props) => {
    console.log(props)
    const initialFormState = {
        name: "",
        price: "",
        image: {File}
    }
    const [item, setItem] = useState(initialFormState);
    


    const onChange = (e) => {
    
        setItem(() => {
        if (e.target.name === "image")
            return ({...item, image : e.target.files[0]})
        else
            return ({ ...item,
                
                 [e.target.name] : e.target.value 
            });
    })};
        
    const onSubmit = (e) => {
        e.preventDefault();

        // const form = new FormData()
        // form.append("image", item.image)


        axios.patch(`/api/v1/items/${props.match.params.id}`, item)
        .then(resp => setItem(resp.data))
        .catch(error => console.log(error, error))

    }

           
            
    
    

    


    return (
         
            <Container fluid className="main">
                
                <form onSubmit={onSubmit}>
                    <Form.Group controlId="editItemForm">
                        <Form.Label>Edit This Item</Form.Label>
                            <h3>{console.log(item)} </h3>
                            {/* Form element from react-bootstrap */}
                            <p>New Name:</p>
                            <Form.Control 
                                as="input" 
                                type="text" 
                                value={item.name}
                                placeholder="Update Item Name?" 
                                name="name" 
                                onChange={onChange} 
                            />

                            <p>New Price:</p>
                            <Form.Control 
                                as="input" 
                                type="text"
                                value={item.price}
                                placeholder="Update Item Price?" 
                                name="price" 
                                onChange={onChange} 
                            />
                            {/* file input from react-bootstrap */}

                            <p>New Item Image:</p>
                            <Form.File
                                id="itemImage"
                                //type must be file
                                // value={item.image}
                                type="file"
                                label="Item Photo" 
                                name="image" 
                                onChange={onChange} 
                            />

                        <Button type="submit" variant="outline-info">Edit</Button>
                    </Form.Group>
                </form>
            </Container>
        )
        
}




export default EditItemForm;