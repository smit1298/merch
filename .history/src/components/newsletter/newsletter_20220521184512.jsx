import React, {useState} from 'react'

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    // TODO
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
  };

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
        onChange={handleEmailChange}
        value={email}
      />
      <button>SUBSCRIBE</button>
    </form>
  );
};

export default SubscribeForm