import { useState } from "react";
import "milligram";


function App() {
  const [loggedUser, setLoggedUser] = useState('');
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

  function logUser(email) {
      setLoggedUser(email);
  }

  let loginInput = (
      <div>
          {message}
          <input type="text" value={email} onChange={handleChange}/>
          <button type="button" onClick={() => logUser(email)}>
            Zaloguj
          </button>
      </div>
  );

  let logoutInput = (
      <div>
          <button type="button" onClick={() => logUser('')}>
            Wyloguj
          </button>
      </div>
  );

  let loggedUserData = (
      <div>
          <p>Użytkownik: {loggedUser}</p>
      </div>
  );
  

  return (
    <div>
      <h1>System do zapisów na zajęcia</h1>
      <h2>Twój e-mail to {email}.</h2>

      {loggedUser === '' ? (
        // Show login form
        <div>
          {message}
          <input type="text" value={email} onChange={handleChange} />
          <button type="button" onClick={() => logUser(email)}>
            Zaloguj
          </button>
        </div>
      ) : (
        // Show logged in info and logout
        <div>
          <p>Użytkownik: {loggedUser}</p>
          <button type="button" onClick={() => logUser('')}>
            Wyloguj
          </button>
        </div>
      )}
    </div>
  );
}

export default App;