import React, { useEffect, useState } from 'react';
import useInterval from './useInterval';
import { optimalDimensions, getImageDimensions } from './helpers';
import './Carousel.css';

export default function Carousel({
  imageUrls,
  duration = 3000,
  startIdx = 0,
  width,
  height,
}) {
  const [currentIdx, setCurrentIdx] = useState(startIdx);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [imageDimensions, setImageDimensions] = useState(null);
  const len = imageUrls.length;
  const wrapperStyle = {
    width: width || '100%',
    height: height || '',
  };

  // Set up autoplay
  useInterval(
    () => {
      handleNextClick();
    },
    isReady && isPlaying ? duration : null
  );

  // Get the images' dimension
  useEffect(() => {
    const fetchDimension = async function(urls) {
      const res = await Promise.all(
        urls.map((url) => {
          return getImageDimensions(url);
        })
      );

      return res.map((imgDimensions) => {
        return optimalDimensions(
          {
            width,
            height,
          },
          imgDimensions
        );
      });
    };

    fetchDimension(imageUrls).then((dimensions) => {
      setImageDimensions(dimensions);
      setIsReady(true);
      setIsPlaying(true);
    });
  }, [height, imageUrls, width]);

  // Event handlers
  function handlePrevClick() {
    let nextIdx = currentIdx - 1;

    if (nextIdx < 0) {
      nextIdx = len + nextIdx;
    }

    setCurrentIdx(nextIdx);
  }

  function handleNextClick() {
    setCurrentIdx((currentIdx + 1) % len);
  }

  function onImageMouseOver() {
    setIsPlaying(false);
  }

  function onImageMouseOut() {
    setIsPlaying(true);
  }

  // Render functions
  function renderLoading() {
    return <div>Loading...</div>;
  }

  function renderCarousel() {
    return (
      <div className="carousel-wrapper" style={wrapperStyle}>
        <div className="images">
          <img
            src={imageUrls[currentIdx]}
            width={imageDimensions[currentIdx].width}
            height={imageDimensions[currentIdx].height}
            alt=""
            onMouseOver={onImageMouseOver}
            onMouseOut={onImageMouseOut}
          />
        </div>
        <div className="prev-click-area">
          <button className="carousel-prev" onClick={handlePrevClick}>
            &#8249;
          </button>
        </div>

        <div className="next-click-area">
          <button className="carousel-next" onClick={handleNextClick}>
            &#8250;
          </button>
        </div>
      </div>
    );
  }

  return <>{isReady ? renderCarousel() : renderLoading()}</>;
}
