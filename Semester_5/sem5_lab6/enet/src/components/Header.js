import React from 'react';
import { HeaderStyle} from "../styles/PageStyles"
import '../styles/index.css';

export default function Header() {
    return(
        <HeaderStyle>
           <a href="/auth">Авторизация</a>
           <a href="/">ENET</a>
           <a href="/register">Регистрация</a>
        </HeaderStyle>
    );
}