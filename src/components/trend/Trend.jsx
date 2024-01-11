import React from 'react';
import { Link } from 'react-router-dom';
import './trend.css';
const Trend = () => {
  return (
    <section className="section trend" aria-label="crypto trend" data-section>
      <div className="container">
        <div className="trend-tab">
          <ul className="tab-nav">
            <li>
              <button className="tab-btn active">Crypto</button>
            </li>

            <li>
              <button className="tab-btn">DeFi</button>
            </li>

            <li>
              <button className="tab-btn">BSC</button>
            </li>

            <li>
              <button className="tab-btn">NFT</button>
            </li>
          </ul>

          <ul className="tab-content">
            <li>
              <div className="trend-card">
                <div className="card-title-wrapper">
                  <img
                    src="https://codewithsadee.github.io/cryptex/assets/images/coin-1.svg"
                    width="24"
                    height="24"
                    alt="bitcoin logo"
                  />

                  <Link to="#" className="card-title">
                    Bitcoin <span className="span">BTC/USD</span>
                  </Link>
                </div>

                <data className="card-value" value="46168.95">
                  USD 46,168.95
                </data>

                <div className="card-analytics">
                  <data className="current-price" value="36641.20">
                    36,641.20
                  </data>

                  <div className="badge red">-0.79%</div>
                </div>
              </div>
            </li>

            <li>
              <div className="trend-card active">
                <div className="card-title-wrapper">
                  <img
                    src="https://codewithsadee.github.io/cryptex/assets/images/coin-2.svg"
                    width="24"
                    height="24"
                    alt="ethereum logo"
                  />

                  <Link to="#" className="card-title">
                    Ethereum <span className="span">ETH/USD</span>
                  </Link>
                </div>

                <data className="card-value" value="3480.04">
                  USD 3,480.04
                </data>

                <div className="card-analytics">
                  <data className="current-price" value="36641.20">
                    36,641.20
                  </data>

                  <div className="badge green">+10.55%</div>
                </div>
              </div>
            </li>

            <li>
              <div className="trend-card">
                <div className="card-title-wrapper">
                  <img
                    src="https://codewithsadee.github.io/cryptex/assets/images/coin-3.svg"
                    width="24"
                    height="24"
                    alt="tether logo"
                  />

                  <Link to="#" className="card-title">
                    Tether <span className="span">USDT/USD</span>
                  </Link>
                </div>

                <data className="card-value" value="1.00">
                  USD 1.00
                </data>

                <div className="card-analytics">
                  <data className="current-price" value="36641.20">
                    36,641.20
                  </data>

                  <div className="badge red">-0.01%</div>
                </div>
              </div>
            </li>

            <li>
              <div className="trend-card">
                <div className="card-title-wrapper">
                  <img
                    src="https://codewithsadee.github.io/cryptex/assets/images/coin-4.svg"
                    width="24"
                    height="24"
                    alt="bnb logo"
                  />

                  <Link to="#" className="card-title">
                    BNB <span className="span">BNB/USD</span>
                  </Link>
                </div>

                <data className="card-value" value="443.56">
                  USD 443.56
                </data>

                <div className="card-analytics">
                  <data className="current-price" value="36641.20">
                    36,641.20
                  </data>

                  <div className="badge red">-1.24%</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Trend;
