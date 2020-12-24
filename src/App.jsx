import './App.css'
import React from 'react'

import Primeiro from './componentes/basicos/Primeiro'
import ComParametro from './componentes/basicos/ComParametro'
import Fragmento from './componentes/basicos/Fragmento'
import Aleatorio from './componentes/basicos/Aleatorio'
import Card from './componentes/layout/Card'
import Familia from './componentes/basicos/Familia'
import FamiliaMembro from './componentes/basicos/FamiliaMembro'
import ListaAlunos from './componentes/repeticao/ListaAlunos'
import TabelaProdutos from './componentes/repeticao/TabelaProdutos'
import ParOuImpar from './componentes/condicional/ParOuImpar'
import UsuarioInfo from './componentes/condicional/UsuarioInfo'
import DiretaPai from './componentes/comunicacao/DiretaPai'
import IndiretaPai from './componentes/comunicacao/IndiretaPai'
import Input from './componentes/formulario/Input'

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">

            <Card titulo="#11- Input" color="#18DAD2">
              <Input></Input>  
            </Card>
            <Card titulo="#10- Comunicação Indireta" color="#7D47A7">
              <IndiretaPai></IndiretaPai>  
            </Card>
            <Card titulo="#9- Comunicação Direta" color="#C80D6A">
              <DiretaPai></DiretaPai>  
            </Card>
            <Card titulo="#8- Renderização Condicional" color="#1A0DC8">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando' }} />
            </Card>
            <Card titulo="#7- Desafio repetição" color="#0DC84D">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="#6- Repetição" color="#C0C80D">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="#5- Componente com Filhos" color="#5F2291">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>
            <Card titulo="#4- Desafio aleatório" color="#080">
                <Aleatorio min={1} max={100} />
            </Card>

            <Card titulo="#3- Fragmento" color="#40E0D0">
                <Fragmento />
            </Card>

            <Card titulo="#2- Com Paramêtro" color="#CCCCFF">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Pedro Silva" nota={9.3} />
            </Card>

            <Card titulo="#1- Primeiro Componente" color="#6713AD">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
)