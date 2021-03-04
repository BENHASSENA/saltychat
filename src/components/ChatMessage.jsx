import { auth } from "../services/firebase";


const ChatMessage = ({message}) => {
    const {text, uid, photoURL} = message;
    const messageClass = uid === auth().currentUser.uid ? 'sent' : 'received'
    return (
        <div className={`message ${messageClass}`}>
            <img src={'https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' || photoURL}alt="aloa"/>
            <p>{text}</p>
        </div>
    )
}

export default ChatMessage
