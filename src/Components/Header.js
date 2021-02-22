import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>

                <header className="nav-container">
                    <nav className="nav-header">

                        <a className="nav"><h2>Drinks</h2></a>
                        <a className="nav"><h2>Bons Drinks</h2></a>
                        <a className="nav"><h2>Contato</h2></a>
                        <a className="nav"><h2>Nosso Time</h2></a>
                        <a className="nav"><h2>Sobre Nós</h2></a>
                    </nav>
                </header>
            </div>
        )
    }
}
