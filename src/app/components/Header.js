export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-none">
      {/* Logo */}
      <div className="flex items-center gap-2">
        {/* Placeholder SVG logo */}
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect x="2" y="2" width="14" height="14" rx="4" fill="#2563eb" />
          <rect x="20" y="2" width="14" height="14" rx="4" fill="#fbbf24" />
          <rect x="2" y="20" width="14" height="14" rx="4" fill="#f87171" />
          <rect x="20" y="20" width="14" height="14" rx="4" fill="#38bdf8" />
        </svg>
        <span className="font-bold text-xl text-[#2563eb] leading-tight">
          Relevance
          <br />
          Studio
        </span>
      </div>
      {/* Navigation */}
      <nav className="hidden md:flex gap-8 text-base font-medium text-gray-700">
        <a href="#" className="hover:text-blue-600 transition">
          About Us
        </a>
        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-blue-600 transition focus:outline-none">
            Services
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {/* Dropdown placeholder */}
          <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-10">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Service 1
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Service 2
            </a>
          </div>
        </div>
        <a href="#" className="hover:text-blue-600 transition">
          Testimonials
        </a>
        <a href="#" className="hover:text-blue-600 transition">
          Contact
        </a>
      </nav>
      {/* CTA Button */}
      <a
        href="#"
        className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition text-base"
      >
        Get Demo
        <span className="ml-2">→</span>
      </a>
    </header>
  );
}
