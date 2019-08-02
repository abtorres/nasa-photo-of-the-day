import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Header from './components/Header/Header';
import MainContent from './components/ MainContent/MainContent';
function App() {
  const [imgUrl, setImgUrl] = useState('');
  const [imgDate, setDate] = useState('');
  const [explanation, setExplanation] = useState('');
  const [title, setTitle] = useState('');
  const [viewDate, setViewDay] = useState('');


  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=ZUCd3JqCZB3wiqCuPxBIcBCHNlofbrgWQKSJzqkt')
      .then(res => {
        console.log(res)
        setImgUrl(res.data.hdurl); 
        setDate(res.data.date);
        setExplanation(res.data.explanation)
        setTitle(res.data.title);

      },)
      .catch();
  },[]);
  
  return (
    <div className="App">
      <Header />
      <MainContent imgUrl={imgUrl} imgDate={imgDate} explanation={explanation} title={title}/>
    </div>
    
  );
}

export default App;
