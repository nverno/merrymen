import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return ({
    quote: state.entities.quotes[ownProps.symbol],
    holding: state.entities.holdings[ownProps.symbol],
    state
  });
};

// TODO:
const StockCellPercent = ({ quote }) => {
  const cname = quote && quote.negative ? 'lj-negative' : 'lj-positive';
  return (
    <span className={cname}>
      <span className="lj-type1 stock-cell-percent-change">
        {quote ? quote.percent : '—'}
      </span>
    </span>
  );
};

const StockCell = ({ symbol, quote, holding,...props }) => {

  return (
    <div className="stock-cell-container">
      <Link to={`/stocks/${symbol}`} className="stock-cell-link">

        <div className="stock-cell-left">
          <div className="stock-cell-symbol-container">
            <span className="lj-type2 stock-cell-symbol">
              {symbol}
            </span>
          </div>

          {holding &&
           <div className="stock-cell-holdings-container">
             <div style={{minWidth: '0px'}}>
               <span className="lj-type1">{holding.amount} Sha..</span>
             </div>
           </div>}
        </div>

        <div className="stock-cell-center">
          TODO
        </div>

        <div className="stock-cell-right">
          <span className="lj-type7">
            <div className="stock-cell-price-container">
              <span className="lj-type1">
                {quote ? quote.price : '—'}
              </span>
              <div style={{height: '2px'}}/>
              <StockCellPercent quote={quote}/>
            </div>
          </span>
        </div>

      </Link>
    </div>
  );
};

export default connect(mapStateToProps)(StockCell);