import {useState} from "react";
import NewMeetingForm from "./NewMeetingForm";
import MeetingsList from "./MeetingsList";
import {AddNewMeetingForm} from "./AddNewMetting";


export default function MeetingsPage() {
    const [meetings, setMeetings] = useState([]);
    const [addMetting, setAddMetting] = useState(false);

    function handleNewMeeting(meeting) {
        const nextMeetings = [...meetings, meeting];
        setMeetings(nextMeetings);
        setAddMetting(false);
    }


    return (
        <div>
            <h2>Zajęcia ({meetings.length})</h2>
            {addMetting
                ? (<NewMeetingForm onSubmit={(meeting) => handleNewMeeting(meeting)}/>)
                : (<AddNewMeetingForm onSubmit={(stateValue) => setAddMetting(stateValue)} />)
            }
            <MeetingsList meetings={meetings}/>
        </div>
    )
}