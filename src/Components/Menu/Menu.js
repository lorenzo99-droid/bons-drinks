import React, { Component } from 'react'
import style from "./menu.module.css"
export default class Menu extends Component {
    render() {
        return (
            <body>
                <h2>CONTATO</h2>
                <div className={style.formContainer}>
                    <img className={style.imagem} src="https://bonsdrinks.netlify.app/static/media/contact-pic.689e126c.jpg"></img>
                    <form className={style.forms}>
                        <div className={style.campoNome}>
                            <label >nome: </label>
                            <input className={style.css}/>
                        </div>
                        <div className={style.campoEmail}>
                            <label>e-mail: </label>
                            <input className={style.css}/>
                        </div>

                        <label className={style.mensagem}>mensagem: </label>
                        <textarea  name="mensagem"/>
                        <div>
                            <button className={style.botao}>Send</button>
                        </div>
                    </form>
                </div>
            </body>
        )
    }
}
