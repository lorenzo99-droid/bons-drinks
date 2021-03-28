import React, { Component } from 'react';
import style from './button.module.css';

export default function Button(props){
    return (
        <button className={style.button} style={{width: props.largura}}>{props.children}</button>
    )
}