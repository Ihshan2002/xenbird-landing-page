import Link from 'next/link';

const Topnavbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-xenbird-primary/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
    
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold tracking-tight text-white">
              Xenbird
            </span>
          </div>

          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#demos" className="text-gray-300 hover:text-white transition-colors px-3 py-2 text-sm font-medium">
                Demos
              </Link>
              <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors px-3 py-2 text-sm font-medium">
                How it Works
              </Link>
              <Link href="#why-xenbird" className="text-gray-300 hover:text-white transition-colors px-3 py-2 text-sm font-medium">
                Why Xenbird
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="#Contact Sales">
            <button className="bg-xenbird-secondary hover:bg-blue-600 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all shadow-lg">
              Contact Sales
            </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topnavbar;