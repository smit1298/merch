import React, {useState} from 'react'


const SubscribeForm = () => {
  const [email, setEmail] = useState("")

 
  return (
    <div>
      {status === "SUCCESS" && (
          <p>Please check your inbox to confirm the subscription!</p>
      )}
      {status === "ERROR" && (
          <p>Oops, something went wrong...</p>
         
      )}
      {status === null && (
          <form onSubmit={ }>
            
            <input
              aria-label="Your email address"
              name="email_address"
              placeholder="Your email address"
              required
              type="email"
              onChange={handleEmailChange}
              value={email}
            />
            <button>SUBSCRIBE</button>
          </form>
      )}
    </div>
  )
}


export default SubscribeForm