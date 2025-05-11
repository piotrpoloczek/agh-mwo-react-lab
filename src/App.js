import { useState } from "react";
import LoginForm from "./LoginForm";
import "milligram";
import UserPanel from "./UserPanel";


function App() {
  const [loggedUser, setLoggedUser] = useState('');

  return (
    <div>
      <h1>System do zapisów na zajęcia</h1>

      {loggedUser === ''
          ? (<LoginForm onLogin={(username) => setLoggedUser(username)} />)
          : (<UserPanel loggedUser={loggedUser} onLogout={(username) => setLoggedUser(username)}/>)}

    </div>
  );
}

export default App;