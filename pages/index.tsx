import React from 'react';
import SignIn from '../components/SignIn/SignIn';

export default function Home() {
    return (
        <React.Fragment>
            <style jsx global>{`
                html, body, #__next {
                    width: 100%;
                    height: 100vh;
                    margin: 0;
                    display: flex;
                    justify-content: center
                }`}
            </style>
            <SignIn />
        </React.Fragment>
    )
}