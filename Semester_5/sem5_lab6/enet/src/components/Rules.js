import React from 'react';
import {Follow} from '../styles/PageStyles'

export default function Rules() {
    return(
        <Follow>
            <div className="notes">
                <p className="enotRules">Правила Enet:</p>
                <p>1. Никому не рассказывать о Enet</p>
                <p>2. Никому не рассказывать о Enet</p>
                <p>3...</p>
                <p>Хочешь вступить?</p>
            </div>
            <div className="touch">
            </div>
            <div className="follow">
                <a href="/register" className="submit" >Жмакай сюда</a>
            </div>
        </Follow>
    );
}