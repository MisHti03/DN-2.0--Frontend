import React from 'react';
import { Container } from 'react-bootstrap';
import Routes from './Routng';
import { AuthProvider } from '../context/AuthContext';
const App = () => {
    console.log('oo')

    return (

        <Container  
        className='d-flex align-items-center justify-content-center'
        style={{ minHeight: '100vh'}}>
            <div className='w-100'>
        <AuthProvider><Routes/></AuthProvider>
        </div>
        </Container>
        
    )
    
}; 

export default App;