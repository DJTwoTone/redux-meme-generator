import React from 'react';
import './Meme.css';

function Meme({delMeme, topText, bottomText, url, id}) {
    function handleDelMeme() {
        delMeme(id);
    }

    return (
        <div id='meme-div' className='Meme'>
            <div className='meme-container'>
    <span className='top-text'>{topText}</span>
                <img src={url} alt={topText ? `${topText} meme` : `${bottomText} meme`}/>
    <span className='bottom-text'>{bottomText}</span>
                <button id='delBtn' onClick={handleDelMeme}>
                    DELETE
                </button>
            </div>
        </div>
    )
};

export default Meme;