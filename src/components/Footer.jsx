const Footer = () => {
    return (
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Footer Column 1: About */}
            <div>
              <h3 className="text-lg font-bold text-red-600 mb-4">About Us</h3>
              <p className="text-sm">
                BH Bank is your trusted financial partner. We provide secure and reliable banking
                services to help you achieve your financial goals.
              </p>
            </div>
  
            {/* Footer Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-red-600 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-400 hover:text-red-600">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-400 hover:text-red-600">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-red-600">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Footer Column 3: Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-red-600 mb-4">Contact Info</h3>
              <ul className="text-sm space-y-2">
                <li>Email: support@Bh Bankbank.com</li>
                <li>Phone: +1 (123) 456-7890</li>
                <li>Address: 123 Bank Street, Finance City</li>
              </ul>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} BH Bank. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;