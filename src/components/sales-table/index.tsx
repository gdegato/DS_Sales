import './styles.css';

import React from 'react';

function SalesTable() {
  return (
    <div className="sales-table-container base-card">
      <h3 className="sales-table-title">Vendas recentes</h3>
      <table className="sales-table">
        <thead>
          <th>ID</th>
          <th>Data</th>
          <th>Gênero</th>
          <th>Categoria</th>
          <th>Loja</th>
          <th>Forma de pagamento</th>
          <th>Total</th>
        </thead>
        <tbody>
          <tr>
            <td>341</td>
            <td>07/11/1994</td>
            <td>Feminino</td>
            <td>Roupas e acessórios</td>
            <td>Uberlândia</td>
            <td>Crédito</td>
            <td>R$450.000,00</td>
          </tr>
          <tr>
            <td>341</td>
            <td>07/11/1994</td>
            <td>Feminino</td>
            <td>Roupas e acessórios</td>
            <td>Uberlândia</td>
            <td>Crédito</td>
            <td>R$450.000,00</td>
          </tr>
          <tr>
            <td>341</td>
            <td>07/11/1994</td>
            <td>Feminino</td>
            <td>Roupas e acessórios</td>
            <td>Uberlândia</td>
            <td>Crédito</td>
            <td>R$450.000,00</td>
          </tr>
          <tr>
            <td>341</td>
            <td>07/11/1994</td>
            <td>Feminino</td>
            <td>Roupas e acessórios</td>
            <td>Uberlândia</td>
            <td>Crédito</td>
            <td>R$450.000,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
