/**
 * PuzzleHelper.tsx
 * 
 * Purpose: Implementing a puzzle-solving algorithm using breadth-first search(BFS)
 */

import React, { Component } from 'react';
import PuzzlePiece from './PuzzlePiece';

interface PuzzleSolverProps {
    boardSize: [number, number]; 
    initialConfiguration: string[][];
    resetPuzzle: () => void;
}

interface PuzzleSolverState {
  board: string[][]; 
  emptyTilePosition: [number, number]; 
}

// Initialize state, puzzle board, BFS-related data structures, and other needed variables
class PuzzleHelper extends Component<PuzzleSolverProps, PuzzleSolverState> {
  constructor(props: PuzzleSolverProps) {
    super(props);
    this.state = {
      board: [],
      emptyTilePosition: [0, 0],
    };
  }

  // Implement the BFS solver function
  bfsSolver(initialState: PuzzleSolverState) {

    const queue: PuzzleSolverState[] = [];

    queue.push(initialState);

    while (queue.length > 0) {
      const currentState = queue.shift();

      if (!currentState) {
        continue;
      }

      const moves = [
        [-1, 0], 
        [1, 0],  
        [0, -1], 
        [0, 1],  
      ];

      for (const [dx, dy] of moves) {
        const [emptyX, emptyY] = currentState.emptyTilePosition;
        const newX = emptyX + dx;
        const newY = emptyY + dy;

        if (
          newX >= 0 &&
          newX < currentState.board.length &&
          newY >= 0 &&
          newY < currentState.board[0].length
        ) {

          const newState = { ...currentState };
          newState.board = currentState.board.map((row) => [...row]);
          newState.emptyTilePosition = [newX, newY];

          [newState.board[emptyX][emptyY], newState.board[newX][newY]] = [
            newState.board[newX][newY],
            newState.board[emptyX][emptyY],
          ];

          if (this.isSolutionState(newState)) {
            this.props.resetPuzzle();
            return;
          }

          queue.push(newState);
        }
      }
    }
  
  }

  resetPuzzle() {
   
  }
  
  isSolutionState(state: PuzzleSolverState): boolean {
    return false; 
  }

  render() {
    return (
      <div className="puzzle-solver">
        {this.state.board.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((content, columnIndex) => (
              <PuzzlePiece
                key={`${rowIndex}-${columnIndex}`}
                content={content}
                position={[rowIndex, columnIndex]}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default PuzzleHelper;