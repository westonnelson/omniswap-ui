import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark py-8 text-gray-300">
      <div className="container mx-auto flex flex-col items-center">
        {/* Existing Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full mb-8">
          <div>
            <h5 className="font-semibold text-sm mb-4">SOCIAL MEDIA</h5>
            <div className="border-t border-gray-500 my-4"></div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">X</a></li>
              <li><a href="#" className="hover:text-white">MEDIUM</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-sm mb-4">RESOURCES</h5>
            <div className="border-t border-gray-500 my-4"></div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Whitepaper</a></li>
              <li><a href="#" className="hover:text-white">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-sm mb-4">ECOSYSTEM</h5>
            <div className="border-t border-gray-500 my-4"></div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">List Your Token</a></li>
              <li><a href="#" className="hover:text-white">Partnership Application</a></li>
            </ul>
          </div>
        </div>

        {/* New Footer Bottom Section */}
        <div className="w-full border-t border-gray-500 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <div className="flex items-center mb-4 md:mb-0">
              <Image src="/omniswapwhite.png" alt="OmniSwap" width={40} height={40} />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4 text-sm mb-4 md:mb-0 text-center md:text-left">
              <a href="#" className="hover:text-white">Media Kit</a>
              <a href="#" className="hover:text-white">Terms of Use</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
            </div>
            <div className="text-sm text-center md:text-right">
              &copy; 2024 OmniSwap
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;