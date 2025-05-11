import { useState } from "react";
import LoginForm from "./LoginForm";
import "milligram";


function App() {
  const [loggedUser, setLoggedUser] = useState('');

  function logUser(email) {
      setLoggedUser(email);
  }

  let logoutInput = (
      <div>
          <p>Użytkownik: {loggedUser}</p>
          <button type="button" onClick={() => logUser('')}>
            Wyloguj
          </button>
      </div>
  );

  return (
    <div>
      <h1>System do zapisów na zajęcia</h1>

      {loggedUser === '' ? (
          <LoginForm onLogin={(username) => setLoggedUser(username)} />
      ) : (
          logoutInput
      )}
    </div>
  );
}

export default App;