import React from "react";

export default function BasicCryptoTerms() {
  return (
    <div className="list">
      <h3>General Terms</h3>
      <ul className="m-2 list-disc">
        <li>
          <span className="orange-text-strong">Cryptocurrency (Crypto):</span>{" "}
          Digital or virtual currency secured by cryptography (e.g., Bitcoin,
          Ethereum).
        </li>
        <li>
          <span className="orange-text-strong">Blockchain:</span> The technology
          that records all cryptocurrency transactions on a decentralized
          ledger.
        </li>
        <li>
          <span className="orange-text-strong">Altcoin:</span> Any
          cryptocurrency other than Bitcoin (e.g., Ethereum, Cardano).
        </li>
        <li>
          <span className="orange-text-strong">Wallet:</span> A digital tool
          where you store your cryptocurrency (e.g., hardware wallets, software
          wallets).
        </li>
        <li>
          <span className="orange-text-strong">Private Key:</span> A secure code
          that allows you to access and manage your cryptocurrency.
        </li>
        <li>
          <span className="orange-text-strong">Public Key:</span> The address
          you share to receive cryptocurrency, like your bank account number.
        </li>
      </ul>

      <h3>Trading Basics</h3>
      <ul className="m-2 list-disc">
        <li>
          <span className="orange-text-strong">Exchange:</span> A platform where
          you can buy, sell, or trade cryptocurrencies (e.g., Binance,
          Coinbase).
        </li>
        <li>
          <span className="orange-text-strong">Fiat Currency:</span> Traditional
          money like USD, EUR, or GBP, used to buy cryptocurrencies.
        </li>
        <li>
          <span className="orange-text-strong">Market Order:</span> Buying or
          selling at the current market price.
        </li>
        <li>
          <span className="orange-text-strong">Limit Order:</span> Setting a
          specific price at which you want to buy or sell.
        </li>
        <li>
          <span className="orange-text-strong">Liquidity:</span> How easily a
          cryptocurrency can be bought or sold without affecting its price.
        </li>
        <li>
          <span className="orange-text-strong">Spread:</span> The difference
          between the buying (ask) and selling (bid) price.
        </li>
      </ul>

      <h3>Trading Strategies</h3>
      <ul className="m-2 list-disc">
        <li>
          <span className="orange-text-strong">HODL:</span> A misspelled "hold"
          that means keeping your crypto for the long term, regardless of market
          fluctuations.
        </li>
        <li>
          <span className="orange-text-strong">Day Trading:</span> Buying and
          selling cryptocurrencies within the same day to make quick profits.
        </li>
        <li>
          <span className="orange-text-strong">Swing Trading:</span> Holding
          crypto for days or weeks to capitalize on medium-term trends.
        </li>
        <li>
          <span className="orange-text-strong">Scalping:</span> Making small,
          quick trades for tiny profits multiple times a day.
        </li>
      </ul>

      <h3>Market Terms</h3>
      <ul className="m-2 list-disc">
        <li>
          <span className="orange-text-strong">Bull Market:</span> A market
          where prices are rising.
        </li>
        <li>
          <span className="orange-text-strong">Bear Market:</span> A market
          where prices are falling.
        </li>
        <li>
          <span className="orange-text-strong">FOMO:</span> "Fear of Missing
          Out," often leading to impulsive buying during price spikes.
        </li>
        <li>
          <span className="orange-text-strong">FUD:</span> "Fear, Uncertainty,
          and Doubt," negative news or rumors that scare traders.
        </li>
      </ul>

      <h3>Price Metrics</h3>
      <ul className="m-2 list-disc">
        <li>
          <span className="orange-text-strong">Market Cap:</span> Total value of
          a cryptocurrency (price × circulating supply).
        </li>
        <li>
          <span className="orange-text-strong">ATH (All-Time High):</span> The
          highest price a cryptocurrency has ever reached.
        </li>
        <li>
          <span className="orange-text-strong">ATL (All-Time Low):</span> The
          lowest price a cryptocurrency has ever reached.
        </li>
      </ul>

      <h3>Risk Management</h3>
      <ul className="m-2 list-disc">
        <li>
          <span className="orange-text-strong">Stop-Loss Order:</span> An
          automatic order to sell your crypto if the price falls to a certain
          level, minimizing losses.
        </li>
        <li>
          <span className="orange-text-strong">Take-Profit Order:</span> An
          automatic order to sell when the price reaches a desired profit level.
        </li>
        <li>
          <span className="orange-text-strong">Leverage:</span> Borrowing money
          to trade larger amounts than you own (risky for beginners).
        </li>
        <li>
          <span className="orange-text-strong">Volatility:</span> How much the
          price of a cryptocurrency moves up or down.
        </li>
      </ul>

      <h3>Advanced Concepts</h3>
      <ul className="m-2 list-disc">
        <li>
          <span className="orange-text-strong">
            DeFi (Decentralized Finance):
          </span>{" "}
          Financial services (like lending or trading) built on blockchain
          without intermediaries.
        </li>
        <li>
          <span className="orange-text-strong">Staking:</span> Locking up your
          crypto in a network to earn rewards.
        </li>
        <li>
          <span className="orange-text-strong">Mining:</span> Using computing
          power to solve complex problems and validate transactions (rewarded
          with new coins).
        </li>
      </ul>

      <p>Start with small investments and always research before trading!</p>
    </div>
  );
}
