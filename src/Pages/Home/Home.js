import React from 'react'
import style from './home.module.css'

export default function Home() {
    return (
        <div className={style.body}>
            <h1 className={style.h1}>Bons Drinks</h1>
            <img className={style.img} src="https://bonsdrinks.netlify.app/static/media/bg-bons-drinks.7a3b2d04.jpg"></img>
        </div>
    )
}
