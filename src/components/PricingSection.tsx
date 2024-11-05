import React, { useState, useEffect } from 'react';
import { Calculator, Palette, Calendar } from 'lucide-react';
import HexagonImage from './HexagonImage';

const PricingSection: React.FC = () => {
  const [minyCount, setMinyCount] = useState<number>(25);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  
  const MINY_PRICE = 4.99;
  const DESIGN_FEE = 1000;
  const MAX_MINY = 2500;
  const MIN_MINY = 25;

  useEffect(() => {
    const minyTotal = minyCount * MINY_PRICE;
    const total = minyTotal + DESIGN_FEE;
    setTotalPrice(total);
  }, [minyCount]);

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-purple-900 to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Create Your MINY Drop</h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Choose how many MINYs you want to create for your podcast. Each MINY is a unique collectible experience for your listeners.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="hexagon-container transform hover:scale-105 transition-transform">
              <div className="bg-purple-800/50 backdrop-blur-sm p-8 rounded-2xl">
                <Calculator className="h-8 w-8 text-purple-300 mb-4" />
                <h3 className="text-xl font-bold mb-2">MINY Quantity</h3>
                <p className="text-purple-200">
                  {minyCount} MINYs @ ${MINY_PRICE} each
                </p>
                <p className="text-2xl font-bold mt-2">
                  ${(minyCount * MINY_PRICE).toFixed(2)}
                </p>
              </div>
            </div>

            <div className="hexagon-container transform hover:scale-105 transition-transform">
              <div className="bg-purple-800/50 backdrop-blur-sm p-8 rounded-2xl">
                <Palette className="h-8 w-8 text-purple-300 mb-4" />
                <h3 className="text-xl font-bold mb-2">Design Fee</h3>
                <p className="text-purple-200">
                  Custom design for your drop
                </p>
                <p className="text-2xl font-bold mt-2">
                  ${DESIGN_FEE.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="hexagon-container transform hover:scale-105 transition-transform">
              <div className="bg-purple-800/50 backdrop-blur-sm p-8 rounded-2xl">
                <Calendar className="h-8 w-8 text-purple-300 mb-4" />
                <h3 className="text-xl font-bold mb-2">Limited Time</h3>
                <p className="text-purple-200">
                  Offer valid until
                </p>
                <p className="text-2xl font-bold mt-2">
                  Dec 31, 2024
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-800/30 backdrop-blur-sm p-8 rounded-2xl mb-8">
            <label htmlFor="miny-slider" className="block text-lg font-semibold mb-4">
              Select MINY Quantity
            </label>
            <input
              type="range"
              id="miny-slider"
              min={MIN_MINY}
              max={MAX_MINY}
              step={25}
              value={minyCount}
              onChange={(e) => setMinyCount(Number(e.target.value))}
              className="w-full h-2 bg-purple-600 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm mt-2">
              <span>{MIN_MINY} MINYs</span>
              <span>{MAX_MINY} MINYs</span>
            </div>
          </div>

          <div className="bg-purple-800/30 backdrop-blur-sm p-8 rounded-2xl text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Total Investment</h3>
              <p className="text-4xl font-bold text-purple-300">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
            <div className="space-y-4">
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 px-8 rounded-full transition-colors font-bold text-lg">
                Create Your MINY Drop
              </button>
              <p className="text-purple-300 text-sm">
                * Price includes design fee and {minyCount} MINYs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;