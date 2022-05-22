import React, {useState} from 'react'


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
            <button o>SUBSCRIBE</button>
          </form>
    </div>
  )
}


export default SubscribeForm