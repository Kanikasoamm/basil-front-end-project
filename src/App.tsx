import React from 'react';
import './App.css';
import UserInputComponent from './components/UserInputComponent';
import PuzzleHelper from './components/PuzzleHelper';

interface UserInputProps {
  onDateSelected: (selectedDate: Date) => void;
}

function App() {
  const handleDateSelected = (selectedDate: Date) => {
    // Handle the selected date here
    console.log('Selected date:', selectedDate);
  }

  return (
    <div className="App">
      <UserInputComponent onDateSelected={handleDateSelected} />
      <PuzzleHelper
        boardSize={[4, 3]}
        initialConfiguration={[
          ['January', 'February', 'March'],
          ['April', 'May', 'June'],
          ['July', 'August', 'September'],
          ['October', 'November', 'December'],
          ['1', '2', '3'],
          ['4', '5', '6'],
          ['7', '8', '9'],
          ['10', '11', '12'],
          ['13', '14', '15'],
          ['16', '17', '18'],
          ['19', '20', '21'],
          ['22', '23', '24'],
          ['25', '26', '27'],
          ['28', '29', '30'],
          ['31', '', ''],
        ]}
        resetPuzzle={() => {  
        }}
      />
    </div>
  );
}

export default App;
