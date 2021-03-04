
import {auth} from '../services/firebase'

const SignOut = () => {
    return auth().currentUser && (
        <button onClick={() => auth().SignOut()}>Sign Out</button>
    )

}

export default SignOut
