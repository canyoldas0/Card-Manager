// import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import GameCard from 'Models/GameCard';
import './App.css';
import CardList from './components/CardList';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function App() {
  return (
    <div className="body">
      <div className="col-md">
        <CardList></CardList>
      </div>
    </div>
  );
}
