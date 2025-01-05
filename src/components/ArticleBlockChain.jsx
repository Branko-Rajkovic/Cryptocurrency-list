import React from "react";

export default function ArticleBlockChain() {
  return (
    <div className="article">
      <h3 className="text-3xl font-semibold">
        Blockchain, Decentralized Digital Ledger{" "}
      </h3>

      <p>
        Blockchain is like a digital ledger or notebook that keeps track of
        things, like transactions, but instead of being stored in one place,
        it's shared across many computers around the world.
      </p>

      <p>---</p>

      <h3> Here's How It Works:</h3>

      <p>
        1. Blocks: Imagine writing a list of transactions on a single page. Once
        the page is full, you lock it and add it to a stack of other pages. Each
        of these pages is a &quot;block.&quot;
      </p>

      <p>
        2. Chain: The pages (blocks) are linked together in order, so you can
        trace back everything from the very first page to the newest one. This
        is the &quot;chain.&quot;
      </p>

      <p>
        3. Decentralization: Instead of one person keeping the notebook, copies
        of it are stored on many computers (nodes). Everyone can see the
        notebook, making it very hard for anyone to cheat.
      </p>

      <p>
        4. Security: When a block is added to the chain, it gets a special code
        (called a hash) that ensures it can't be changed without everyone
        noticing. This makes blockchain secure.
      </p>

      <p>---</p>

      <h3>Real-Life Examples:</h3>
      <ul className="list-disc">
        <li>
          Cryptocurrencies: Bitcoin and Ethereum use blockchain to record who
          owns what.
        </li>
        <li>
          Supply Chain: Companies track where products come from and where they
          go.
        </li>
        <li>
          Digital Contracts: &quot;Smart contracts&quot; automatically do things
          (like release payments) when conditions are met.
        </li>
      </ul>

      <p>---</p>
      <h3>Why is Blockchain Special?</h3>

      <ul className="list-disc">
        <li>Transparent**: Everyone can see what&rsquo;s in the chain.</li>
        <li>Secure: It&rsquo;s very hard to hack or change.</li>
        <li>Decentralized: No one person or company is in control.</li>
      </ul>

      <p>
        It&rsquo;s like a trustworthy and unchangeable diary shared among
        friends, where everyone keeps their own copy and checks that all entries
        match.
      </p>
    </div>
  );
}
