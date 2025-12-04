import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import './MarketTicker.css';

const MOCK_STOCKS = [
  { name: '@alex_dev', price: '124.50', change: '+5.2%', up: true },
  { name: '@sarah_js', price: '98.20', change: '+2.1%', up: true },
  { name: '@david_py', price: '85.40', change: '-0.8%', up: false },
  { name: '@maria_rs', price: '156.00', change: '+8.4%', up: true },
  { name: '@james_go', price: '72.10', change: '-1.5%', up: false },
  { name: '@lisa_cpp', price: '110.30', change: '+1.2%', up: true },
  { name: '@tom_rb', price: '64.80', change: '-3.2%', up: false },
  { name: '@nina_ts', price: '142.90', change: '+4.7%', up: true },
];

const MarketTicker = () => {
  return (
    <div className="ticker-wrapper">
      <div className="ticker-container">
        {/* Duplicate list for seamless infinite scroll */}
        {[...MOCK_STOCKS, ...MOCK_STOCKS, ...MOCK_STOCKS].map((stock, index) => (
          <div key={index} className="ticker-item">
            <span className="ticker-name">{stock.name}</span>
            <span className="ticker-price">${stock.price}</span>
            <span className={`ticker-change ${stock.up ? 'up' : 'down'}`}>
              {stock.up ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              {stock.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketTicker;
