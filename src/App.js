import { useState } from "react";


function App() {
  const [email, setEmail] = useState('fracz@agh.edu.pl');

  let message;
  if (email.length < 10) {
    message = <div>Ale masz krótki adres!</div>;
  } else if (email.length < 15) {
    message = <div>Twój adres e-mail jest w sam raz!</div>;
  } else {
    message = <div>Twoj adres e-mail jest bardzo długi!</div>;
  }
  
  function handleChange(event) {
      setEmail(event.target.value);
  }

  return (
      <div>
          <h1>System do zapisów na zajęcia</h1>
          <h2>Twój e-mail to {email}.</h2>
          {message}
          <input type="text" value={email} onChange={handleChange}/>
      </div>
  );
}

export default App;