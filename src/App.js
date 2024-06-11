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
                    <p>This is the first section test and its longer</p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Services
                    </a>
                </div>

                <div className="glass-effect" style={{ marginTop: '2.5vh', marginBottom: '2.5vh',}}> {/* Second section with different margins */}
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Partners</p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Partners 2
                    </a>
                </div>
                <div className="glass-effect" style={{ marginTop: '2.5vh', marginBottom: '5vh' }}> {/* Third section with another unique margin */}
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Abt</p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Abt
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
