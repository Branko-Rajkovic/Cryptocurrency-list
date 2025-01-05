import React from "react";

export default function CryptoTypes() {
  return (
    <div>
      <header className="flex items-center">
        <h1 className="title-sky">Types of Cryptocurrency</h1>
        <img src="/images/coin_types_title.png" className="w-2/3" />
      </header>
      <div className="article">
        <h3>1. Bitcoin (BTC)</h3>
        <p>
          Bitcoin is the first and most well-known cryptocurrency, created by
          Satoshi Nakamoto in 2009. It is a decentralized digital currency
          designed for peer-to-peer transactions without intermediaries.
        </p>
        <ul>
          <li>Purpose: A store of value, often compared to digital gold.</li>
          <li>
            Key Features: Limited supply (21 million coins), high security, and
            transparency.
          </li>
        </ul>

        <h3>2. Altcoins</h3>
        <p>
          Altcoins are cryptocurrencies other than Bitcoin. They often aim to
          improve upon Bitcoin's limitations or serve specialized purposes.
        </p>
        <ul>
          <li>Examples:</li>
          <ul>
            <li>
              Ethereum (ETH): Platform for smart contracts and decentralized
              applications (dApps).
            </li>
            <li>
              Litecoin (LTC): Faster and cheaper transactions compared to
              Bitcoin.
            </li>
            <li>Cardano (ADA): Focuses on scalability and sustainability.</li>
            <li>
              Polkadot (DOT): Enables interoperability between blockchains.
            </li>
          </ul>
        </ul>

        <h3>3. Stablecoins</h3>
        <p>
          Cryptocurrencies pegged to stable assets like fiat currencies or
          commodities to minimize volatility.
        </p>
        <ul>
          <li>Examples: Tether (USDT), USD Coin (USDC), DAI.</li>
        </ul>

        <h3>4. Utility Tokens</h3>
        <p>
          Tokens that provide access to specific services or applications within
          a blockchain-based ecosystem.
        </p>
        <ul>
          <li>Examples: Basic Attention Token (BAT), Chainlink (LINK).</li>
        </ul>

        <h3>5. Security Tokens</h3>
        <p>
          Cryptocurrencies that represent ownership in assets like stocks or
          real estate.
        </p>
        <ul>
          <li>
            Purpose: Used for fundraising and regulated under securities law.
          </li>
        </ul>

        <h3>6. Governance Tokens</h3>
        <p>
          Tokens that grant holders voting rights on the future of blockchain
          protocols or dApps.
        </p>
        <ul>
          <li>Examples: Uniswap (UNI), Maker (MKR).</li>
        </ul>

        <h3>7. Meme Coins</h3>
        <p>
          Cryptocurrencies inspired by memes or jokes, often gaining popularity
          through community engagement.
        </p>
        <ul>
          <li>Examples: Dogecoin (DOGE), Shiba Inu (SHIB).</li>
        </ul>

        <h3>8. Privacy Coins</h3>
        <p>
          Cryptocurrencies that focus on enhancing transaction privacy and
          anonymity.
        </p>
        <ul>
          <li>Examples: Monero (XMR), Zcash (ZEC).</li>
        </ul>

        <h3>9. Exchange Tokens</h3>
        <p>
          Cryptocurrencies issued by exchanges to provide benefits within their
          platforms.
        </p>
        <ul>
          <li>Examples: Binance Coin (BNB), FTX Token (FTT).</li>
        </ul>

        <h3>10. Decentralized Finance (DeFi) Tokens</h3>
        <p>
          Tokens used within DeFi protocols for financial services like lending
          and borrowing.
        </p>
        <ul>
          <li>Examples: Aave (AAVE), Compound (COMP).</li>
        </ul>

        <h3>11. Non-Fungible Tokens (NFTs)</h3>
        <p>
          Unique digital assets representing ownership of specific items like
          art or virtual real estate.
        </p>
        <ul>
          <li>Examples: CryptoPunks, Bored Ape Yacht Club.</li>
        </ul>

        <h3>Summary Table</h3>
        <table className="table-outer">
          <thead className="thead-orange">
            <tr>
              <th>Type</th>
              <th>Purpose</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tdata-sky">Bitcoin</td>
              <td className="tdata-sky">Peer-to-peer currency</td>
              <td className="tdata-sky">BTC</td>
            </tr>
            <tr>
              <td className="tdata-sky">Altcoins</td>
              <td className="tdata-sky">Specialized use cases</td>
              <td className="tdata-sky">ETH, LTC, ADA, DOT</td>
            </tr>
            <tr>
              <td className="tdata-sky">Stablecoins</td>
              <td className="tdata-sky">Minimize volatility</td>
              <td className="tdata-sky">USDT, USDC, DAI</td>
            </tr>
            <tr>
              <td className="tdata-sky">Utility Tokens</td>
              <td className="tdata-sky">Access services in a blockchain</td>
              <td className="tdata-sky">BAT, LINK</td>
            </tr>
            <tr>
              <td className="tdata-sky">Security Tokens</td>
              <td className="tdata-sky">Asset ownership representation</td>
              <td className="tdata-sky">Tokenized assets</td>
            </tr>
            <tr>
              <td className="tdata-sky">Governance Tokens</td>
              <td className="tdata-sky">Voting rights in a blockchain</td>
              <td className="tdata-sky">UNI, MKR</td>
            </tr>
            <tr>
              <td className="tdata-sky">Meme Coins</td>
              <td className="tdata-sky">Fun and speculative trading</td>
              <td className="tdata-sky">DOGE, SHIB</td>
            </tr>
            <tr>
              <td className="tdata-sky">Privacy Coins</td>
              <td className="tdata-sky">Transaction privacy</td>
              <td className="tdata-sky">XMR, ZEC</td>
            </tr>
            <tr>
              <td className="tdata-sky">Exchange Tokens</td>
              <td className="tdata-sky">Benefits within exchange ecosystems</td>
              <td className="tdata-sky">BNB, FTT</td>
            </tr>
            <tr>
              <td className="tdata-sky">DeFi Tokens</td>
              <td className="tdata-sky">Decentralized financial services</td>
              <td className="tdata-sky">AAVE, COMP</td>
            </tr>
            <tr>
              <td className="tdata-sky">NFTs</td>
              <td className="tdata-sky">Ownership of unique digital assets</td>
              <td className="tdata-sky">CryptoPunks, BAYC</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
