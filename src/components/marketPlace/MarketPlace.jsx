import React from 'react';
import { Link } from 'react-router-dom';
import './marketplace.css';
import { IoIosStarOutline, IoMdStar } from 'react-icons/io';
const MarketPlace = () => {
  return (
    <section className="section market" aria-label="market update" data-section>
      <div className="container">
        <div className="title-wrapper">
          <h2 className="h2 section-title">Market Update</h2>

          <Link to="#" className="btn-link">
            See All Coins
          </Link>
        </div>

        <div className="market-tab">
          <ul className="tab-nav">
            <li>
              <button className="tab-btn active">View All</button>
            </li>

            <li>
              <button className="tab-btn">Metaverse</button>
            </li>

            <li>
              <button className="tab-btn">Entertainment</button>
            </li>

            <li>
              <button className="tab-btn">Energy</button>
            </li>

            <li>
              <button className="tab-btn">NFT</button>
            </li>

            <li>
              <button className="tab-btn">Gaming</button>
            </li>

            <li>
              <button className="tab-btn">Music</button>
            </li>
          </ul>

          <table className="market-table">
            <thead className="table-head">
              <tr className="table-row table-title">
                <th className="table-heading"></th>

                <th className="table-heading" scope="col">
                  #
                </th>

                <th className="table-heading" scope="col">
                  Name
                </th>

                <th className="table-heading" scope="col">
                  Last Price
                </th>

                <th className="table-heading" scope="col">
                  24h %
                </th>

                <th className="table-heading" scope="col">
                  Market Cap
                </th>

                <th className="table-heading" scope="col">
                  Last 7 Days
                </th>

                <th className="table-heading"></th>
              </tr>
            </thead>

            <tbody className="table-body">
              <tr className="table-row">
                <td className="table-data">
                  <button
                    className="add-to-fav"
                    aria-label="Add to favourite"
                    data-add-to-fav
                  >
                    <IoIosStarOutline
                      aria-hidden="true"
                      className="icon-outline"
                    ></IoIosStarOutline>
                    <IoMdStar
                      name="star"
                      aria-hidden="true"
                      className="icon-fill"
                    ></IoMdStar>
                  </button>
                </td>

                <th className="table-data rank" scope="row">
                  1
                </th>

                <td className="table-data">
                  <div className="wrapper">
                    <img
                      src="https://codewithsadee.github.io/cryptex/assets/images/coin-1.svg"
                      width="20"
                      height="20"
                      alt="Bitcoin logo"
                      className="img"
                    />

                    <h3>
                      <Link to="#" className="coin-name">
                        Bitcoin <span className="span">BTC</span>
                      </Link>
                    </h3>
                  </div>
                </td>

                <td className="table-data last-price">$56,623.54</td>

                <td className="table-data last-update green">+1.45%</td>

                <td className="table-data market-cap">$880,423,640,582</td>

                <td className="table-data">
                  <img
                    src="https://codewithsadee.github.io/cryptex/assets/images/chart-1.svg"
                    width="100"
                    height="40"
                    alt="profit chart"
                    className="chart"
                  />
                </td>

                <td className="table-data">
                  <button className="btn btn-outline">Trade</button>
                </td>
              </tr>

              <tr className="table-row">
                <td className="table-data">
                  <button
                    className="add-to-fav"
                    aria-label="Add to favourite"
                    data-add-to-fav
                  >
                    <IoIosStarOutline
                      aria-hidden="true"
                      className="icon-outline"
                    ></IoIosStarOutline>
                    <IoMdStar
                      name="star"
                      aria-hidden="true"
                      className="icon-fill"
                    ></IoMdStar>
                  </button>
                </td>

                <th className="table-data rank" scope="row">
                  2
                </th>

                <td className="table-data">
                  <div className="wrapper">
                    <img
                      src="https://codewithsadee.github.io/cryptex/assets/images/coin-2.svg"
                      width="20"
                      height="20"
                      alt="Ethereum logo"
                      className="img"
                    />

                    <h3>
                      <Link to="#" className="coin-name">
                        Ethereum <span className="span">ETH</span>
                      </Link>
                    </h3>
                  </div>
                </td>

                <td className="table-data last-price">$56,623.54</td>

                <td className="table-data last-update red">-5.12%</td>

                <td className="table-data market-cap">$880,423,640,582</td>

                <td className="table-data">
                  <img
                    src="https://codewithsadee.github.io/cryptex/assets/images/chart-2.svg"
                    width="100"
                    height="40"
                    alt="loss chart"
                    className="chart"
                  />
                </td>

                <td className="table-data">
                  <button className="btn btn-outline">Trade</button>
                </td>
              </tr>

              <tr className="table-row">
                <td className="table-data">
                  <button
                    className="add-to-fav"
                    aria-label="Add to favourite"
                    data-add-to-fav
                  >
                    <IoIosStarOutline
                      aria-hidden="true"
                      className="icon-outline"
                    ></IoIosStarOutline>
                    <IoMdStar
                      name="star"
                      aria-hidden="true"
                      className="icon-fill"
                    ></IoMdStar>
                  </button>
                </td>

                <th className="table-data rank" scope="row">
                  3
                </th>

                <td className="table-data">
                  <div className="wrapper">
                    <img
                      src="https://codewithsadee.github.io/cryptex/assets/images/coin-3.svg"
                      width="20"
                      height="20"
                      alt="Tether logo"
                      className="img"
                    />

                    <h3>
                      <Link to="#" className="coin-name">
                        Tether <span className="span">USDT/USD</span>
                      </Link>
                    </h3>
                  </div>
                </td>

                <td className="table-data last-price">$56,623.54</td>

                <td className="table-data last-update green">+1.45%</td>

                <td className="table-data market-cap">$880,423,640,582</td>

                <td className="table-data">
                  <img
                    src="https://codewithsadee.github.io/cryptex/assets/images/chart-1.svg"
                    width="100"
                    height="40"
                    alt="profit chart"
                    className="chart"
                  />
                </td>

                <td className="table-data">
                  <button className="btn btn-outline">Trade</button>
                </td>
              </tr>

              <tr className="table-row">
                <td className="table-data">
                  <button
                    className="add-to-fav"
                    aria-label="Add to favourite"
                    data-add-to-fav
                  >
                    <IoIosStarOutline
                      aria-hidden="true"
                      className="icon-outline"
                    ></IoIosStarOutline>
                    <IoMdStar
                      name="star"
                      aria-hidden="true"
                      className="icon-fill"
                    ></IoMdStar>
                  </button>
                </td>

                <th className="table-data rank" scope="row">
                  4
                </th>

                <td className="table-data">
                  <div className="wrapper">
                    <img
                      src="https://codewithsadee.github.io/cryptex/assets/images/coin-4.svg"
                      width="20"
                      height="20"
                      alt="BNB logo"
                      className="img"
                    />

                    <h3>
                      <Link to="#" className="coin-name">
                        BNB <span className="span">BNB/USD</span>
                      </Link>
                    </h3>
                  </div>
                </td>

                <td className="table-data last-price">$56,623.54</td>

                <td className="table-data last-update red">-3.75%%</td>

                <td className="table-data market-cap">$880,423,640,582</td>

                <td className="table-data">
                  <img
                    src="https://codewithsadee.github.io/cryptex/assets/images/chart-2.svg"
                    width="100"
                    height="40"
                    alt="loss chart"
                    className="chart"
                  />
                </td>

                <td className="table-data">
                  <button className="btn btn-outline">Trade</button>
                </td>
              </tr>

              <tr className="table-row">
                <td className="table-data">
                  <button
                    className="add-to-fav"
                    aria-label="Add to favourite"
                    data-add-to-fav
                  >
                    <IoIosStarOutline
                      aria-hidden="true"
                      className="icon-outline"
                    ></IoIosStarOutline>
                    <IoMdStar
                      name="star"
                      aria-hidden="true"
                      className="icon-fill"
                    ></IoMdStar>
                  </button>
                </td>

                <th className="table-data rank" scope="row">
                  5
                </th>

                <td className="table-data">
                  <div className="wrapper">
                    <img
                      src="https://codewithsadee.github.io/cryptex/assets/images/coin-5.svg"
                      width="20"
                      height="20"
                      alt="Solana logo"
                      className="img"
                    />

                    <h3>
                      <Link to="#" className="coin-name">
                        Solana <span className="span">SOL</span>
                      </Link>
                    </h3>
                  </div>
                </td>

                <td className="table-data last-price">$56,623.54</td>

                <td className="table-data last-update green">+1.45%</td>

                <td className="table-data market-cap">$880,423,640,582</td>

                <td className="table-data">
                  <img
                    src="https://codewithsadee.github.io/cryptex/assets/images/chart-1.svg"
                    width="100"
                    height="40"
                    alt="profit chart"
                    className="chart"
                  />
                </td>

                <td className="table-data">
                  <button className="btn btn-outline">Trade</button>
                </td>
              </tr>

              <tr className="table-row">
                <td className="table-data">
                  <button
                    className="add-to-fav"
                    aria-label="Add to favourite"
                    data-add-to-fav
                  >
                    <IoIosStarOutline
                      aria-hidden="true"
                      className="icon-outline"
                    ></IoIosStarOutline>
                    <IoMdStar
                      name="star"
                      aria-hidden="true"
                      className="icon-fill"
                    ></IoMdStar>
                  </button>
                </td>

                <th className="table-data rank" scope="row">
                  6
                </th>

                <td className="table-data">
                  <div className="wrapper">
                    <img
                      src="https://codewithsadee.github.io/cryptex/assets/images/coin-6.svg"
                      width="20"
                      height="20"
                      alt="XRP logo"
                      className="img"
                    />

                    <h3>
                      <Link to="#" className="coin-name">
                        XRP <span className="span">XRP</span>
                      </Link>
                    </h3>
                  </div>
                </td>

                <td className="table-data last-price">$56,623.54</td>

                <td className="table-data last-update red">-2.22%</td>

                <td className="table-data market-cap">$880,423,640,582</td>

                <td className="table-data">
                  <img
                    src="https://codewithsadee.github.io/cryptex/assets/images/chart-2.svg"
                    width="100"
                    height="40"
                    alt="loss chart"
                    className="chart"
                  />
                </td>

                <td className="table-data">
                  <button className="btn btn-outline">Trade</button>
                </td>
              </tr>

              <tr className="table-row">
                <td className="table-data">
                  <button
                    className="add-to-fav"
                    aria-label="Add to favourite"
                    data-add-to-fav
                  >
                    <IoIosStarOutline
                      aria-hidden="true"
                      className="icon-outline"
                    ></IoIosStarOutline>
                    <IoMdStar
                      name="star"
                      aria-hidden="true"
                      className="icon-fill"
                    ></IoMdStar>
                  </button>
                </td>

                <th className="table-data rank" scope="row">
                  7
                </th>

                <td className="table-data">
                  <div className="wrapper">
                    <img
                      src="https://codewithsadee.github.io/cryptex/assets/images/coin-7.svg"
                      width="20"
                      height="20"
                      alt="Cardano logo"
                      className="img"
                    />

                    <h3>
                      <Link to="#" className="coin-name">
                        Cardano <span className="span">ADA</span>
                      </Link>
                    </h3>
                  </div>
                </td>

                <td className="table-data last-price">$56,623.54</td>

                <td className="table-data last-update green">+0.8%</td>

                <td className="table-data market-cap">$880,423,640,582</td>

                <td className="table-data">
                  <img
                    src="https://codewithsadee.github.io/cryptex/assets/images/chart-1.svg"
                    width="100"
                    height="40"
                    alt="profit chart"
                    className="chart"
                  />
                </td>

                <td className="table-data">
                  <button className="btn btn-outline">Trade</button>
                </td>
              </tr>

              <tr className="table-row">
                <td className="table-data">
                  <button
                    className="add-to-fav"
                    aria-label="Add to favourite"
                    data-add-to-fav
                  >
                    <IoIosStarOutline
                      aria-hidden="true"
                      className="icon-outline"
                    ></IoIosStarOutline>
                    <IoMdStar
                      name="star"
                      aria-hidden="true"
                      className="icon-fill"
                    ></IoMdStar>
                  </button>
                </td>

                <th className="table-data rank" scope="row">
                  8
                </th>

                <td className="table-data">
                  <div className="wrapper">
                    <img
                      src="https://codewithsadee.github.io/cryptex/assets/images/coin-8.svg"
                      width="20"
                      height="20"
                      alt="Avalanche logo"
                      className="img"
                    />

                    <h3>
                      <Link to="#" className="coin-name">
                        Avalanche <span className="span">AVAX</span>
                      </Link>
                    </h3>
                  </div>
                </td>

                <td className="table-data last-price">$56,623.54</td>

                <td className="table-data last-update green">+1.41%</td>

                <td className="table-data market-cap">$880,423,640,582</td>

                <td className="table-data">
                  <img
                    src="https://codewithsadee.github.io/cryptex/assets/images/chart-1.svg"
                    width="100"
                    height="40"
                    alt="profit chart"
                    className="chart"
                  />
                </td>

                <td className="table-data">
                  <button className="btn btn-outline">Trade</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MarketPlace;
