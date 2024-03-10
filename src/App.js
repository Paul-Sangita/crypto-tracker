import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Coin from "./Coin";
import Header from "./Header";
import HeaderCoin from "./header-coin";
import Pagination from "./Pagination";
import Choose from "./Choose";
import Footer from "./Footer"; // Import Pagination component

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(10); // Change this number according to your preference

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      )
      .then(res => {
        setCoins(res.data.slice(0, 50));
      }).catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  // Logic to calculate the indexes of coins to display on the current page
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())).slice(indexOfFirstCoin, indexOfLastCoin);
  // const headerCoins = coins.filter(coin =>
  //   coin.name.toLowerCase().includes(search.toLowerCase())).slice(indexOfFirstCoin, indexOfLastCoin);

  // Function to handle page changes
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <section id="home">
        <Header />
        <div class="header-coin-space">
          {coins.slice(0, 4).map(coin => (
            <HeaderCoin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
            />
          ))}
        </div>
      </section>
      <section id="market">
        <div className="coin-app">

          <div className="coin-search">

            <h1 className="coin-text"> Market Update
            </h1>
            {/* <form>
            <input type="text" placeholder="Search" className="coin-input" onChange={handleChange} />
          </form> */}

            <div className='heading-container'>
              <div className='heading'>
                <div className='heading-text'>
                  Coin
                </div>
                <div className='heading-text'>
                  Price
                </div>
                <div className='heading-text'>
                  24h Change
                </div>
                <div className='heading-text'>
                  Market Cap
                </div>
              </div>
            </div>

          </div>
          {currentCoins.map(coin => (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              // symbol={coin.symbol}
              // volume={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              marketcap={coin.total_volume}
            />
          ))}
          <Pagination
            itemsPerPage={coinsPerPage}
            totalItems={coins.filter(coin =>
              coin.name.toLowerCase().includes(search.toLowerCase())).length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </section>
      <section id="choose">
        <Choose />
      </section>
      <section id="join">
        <div className="header-container">
          <h1 class="heading-text"><img src={process.env.PUBLIC_URL + '/bitcoin-logo.png'} /> JOIN US VIA <img class="img-logo" src={process.env.PUBLIC_URL + '/ethereum-logo.png'} />
            <br /><span>DISCORD</span></h1>
          <p>Invest and manage all your crypto at one place.</p>
          <button class="button-33" role="button">Join Via Discord</button>
        </div>
      </section>
      <Footer />
    </div >
  );
};

export default App;