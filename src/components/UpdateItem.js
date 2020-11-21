// import React, { useReducer } from 'react';
// import axios from 'axios';


// const UpdateItem = (...props) => {



//     function reducer(state, action) {
//         switch (action.type) {
//             case 'edit':
//                 return { item: axios.put(`api/v1/items/${this.props.match.params.id}`, state.item) };
//             case 'delete':
//                 return { item: axios.delete(`api/v1/items/${this.props.match.params.id}`, state.item) };
//             default: 
//                 throw new Error();    

//         }
//     }

//     this.newItem() {
        
//         const [state, dispatch] = useReducer(reducer, ...props);
//         return (
//             <>
                
//                 <button onClick={() => dispatch({type: 'edit'})}>Edit Item</button>
//                 <button onClick={() => dispatch({type: 'delete'})}>Delete Item</button>
//             </>
//         )   
//     }
// }