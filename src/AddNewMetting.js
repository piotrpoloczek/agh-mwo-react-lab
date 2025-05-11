

export function AddNewMeetingForm(props) {


    return (
        <button type="button" onClick={() => props.onSubmit(true)}>
            Dodaj nowe spotkanie
        </button>
    )
}