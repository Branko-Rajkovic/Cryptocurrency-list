import React from "react";

export default function BasicCryptoTerms() {
  return (
    <div className="p-4 text-sky-200">
      <h1>Basic Terms in Cryptocurrency Trading</h1>

      <h2>General Terms</h2>
      <ul className="m-2 list-disc">
        <li>
          <span className="font-semibold text-orange-300">
            Cryptocurrency (Crypto):
          </span>{" "}
          Digital or virtual currency secured by cryptography (e.g., Bitcoin,
          Ethereum).
        </li>
        <li>
          <span className="font-semibold text-orange-300">Blockchain:</span> The
          technology that records all cryptocurrency transactions on a
          decentralized ledger.
        </li>
        <li>
          <span className="font-semibold text-orange-300">Altcoin:</span> Any
          cryptocurrency other than Bitcoin (e.g., Ethereum, Cardano).
        </li>
        <li>
          <span className="font-semibold text-orange-300">Wallet:</span> A
          digital tool where you store your cryptocurrency (e.g., hardware
          wallets, software wallets).
        </li>
        <li>
          <span className="font-semibold text-orange-300">Private Key:</span> A
          secure code that allows you to access and manage your cryptocurrency.
        </li>
        <li>
          <span className="font-semibold text-orange-300">Public Key:</span> The
          address you share to receive cryptocurrency, like your bank account
          number.
        </li>
      </ul>

      <h2>Trading Basics</h2>
      <ul className="m-2 list-disc">
        <li>
          <span className="font-semibold text-orange-300">Exchange:</span> A
          platform where you can buy, sell, or trade cryptocurrencies (e.g.,
          Binance, Coinbase).
        </li>
        <li>
          <span className="font-semibold text-orange-300">Fiat Currency:</span>{" "}
          Traditional money like USD, EUR, or GBP, used to buy cryptocurrencies.
        </li>
        <li>
          <span className="font-semibold text-orange-300">Market Order:</span>{" "}
          Buying or selling at the current market price.
        </li>
        <li>
          <span className="font-semibold text-orange-300">Limit Order:</span>{" "}
          Setting a specific price at which you want to buy or sell.
        </li>
        <li>
          <span className="font-semibold text-orange-300">Liquidity:</span> How
          easily a cryptocurrency can be bought or sold without affecting its
          price.
        </li>
        <li>
          <span className="font-semibold text-orange-300">Spread:</span> The
          difference between the buying (ask) and selling (bid) price.
        </li>
      </ul>

      <h2>Trading Strategies</h2>
      <ul className="m-2 list-disc">
        <li>
          <span className="font-semibold text-orange-300">HODL:</span> A
          misspelled "hold" that means keeping your crypto for the long term,
          regardless of market fluctuations.
        </li>
        <li>
          <span className="font-semibold text-orange-300">Day Trading:</span>{" "}
          Buying and selling cryptocurrencies within the same day to make quick
          profits.
        </li>
        <li>
          <span className="font-semibold text-orange-300">Swing Trading:</span>{" "}
          Holding crypto for days or weeks to capitalize on medium-term trends.
        </li>
        <li>
          <span className="font-semibold text-orange-300">Scalping:</span>{" "}
          Making small, quick trades for tiny profits multiple times a day.
        </li>
      </ul>

      <h2>Market Terms</h2>
      <ul className="m-2 list-disc">
        <li>
          <span className="font-semibold text-orange-300">Bull Market:</span> A
          market where prices are rising.
        </li>
        <li>
          <span className="font-semibold text-orange-300">Bear Market:</span> A
          market where prices are falling.
        </li>
        <li>
          <span className="font-semibold text-orange-300">FOMO:</span> "Fear of
          Missing Out," often leading to impulsive buying during price spikes.
        </li>
        <li>
          <span className="font-semibold text-orange-300">FUD:</span> "Fear,
          Uncertainty, and Doubt," negative news or rumors that scare traders.
        </li>
      </ul>

      <h2>Price Metrics</h2>
      <ul className="m-2 list-disc">
        <li>
          <span className="font-semibold text-orange-300">Market Cap:</span>{" "}
          Total value of a cryptocurrency (price × circulating supply).
        </li>
        <li>
          <span className="font-semibold text-orange-300">
            ATH (All-Time High):
          </span>{" "}
          The highest price a cryptocurrency has ever reached.
        </li>
        <li>
          <span className="font-semibold text-orange-300">
            ATL (All-Time Low):
          </span>{" "}
          The lowest price a cryptocurrency has ever reached.
        </li>
      </ul>

      <h2>Risk Management</h2>
      <ul className="m-2 list-disc">
        <li>
          <span className="font-semibold text-orange-300">
            Stop-Loss Order:
          </span>{" "}
          An automatic order to sell your crypto if the price falls to a certain
          level, minimizing losses.
        </li>
        <li>
          <span className="font-semibold text-orange-300">
            Take-Profit Order:
          </span>{" "}
          An automatic order to sell when the price reaches a desired profit
          level.
        </li>
        <li>
          <span className="font-semibold text-orange-300">Leverage:</span>{" "}
          Borrowing money to trade larger amounts than you own (risky for
          beginners).
        </li>
        <li>
          <span className="font-semibold text-orange-300">Volatility:</span> How
          much the price of a cryptocurrency moves up or down.
        </li>
      </ul>

      <h2>Advanced Concepts</h2>
      <ul className="m-2 list-disc">
        <li>
          <span className="font-semibold text-orange-300">
            DeFi (Decentralized Finance):
          </span>{" "}
          Financial services (like lending or trading) built on blockchain
          without intermediaries.
        </li>
        <li>
          <span className="font-semibold text-orange-300">Staking:</span>{" "}
          Locking up your crypto in a network to earn rewards.
        </li>
        <li>
          <span className="font-semibold text-orange-300">Mining:</span> Using
          computing power to solve complex problems and validate transactions
          (rewarded with new coins).
        </li>
      </ul>

      <p>Start with small investments and always research before trading!</p>
    </div>
  );
}
