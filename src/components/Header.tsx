import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-dark p-4 text-light">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo, Title, and Powered By Section */}
        <div className="flex flex-col items-center text-center md:text-left">
          <div className="flex items-center space-x-2">
            <Image src="/omniswapwhite.png" alt="OmniSwap Logo" width={40} height={40} />
            <div className="text-2xl font-bold">OmniSwap</div>
          </div>
          <div className="mt-2 flex flex-col items-center md:items-start">
            <span className="text-sm text-gray-400">Powered By</span>
            <Image src="/layerzero.png" alt="LayerZero" width={80} height={20} />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row md:space-x-4 text-center space-y-2 md:space-y-0">
            <li><Link href="/swap" className="header-button">Swap</Link></li>
            <li><Link href="/liquidity" className="header-button">Liquidity</Link></li>
            <li><Link href="/lock" className="header-button">Lock</Link></li>
            <li><Link href="/vote" className="header-button">Vote</Link></li>
            <li><Link href="/rewards" className="header-button">Rewards</Link></li>
            <li><Link href="/oomnis" className="header-button">oOMNIS</Link></li>
          </ul>
        </nav>

        {/* Login Button */}
        <div className="mt-4 md:mt-0">
          <button className="header-button">Login</button>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full border-t border-gray-500 mt-4"></div>
    </header>
  );
};

export default Header;