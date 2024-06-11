import React from 'react';
import logo from './logo.svg';
import './App.css';
import logoheader from './logoheader.svg';

function App() {
    return (
        <div className="App">
            <header className="glass-header">
                <img src={logoheader} className="header-logo" alt="logo" />
            </header>
            <main className="App-main">
                <div className="glass-effect" style={{ marginTop: 'calc(5vh + 50px)', marginBottom: '2.5vh', }}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <a className="App-link" href="https://laikafi.app" target="_blank" rel="noopener noreferrer">
                        Laika
                    </a>
                </div>
                <div className="glass-effect" style={{ marginTop: '2.5vh', marginBottom: '2.5vh',}}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <a className="App-link secondary-link" href="https://astrofi.app" target="_blank" rel="noopener noreferrer">
                        Astro
                    </a>
                </div>
                <div className="glass-effect" style={{ marginTop: '2.5vh', marginBottom: '5vh' }}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <a className="App-link tertiary-link" href="https://cosmofi.app" target="_blank" rel="noopener noreferrer">
                        Cosmo
                    </a>
                </div>
            </main>
            <footer className="App-footer">
                <div className="footer-section">
                    &copy; Laika 2024. All rights reserved.
                </div>
                <div className="footer-section small-text">
                    Disclaimer: This is not financial advice. Do your own research and consult an advisor before investing. By buying Laika, you acknowledge it's experimental and not an investment.
                </div>
            </footer>
        </div>
    );
}

export default App;
