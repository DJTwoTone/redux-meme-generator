import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Meme from './Meme';
import NewMemeForm from './NewMemeForm';


// import logo from './logo.svg';
import './App.css';

function App() {
  const memes = useSelector(s => s.memes);
  const dispatch = useDispatch();

  function addMeme(newMeme) {
    dispatch({ type: "ADD_MEME", meme: newMeme })
  }

  function delMeme(id) {
    dispatch({ type: "REMOVE_MEME", id });
  }

  const memesArr = memes.map(m => (
    <Meme 
    key={m.id}
    topText={m.topText}
    bottomText={m.bottomText}
    url={m.url}
    delMeme={() => delMeme(m.id)}
    />
  ));

  return (
    <div className="App">
      <NewMemeForm addMeme={addMeme}/>
      <hr />
      {memesArr}
    </div>
  );
}

export default App;
