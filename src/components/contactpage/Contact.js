import React,{useState} from 'react'
import './Contact.css'
// import Sidebar from '../student home page/Sidebar';
function Contact() {
    const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send form data to server or API
  };
  return (
    <>
    {/* <Sidebar/> */}
      
      <h1 className='title'>Contact Us</h1>
    
        <div className='contacts'>
       
       <div className='sidecontact'>
           <h1>GET IN TOUCH</h1>
           <p>We believe that quality education should be accessible to
            all who want to learn regardless of their financial circumstances.
             .</p>
           <span>location</span>
           <span>email</span>
       </div>

       <div className='contact__form'>
           
               <form onSubmit={handleSubmit}>
                   <div>
                       <label htmlFor="fullName">Full Name:</label>
                       <input className='input__space' type="text" id="fullName" value={fullName} onChange={handleFullNameChange} required />
                   </div>
                   <div>
                       <label htmlFor="email">Email:</label>
                       <input className='input__space' type="email" id="email" value={email} onChange={handleEmailChange} required />
                   </div>
                   <div>
                       <label htmlFor="phone">Phone:</label>
                       <input className='input__space' type="tel" id="phone" value={phone} onChange={handlePhoneChange} required />
                   </div>
                   <div>
                       <label htmlFor="message">Message:</label>
                       <textarea  className='input__space' id="message" value={message} onChange={handleMessageChange} required />
                   </div>
                   <button className='submit' type="submit">Submit</button>
               </form>
       </div>

   </div>
    </>
    
  )
}

export default Contact