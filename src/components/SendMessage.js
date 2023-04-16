import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from '../utils/firebase';
import Picker from 'emoji-picker-react';                //este es para usar los emojis
import { BsFillEmojiSmileFill } from "react-icons/bs";  //este es un icono
import { IoSend } from "react-icons/io5";               //este es un icono
import { AiFillCloseCircle } from "react-icons/ai";     //este es un icono


const SendMessage = ({ scroll }) => {

    
    const [input, setInput] = useState('');         //aqui se guarda lo que escribimos en el campo de texto
    const [open, setOpen] = useState('close');      //esto es para abiri o cerra los mensajes


    const sendMessage = async (e) => {      //hacemos una llamada a la base (recibimos "e" el cual nos ayuda a no recargar toda la pagina , si no solo a recargar el componene)
        e.preventDefault();                 //decimos que solo recarge el componente y no toda la pagina
        setOpen('close');                   // cerramos la ventana de los emojis

        if (input === '') {                             //verificamos que el campo de texto no este vacio
            alert('Favor de enviar un mensaje valido'); //mensaje
            return;
        }

        const { uid, displayName } = auth.currentUser;// obtenemos el identificador del del mensaje y el nombre del usuario logeadp
        await addDoc(collection(db, 'messages'), {//usamos la funcion "addDoc" de firebase para añadir un nuevo documento
            text: input,//asignamos el texto escrito
            name: displayName,//cambiar el displayName por el correo de la persona logeada
            uid,//se manda el id 
            timestamp: serverTimestamp()//asigamos el tiempo (es una funcion que ya viene implementada)
        })

        setInput('');//limpiamos el campo de texto
        scroll.current.scrollIntoView({ behavior: 'smooth' })//esto es para que el scroll baje
    }

    const emoji = () => {
        setOpen('open');//actualizamos el estado de la ventana de los emojis para que se abra
    }
    const closeEmoji = () => {
        setOpen('close');//actualizamos el estado de la ventana de los emojis para que se cierre
    }
    const onEmojiClick = (emojiObject) => {//recibimos la propiedad "emojiObject" la cual viene por defecto y tiene varios campos
        setInput(`${input}${emojiObject.emoji}`); // asignamos al campo que ya tenia mas el emoji
    };

    return (
        <form onSubmit={sendMessage} /*cada que se preiona el boton de enbiar llama a la funcion "sendMessage" (esta arriba)*/>
            <button //Abre los iconos
                type="button"
                className="btn-emoji"//le aignamos los estilos de "btn-emoji"
                onClick={emoji}
            >
                <BsFillEmojiSmileFill /*Este es un icono*/ />
            </button>
            <div className={open}/*ponemos loes estilos de la variable "open" (por defecto estan en close)*/>
                <button //cierra los iconos
                    className="close-emoji" //le aignamos los estilos de un boton de cerre
                    onClick={closeEmoji}
                    type="button">
                    <AiFillCloseCircle style={{ color: "red" }} /* Este es un icono (lo pintamos de rojo)*/ />
                </button>
                <Picker onEmojiClick={onEmojiClick}/* este es el menu de emojis (llama a la funcion para añadir el emoji al campo de texto)*/ />
            </div>

            <input type="text"
                placeholder="Escribe tu mensaje aqui"
                onChange={e => setInput(e.target.value)} //cada que se modifique el texto se le aigna a la varibale "input"(asi se llama)
                value={input} //el texo es el mismo que del input
            />
            <button type="submit">Enviar <IoSend /*Este es un icono */ /></button>

        </form>
    );
}

export default SendMessage;