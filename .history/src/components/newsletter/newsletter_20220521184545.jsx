import React, {useState} from 'react'

const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    // TODO
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

 

  return (
    <form onSubmit={handleSubmit}>
    
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
  );
};

export default SubscribeForm