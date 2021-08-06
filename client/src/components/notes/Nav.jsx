import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav({setIsLogin}) {

    const logoutSubmit = () =>{
        localStorage.clear()
        setIsLogin(false)
    }

    return (
        <header>
            <div className="logo">
                <h1><Link to="/">Black Note</Link></h1>
            </div>
            <ul>
                <li><Link to="/">Заметки</Link></li>
                <li><Link to="/create">Создать</Link></li>
                <li onClick={logoutSubmit}><Link to="/">Выйти</Link></li>
            </ul>
        </header>
    )
}
