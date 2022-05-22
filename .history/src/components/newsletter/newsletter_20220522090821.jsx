import React, {useState} from 'react'
import Button from "../nav/Button";



const SubscribeForm = () => {
  const [email, setEmail] = useState("")

 
  return (
    <div>
    <div></div>
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
    </div>
  );
}


export default SubscribeForm