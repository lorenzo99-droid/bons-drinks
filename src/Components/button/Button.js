import React, { Component, useState } from 'react';
import style from './button.module.css';

export default function Button(props){

const [disabled, setDisabled] = useState(false)

const desabilitar = () =>{
    console.log("clique ok")
    setDisabled(true)
    setTimeout(() =>{setDisabled(false)},3000)
}

function componentDidUpdate(){
    console.log(`A função disabled é ${disabled}`)
}
return (
        <button className={style.button} style={{width: props.largura}}  disabled={disabled} onClick={desabilitar}>{props.children}</button>
    )
}