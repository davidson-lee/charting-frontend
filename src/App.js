import React, { useEffect } from 'react';

import { connect } from 'react-redux'
import { handleInit, handleActive } from './store/actions/dataActions'

import { Line } from 'react-chartjs-2'

import './App.css';


const App = ({ trades, activeCorp, corporations, handleInit, handleActive }) => {
  useEffect(() => {
    handleInit()
  }, [handleInit])
  return (
    <div className="App">
      <h1>TDAM Demo</h1>
      <h3>A quick demo of React/Redux frontend, 
        <br />Django/PostgreSQL/GraphQL backend,
        <br />hosted on AWS ft. Chart.js</h3>
      { trades && activeCorp ? 
      <div style={{width: '80vw', display: 'flex', flexFlow: 'column nowrap', alignItems: 'center'}}>
        <div className='menu'>
          <h2>{activeCorp.ticker} - {activeCorp.name}</h2>
          <div 
            className='menu-button'
          />
          <div className='menu-items'>
            {
              corporations.map(e => {
                return (
                  <h5 
                    key={e.ticker} 
                    onClick={() => {
                      handleActive(e)
                    }}>
                    {e.ticker} - {e.name}
                  </h5>
                )
              })
            }
          </div>
        </div>
        <Line
          data={{
            labels: trades.map(e => {
              return e.time
            }),
            datasets: [{
                label: 'Performance',
                data: trades.map(e => {return e.price}),
                backgroundColor: 'rgba(100, 100, 255, 0.15)',
                borderColor: 'rgba(100, 100, 255, 1)',
                borderWidth: 1,
            }]
          }}
          width={100}
          height={30}
          />
        <h3>{activeCorp.description}</h3>
      </div>
      : null}
      <h4>Developed by Davidson Lee</h4>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    trades: state.data.trades ? state.data.trades.filter(e => {
      return (e.corporation.ticker === state.data.activeCorp.ticker)
    }) : null,
    activeCorp: state.data.corporations ? state.data.activeCorp : null,
    corporations: state.data.corporations ? state.data.corporations : null,
  }
}

export default connect(mapStateToProps, { handleInit, handleActive })(App);
