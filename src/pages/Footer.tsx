export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-4">VSN GROUP</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Trusted electronics and home appliances distributor transforming
              supply chains across Middle East, Africa, and CIS regions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition">
                  Business
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a
                  href="mailto:Admin@vsndistribution.com"
                  className="hover:text-cyan-400 transition"
                >
                  Admin@vsndistribution.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+971052989599"
                  className="hover:text-cyan-400 transition"
                >
                  +971 052 98 99 599
                </a>
              </li>
              <li className="text-slate-500">
                Shaikha Mariam Building, Office #810, Dubai, UAE
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          <p>
            &copy; {currentYear} VSN Group of Companies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
