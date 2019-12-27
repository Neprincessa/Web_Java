import React from 'react';
import Footer from './Footer'
import Header from './Header'
// import MainBlock from './MainBlock'
// import LogoutButton from './LogoutButton'
import {Wrapper, Main} from "../styles/PageStyles"
import Authorized from './FormHome';

export default function Home() {
    return(
        <Wrapper>
            <Header />
            <Main>
                <Authorized/>
            </Main>
            <Footer/>
        </Wrapper>
    );
}