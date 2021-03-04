import { auth } from "../services/firebase";
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat'

const ChatMessage = ({message}) => {
    dayjs.extend(localizedFormat)
    const {text, uid, photoURL, displayName, createdAt} = message;
    const messageClass = uid === auth().currentUser.uid ? 'sent' : 'received'
    const messageTime = dayjs(createdAt.toDate()).format('l');
    return (
        <div className={`message ${messageClass}`}>
            <img src={'https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' || photoURL}alt="aloa"/>
            <p>{text}</p>
            <p>{messageTime}</p>
        </div>
    )
}

export default ChatMessage
