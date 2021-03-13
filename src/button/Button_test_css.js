import React, { Component } from 'react'
import style from './css_module/button.module.css'
export default class button_test_css extends Component {
    render() {
        return (
            
                <button className={style.button} style={{width: this.props.largura}}>{this.props.texto}</button>
           
        )
    }
}
