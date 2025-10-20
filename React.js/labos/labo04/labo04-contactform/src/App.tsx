import { useState } from "react"

 

const ContactForm = () => {
  const [confirmationText, setConfirmationText] = useState<string>("")
  const [firstName, setFirstName] = useState<string>("") 
  const [lastName, setLastName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setConfirmationText(`Thanks ${firstName} ${lastName}! We will contact you at ${email}.`);
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
    };

    const isValid = () => {
        return firstName.length > 0 && lastName.length > 0 && email.length > 0 && message.length > 0;
    }


  return(
    <form onSubmit={handleSubmit}>
      <label>First Name </label>
      <input onChange={(e)=>setFirstName(e.target.value)} value={firstName} type="text"/>

      <br />
      <label>Last Name </label>
      <input onChange={(e)=>setLastName(e.target.value)} value={lastName} type="text"/>

      <br />
      <label>Email </label>
      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email"/>

      <br />
      <label >Message : </label>
      <textarea onChange={(e)=>setMessage(e.target.value)} value={message}></textarea>

      <br />
      <button disabled={!isValid()} onClick={() => {

      }}>Send</button>
      {confirmationText && (
          <div style={{gridRowStart: 6, gridColumn: "1 / span 2"}}>
              {confirmationText}
          </div>
      )}
    </form>
  )
}


const App = () => {

  return(
    <>
      <ContactForm/>
    </>
  )
}

export default App