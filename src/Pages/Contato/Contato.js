import React from 'react';
import style from './contato.module.css'
import Button from '../../Components/button/Button'


export default function Contato() {
    return (
        <div className={style.container}>
        <h2>CONTATO</h2>
        <div className={style.formContainer}>
          <img
            className={style.imagem}
            src="https://bonsdrinks.netlify.app/static/media/contact-pic.689e126c.jpg"
          ></img>

          <form className={style.forms}>
              <input placeholder="Nome"/>
            
             <input placeholder="E-mail"/>

            <textarea placeholder="Mensagem" name="mensagem" />
            
            <Button largura="50%">Enviar</Button>
          </form>
        </div>
      </div>
    )
}
