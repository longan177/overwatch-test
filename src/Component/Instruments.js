import React from "react";
import { useUserContext } from "../context";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
function Instruments() {
  const { list } = useUserContext();
  return (
    <section>
      <div className="fixed-container display-container instructments-container">
        <Table {...list} />
        <Graph />
      </div>
    </section>
  );
}

export default Instruments;

function Table({ list }) {
  return (
    <section className="table border">
      <div className="table-header">
        <h4>instructments</h4>
        <input placeholder="Search"></input>
      </div>
      <div className="info-table">
        <div className="info-table-header grip-table">
          <div>Name</div>
          <div>Sell</div>
          <div>Buy</div>
          <div>Change</div>
        </div>
      </div>
    </section>
  );
}

function Graph() {
  return (
    <div className="graph border">
      <TradingViewWidget
        className="viewWidget"
        symbol="NASDAQ:AAPL"
        theme={Themes.WHITE}
        locale="fr"
        autosize
      />
    </div>
  );
}
