/**
 * UserInputComponent.tsx
 * 
 * Purpose: Handles user input and triggers a game reset.
 */


import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './UserInputStyle.css';

const monthsOptions = [
  { label: 'January', value: 'January' },
  { label: 'February', value: 'February' },
  { label: 'March', value: 'March' },
  { label: 'April', value: 'April' },
  { label: 'May', value: 'May' },
  { label: 'June', value: 'June' },
  { label: 'July', value: 'July' },
  { label: 'August', value: 'August' },
  { label: 'September', value: 'September' },
  { label: 'October', value: 'October' },
  { label: 'November', value: 'November' },
  { label: 'December', value: 'December' },
];

const daysOptions = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '10', value: '10' },
  { label: '11', value: '11' },
  { label: '12', value: '12' },
  { label: '13', value: '13' },
  { label: '14', value: '14' },
  { label: '15', value: '15' },
  { label: '16', value: '16' },
  { label: '17', value: '17' },
  { label: '18', value: '18' },
  { label: '19', value: '19' },
  { label: '20', value: '20' },
];

interface UserInputProps {
  onDateSelected: (selectedDate: Date) => void;
}

const UserInputComponent: React.FC<UserInputProps> = ({ onDateSelected }) => {
  const [selectedMonth, setSelectedMonth] = useState<any>(null);
  const [selectedDay, setSelectedDay] = useState<any>(null);

  useEffect(() => {
    if (selectedMonth && selectedDay) {
      const newDate = new Date(
        new Date().getFullYear(),
        monthsOptions.indexOf(selectedMonth) + 1,
        parseInt(selectedDay.value, 10)
      );
      onDateSelected(newDate);
    }
  }, [selectedMonth, selectedDay, onDateSelected]);

  return (
    <div className="puzzle-container">
      <h2>Puzzle</h2>
      <div className="dropdown">
        <label>Month:</label>
        <Select
          value={selectedMonth}
          options={monthsOptions}
          onChange={(selectedOption: any) => setSelectedMonth(selectedOption)}
        />
      </div>
      <div className="dropdown">
        <label>Day:</label>
        <Select
          value={selectedDay}
          options={daysOptions}
          onChange={(selectedOption: any) => setSelectedDay(selectedOption)}
        />
      </div>
    </div>
  );
};

export default UserInputComponent;

