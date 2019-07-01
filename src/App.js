import React from 'react';
import Carousel from './Carousel';
import './App.css';

const images = [
  'https://2.bp.blogspot.com/-BxB8d0eRXas/V580Gz2jupI/AAAAAAAADOk/ByUJPk13xcQfXJQoNHDGDW9ltniWD9nDgCLcB/s1600/son-tung-m-tp-lai-bi-chi-trich-giong-g-dragon-trong-mv-moi-bb-baaadENkYo.jpg',
  'https://2.bp.blogspot.com/-4T69LPA8wPc/V580I9sVP6I/AAAAAAAADOo/1947_tbhNzoZhxeZIm9PVW3rksrVxOHBQCLcB/s1600/img-4034jpg-bb-baaac5Oz07.jpg',
  'https://kenh14cdn.com/2019/3/29/oppo0791-1553864709947107034360.jpg',
  'https://kenh14cdn.com/2017/17838340-1275642699217888-526940119-o-1491651595229.jpg',
  'https://pm1.narvii.com/6403/dba83d3a3ca8bcb6f897de9cce790d3ca6d5913c_hq.jpg',
];

function App() {
  return (
    <div className="App">
      <Carousel imageUrls={images} duration={3000} width={600} height={200} />
    </div>
  );
}

export default App;
