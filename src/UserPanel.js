
export default function UserPanel(props) {

    return (
        <div>
            <p>Użytkownik: {props.loggedUser}</p>
            <button type="button" onClick={() => props.onLogout('')}>
                Wyloguj
            </button>
        </div>
    );

}