import React from 'react';
import { Play, Heart } from 'lucide-react';

interface HexagonImageProps {
  imageUrl: string;
  title: string;
  onClick?: () => void;
  showPlayButton?: boolean;
}

const HexagonImage: React.FC<HexagonImageProps> = ({ 
  imageUrl, 
  title, 
  onClick, 
  showPlayButton = true 
}) => {
  return (
    <div className="relative group" onClick={onClick}>
      <div className="hexagon-container">
        <div 
          className="hexagon"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="hexagon-overlay group-hover:opacity-100">
            {showPlayButton ? (
              <Play className="h-12 w-12 text-white" />
            ) : (
              <Heart className="h-12 w-12 text-white" />
            )}
          </div>
        </div>
      </div>
      <h3 className="mt-4 text-center font-semibold text-gray-800">{title}</h3>
    </div>
  );
};

export default HexagonImage;