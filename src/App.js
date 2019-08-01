import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Header from './components/Header/Header';
import MainContent from './components/ MainContent/MainContent';
import Footer from './components/Footer/Footer';

function App() {
  const [imgUrl, setImgUrl] = useState('');
  console.log(imgUrl)
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=ZUCd3JqCZB3wiqCuPxBIcBCHNlofbrgWQKSJzqkt')
      .then(res => setImgUrl(res.data))
      .catch();
  }, [imgUrl]);
  console.log(imgUrl)
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
    
  );
}

export default App;
