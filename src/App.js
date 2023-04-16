import User from "./components/User";
import Chat from "./components/Chat";//si marca error no lo cambies (funciona bien)
 import "./App.css"

const App = () => {
      //User no se usa es para la informacion de la izquierda (no es necesario los conponentes "User","SingIn" y "logOut")
    return ( 
        <div className="App">
            <User/>
            <Chat/>
        </div>
     );
}
 
export default App;