export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white font-bold text-2xl tracking-tight hover:text-white/90 transition-colors">
              HanaTV
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/news" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              News
            </a>
            <a href="/canadian-community" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              Canadian Community
            </a>
            <a href="/korean-community" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              Korean Community
            </a>
            <a href="/special" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              Special
            </a>
            <a href="/youth" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              Youth
            </a>
            <a href="/trading" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              Trading
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button className="px-3 py-1.5 text-sm font-medium text-white/80 hover:text-white border border-white/20 hover:border-white/40 transition-all">
              EN / KR
            </button>

            {/* Mobile Menu Icon */}
            <button className="md:hidden text-white/80 hover:text-white transition-colors" aria-label="Menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
