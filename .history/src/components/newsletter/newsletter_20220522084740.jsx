import React, {useState} from 'react'
import { FormEvent } from 'react'


const SubscribeForm = () => {
  const [email, setEmail] = useState("")

   const handleEmailChange = () => {
    const { value } = event.target
    setEmail(value)
  }

 

  return (
    
          <form onSubmit={handleSubmit}>
            <input
              aria-label="Your first name"
              name="fields[first_name]"
              placeholder="Your first name"
              type="text"
              onChange={handleNameChange}
              value={name}
            />
            <input
              aria-label="Your email address"
              name="email_address"
              placeholder="Your email address"
              required
              type="email"
              value={email}
            />
            <button onClick={}>SUBSCRIBE</button>
          </form>
      )}
    </div>
  )
}


export default SubscribeForm;