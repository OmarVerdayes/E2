import React, { Component } from "react";

class ChatRoom extends Component {

    constructor() {
        super();
        this.state = {
            message:"",
            name:"omi",
            messages: [
                { id: 0, name: "omar", text: "prueba" },
                { id: 1, name: "Lena", text: "prueba" }
            ]
        }
    }
updateMessage(e){
    this.setState({message: e.target.value});
    console.log(this.state.message);
}

    handleSubmit(e){
        e.preventDefault();
        //console.log("en")
        const list=this.state.messages;
        const newMessage={
            id:this.state.messages.length,
            text:this.state.message,
            name:this.setState.name
        }
        list.push(newMessage);
        this.setState({messages:list})
    }
    render() {
        const { messages } = this.state;
        const messagesList = messages.map((message, index) => {
            return (
                <li key={index}>{message.name}: {message.text}</li>
            )
        })

        return (
            <div className="ChatRoom">
                <ol>
                    {messagesList}
                </ol>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" onChange={this.updateMessage.bind(this)}/>
                    <button type="submit">enviar</button>
                </form>
                
                
            </div>
            )
       
 }
}
export default ChatRoom;