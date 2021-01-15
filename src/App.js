import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [albums, setAlbums] = useState([]);
  const [pics, setPics] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => res.json())
      .then(res => setAlbums([...res]))

  }, []);

  function createPic(event) {
    const albumId = event.target.selectedIndex + 1;
    setValue(event.target.value)
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(res => res.json())
      .then(res => setPics([...res]))
  }


  return (
    <div className="App">
      <h1>Select an album:</h1>

      <select className="albums" onChange={(event) => createPic(event)}>
        {albums.map((album, index) => {
          return <option key={index} value={album.title}>{album.title}</option>
        })}
      </select>
      <hr />
      <div>
        {pics.map((pic, index) => {
          return <img key={index} src={pic.thumbnailUrl} alt={`pic no. ${pic.id}`} />
        })}
      </div>
    </div>
  );
}



export default App;
