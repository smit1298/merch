import React, {useState} from 'react'
import Button from "../nav/Button";



const SubscribeForm = () => {
  const [email, setEmail] = useState("")

 
  return (
    <div>
      <form>
        <input
          aria-label="Your email address"
          name="email_address"
          placeholder="Your email address"
          required
          type="email"
          onChange={handleEmailChange}
          value={email}
        />
        <Button href="#">Get Started</Button>
      </form>
    </div>
  );
}


export default SubscribeForm