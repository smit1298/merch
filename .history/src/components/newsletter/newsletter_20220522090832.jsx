import React, {useState} from 'react'
import { Container } from 'react-bootstrap';
import Button from "../nav/Button";



const SubscribeForm = () => {
  const [email, setEmail] = useState("")

 
  return (
    <Container>
    <div>

    </div>
      <form>
      <span>
         <input
          aria-label="Your email address"
          name="email_address"
          placeholder="Your email address"
          required
          type="email"
        //   onChange={handleEmailChange}
          value={email}
        />
        <Button onClick={""}>Subscribe</Button> 
      </span>
        
      </form>
    </Container>
  );
}


export default SubscribeForm