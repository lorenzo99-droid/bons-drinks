import React, { Component } from 'react'
import style from "./header.module.css"
export default class Header extends Component {
    render() {
        return (
            
                <header className={style.navContainer}>
                    <nav className={style.navHeader}>
                        
                        <a className={style.nav}><h2>Bons Drinks</h2></a>
                        <a className={style.nav}><h2>Drinks</h2></a>
                        <a className={style.nav}><h2>Contato</h2></a>
                        <a className={style.nav}><h2>Nosso Time</h2></a>
                        <a className={style.nav}><h2>Sobre Nós</h2></a>
                    </nav>
                </header>
        )
    }
}
