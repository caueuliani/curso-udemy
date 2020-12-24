import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props =>{
    return(
        <div>
            <span><DiretaFilho nome ="Junior" idade= {20} nerd = {true}></DiretaFilho></span>
            <span><DiretaFilho nome ="Gabriel" idade= {17} nerd = {false}></DiretaFilho></span>
        </div>
    )
}