import React,{useState} from 'react';
import { Button, Container, Form, FormControl, FormGroup, FormLabel, FormText } from 'react-bootstrap';

const Contact =() =>{
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { name, email, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      let response = await fetch("https://node-mail-server.onrender.com/SMTP", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
      alert(result.status);
    };
    return(
        <div>
            <Container>
            <Form style={{marginTop:50}} onSubmit={handleSubmit}>
                <FormGroup className="mb-3" controlId="formBasicText">
                    <FormLabel htmlFor='name'>Name</FormLabel>
                    <FormControl id="name" type="name" placeholder="Enter name" />
                </FormGroup>
                <FormGroup className="mb-3" controlId="formBasicEmail">
                    <FormLabel htmlFor='email'>Email address</FormLabel>
                    <FormControl id="email" type="email" placeholder="Enter email" />
                </FormGroup>
                <FormGroup>
                <FormLabel htmlFor='message'>Message</FormLabel>
                <FormControl id="message" as="textarea" rows={6} placeholder="Enter Message" />
                </FormGroup>
                <Button style={{marginTop:20}} type='submit'>{status}</Button>
            </Form>
            </Container>
           
        </div>
    );
}

export default Contact;