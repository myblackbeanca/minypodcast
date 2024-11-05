import React from 'react';
import { Link } from 'react-router-dom';
import { Radio, Mail, Twitter, Instagram, Youtube, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Radio className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold">MINY</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Transform your podcast into interactive collectible experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/category/indie-artists" className="hover:text-purple-400">Indie Artists</Link></li>
              <li><Link to="/category/comedy" className="hover:text-purple-400">Comedy</Link></li>
              <li><Link to="/category/podcast" className="hover:text-purple-400">Podcast</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/help" className="hover:text-purple-400">Help Center</Link></li>
              <li><Link to="/blog" className="hover:text-purple-400">Blog</Link></li>
              <li><Link to="/terms" className="hover:text-purple-400">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-purple-400">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Stay Updated</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          © {new Date().getFullYear()} MINY. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;