import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <h2>CONTATO</h2>
                <div className="form-container">
                    <img className="imagem" src="https://bonsdrinks.netlify.app/static/media/contact-pic.689e126c.jpg"></img>
                    <form className="forms">
                        <div className="campo-nome">
                            <label >nome: </label>
                            <input className="css"/>
                        </div>
                        <div className="campo-email">
                            <label>e-mail: </label>
                            <input className="css"/>
                        </div>

                        <label className="mensagem">mensagem: </label>
                        <textarea  name="mensagem"/>
                        <div>
                            <button className="botao">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
