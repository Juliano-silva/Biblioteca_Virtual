import React from 'react';
import { BrowserRouter as Router,Route,Link,Routes } from "react-router-dom"
import style from './style.module.css'
export default function BottomTabsNavigation() {
    return (
        <div className={style.BottomTabs}>
            <Link to="/">Livros</Link>
            <Link to="/Add">Pesquisar</Link>
        </div>
    );
}