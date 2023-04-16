import {auth} from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Message = ({ message }) => {
   
    const [user] = useAuthState(auth);//esto se comenta
    const name = user ? user.displayName : "Name User";//Obtener el correo del usuario logeado (TOKEN)
    
    
    let newStyles = 'message';
    if (auth.currentUser) {//esto es para validar si esta logeado
        if (message.uid === auth.currentUser.uid ) {//varificamos el correo de quien esta logeado con el correo de quien manda el mensaje  
            newStyles = 'my-message';            //asignamos los estilos que nosotros lo mandamos
        } 
    }
    
    //---------------------Esto es para las fechas y horas---------------
    const date = new Date(message.timestamp?.seconds*1000);
    const options = { 
        month: 'long', 
        day: 'numeric' 
    };
    let h = date.getHours();
    let m = date.getMinutes();
    let time = h + ":" + m;
    const newDate = date.toLocaleDateString('en-US', options);
    //--------------------------------------------------------------------
    return ( 
        <article className={newStyles}>
            <div>
                <div className='text-message'>
                    {
                        name!=message.name ?  <p className="user" style={{color:"gray"}}>{message.name}</p>:"" 
                    }
                    <p className="text">{ message.text }</p>
                </div>
                <p className="user">{`${newDate} - ${time}`}</p>
            </div>
        </article>
     );
}
 
export default Message;
/*----------------Explicacion---------------------------------
    Lineal 34: verificamos si el mensaje no es de nosotros, si no lo es imprimimos el nombre de quien lo mando 
            y si si lo es no imprimimos nada
    Linea 36: Imprimimos el mensaje
    Lina 38: Mostramos la fecha del mensaje (le ponemos los estilos de la letras de user xd)
*/