import { useState } from "react";

const StateFullForm = () => {
  const [name,setName] = useState('rojoniklanto')
  const [email,setemail] = useState(null);
  const [password,setPassword] = useState(null);
  const [error,setError] = useState('')


  const handleSubmit = e =>{
    e.preventDefault();
    if(password.length < 6){
      setError('password must be 6 chracter or longer!')
    }else{
      setError('')
      console.log(name,email, password)
    }
  
  }

  const handleNameChange = e =>{
    setName(e.target.value)
  }

  const handlePasswordChange = e =>{
        setPassword(e.target.value)
  }


  const handleEmailChange = e =>{
    setemail(e.target.value)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name}  onChange={handleNameChange} type="text" name="name" /> <br />
        <input onChange={handleEmailChange} type="email" name="email" /> <br />
        <input onChange={handlePasswordChange} type="password" name="password" required /> <br />

        <br />
        <input type="submit" value="Submit" />

      </form>
      {
        error && <p>{error}</p>
      }
    </div>
  );
};

export default StateFullForm;