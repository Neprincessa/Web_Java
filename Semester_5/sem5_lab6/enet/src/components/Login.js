import React, {useState}  from 'react';
import Header from "./Header"
import Footer from "./Footer"
import Rules from "./Rules"
import {Wrapper, Main, FormLogin} from "../styles/PageStyles"
import '../styles/Login.css'
import '../styles/index.css';

export default function Login(props) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
  
    function handleSubmit(event) {
      event.preventDefault();
      alert('Ты пытаешься войти с\n' +
      'логин: ' + login + '\nпароль: ' + password);
    }

    return (
        <Wrapper>
            <Header />
            <Main>
                <FormLogin onSubmit={handleSubmit}>
                    <div className="logo">
                    </div>
                    <h1>ENET</h1>
                    <div className="form-group">
                        <input className="login" type="email" name="login" placeholder='Логин' value={login} onChange={e => setLogin(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" name="password"  id="password" type="password"  placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control submit" type="submit" value="Авторизация"/>
                    </div>
                </FormLogin>
                <Rules />
            </Main>
            <Footer />
        </Wrapper>
    );
}