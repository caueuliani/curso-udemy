import React from 'react'
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

export default (props) => {
    const tabelaprodutos = produtos.map((produto, i) => {
        return (
            <tr key={produtos.id}
                className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.produto}</td>
                <td>R$ {produto.valor.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    })

    return (
        <div className="TabelaProdutos">
            <table>
                <tr>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Valor</th>
                </tr>
                {tabelaprodutos}
            </table>
        </div>
    )
}