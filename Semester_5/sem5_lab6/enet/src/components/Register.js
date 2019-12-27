import React, {useState} from 'react';
import Footer from './Footer'
import Header from './Header'
import {Wrapper, Main, Registration} from "../styles/PageStyles"
import '../styles/Register.css'
import ClickReg from './ClickRegister';

export default function Home() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    let reg = /[\u0400-\u04FF]/;

    function handleSubmit(event) {
        event.preventDefault();
        let isNameCorrect = true;
        for (let char of name){
            if (! reg.test(char)) { isNameCorrect = false; }
        }
        let exception = "";
        exception += (!isNameCorrect ? 'Имя должно содержать только кириллицу ' : '');
        exception += (password.length < 6 ? '\nПароль должен быть больше 6 символов' : '');
        if (exception.length !== 0) {
            alert(exception);
        }
        else {
            alert('Ты зарегистрировался с\n' +
        'логином: ' + login + '\nпаролем: ' + password);
        }
    }

    return(
        <Wrapper>
            <Header />
            <Main registration>
                <Registration onSubmit={handleSubmit}>
                    <div className="please">
                    </div>
                    <div className="reg">
                        <h1>Зарегистрируйся!</h1>
                        <div className="form-group">
                            <input className="login" type="text" name="name" id="name" placeholder='Имя' value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input className="login" type="email" name="login" id="login" placeholder='Логин' value={login} onChange={e => setLogin(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" name="password"  id="password" type="password"  placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <input className="form-control submit" type="submit" value="Чего же ты ждешь? Скорее жми!"/>
                    </div>
                </Registration>
                <ClickReg/>
            </Main>
            <Footer />
        </Wrapper>
    );
}