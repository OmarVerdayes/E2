import LogOut from "./LogOut";
import SingIn from "./SingIn";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
const User = () => {
    const [user] = useAuthState(auth);

    const photo = user ? user.photoURL : "../public/userImage.png";
    const name = user ? user.displayName : "Name User";
    return ( 
        <div className='right-side'>
            <h1>QuickChat</h1>
            <article className='card-user'>
                <img src={photo} alt="user default" referrerPolicy="no-referrer" />
                <p>{name}</p>
                { user ? <LogOut/> : <SingIn/> }
            </article>
        </div>
    );
}

export default User;