import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">Solana Voting Dapp</h1>
      <ul>
        <li className="text-l">
          🤝
          <span className="ml-2">
            Welcome to the Solana Voting Dapp powered by SolanaAgentKit,
            LangChain.js, and Next.js.
          </span>
        </li>
        <li className="hidden text-l md:block">
          💻
          <span className="ml-2">
            This dapp allows you to interact with Solana blockchain voting
            functionality.
          </span>
        </li>
        <li className="hidden text-l md:block">
          🎨
          <span className="ml-2">
            Ask questions about your wallet, voting options, or how to
            participate.
          </span>
        </li>
        <li className="text-l">
          👇
          <span className="ml-2">
            Try asking e.g. <code>What is my wallet address?</code> below!
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat"
      emoji="🤖"
      titleText="Solana Voting Dapp Agent"
      placeholder="I'm your friendly Solana Voting Dapp agent! Ask me anything..."
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
