import React , {useState} from 'react';
import '../styles/index.css';
import {Auth} from "../styles/PageStyles";
import '../styles/Authorized.css'

export default function Authorized() {
    const [message, setMessage] = useState("");
  
    function handleSubmit(event) {
      event.preventDefault();
      alert('Твое сообщение:\n' +
      message);
    }
    return (
        <Auth>
            <div className="allMessages">
                No dialogs yet
            </div>
            <div className="line">
            </div>
            <div className="currentDialog">
                <div className="backPhoto">
                </div>
                <div className="sendMessage">
                    <input className="form-control" name="text"  id="text" type="text"  placeholder="Введите новое сообщение"  value={message} onChange={e => setMessage(e.target.value)} />
                    <input className="form-control submit" type="submit" onClick={handleSubmit} value="Отправить"/>
                </div>
            </div>
        </Auth>
    )
}