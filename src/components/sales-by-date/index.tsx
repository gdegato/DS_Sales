import React from 'react';
import './styles.css';
function SalesByDate() {
  return (
    <div className="sales-by-date-container base-card">
      <div>
        <h4 className="sales-by-date-title">Evolução das vendas</h4>
        <span className="sales-by-date-period">01/01/2017 a 31/01/2017</span>
      </div>
      <div className="sales-by-date-data">
        <div className="sales-by-date-quantity-container">
          <h2 className="sales-by-date-quantity">464.988,00</h2>
          <span className="sales-by-date-quantity-label">Vendas no período</span>
          <span className="sales-by-date-quantity-description">
            O gráfico mostra as vendas em todas as lojas
          </span>
        </div>
        <div className="sales-by-date-chart-container">

        </div>
      </div>
    </div>
  );
}

export default SalesByDate;
