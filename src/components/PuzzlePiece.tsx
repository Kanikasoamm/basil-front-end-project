/**
 * PuzzlePiece.tsx
 * 
 * Purpose: Rendering an individual puzzle piece within the puzzle game.
 */

import React from 'react';

interface PuzzlePieceProps {
  content: string;
  position: [number, number];
}

const PuzzlePiece: React.FC<PuzzlePieceProps> = ({ content, position }) => {
  return (
    <div className="puzzle-piece">
      {content}
    </div>
  );
};

export default PuzzlePiece;