import React, { useState, useRef } from 'react';
import axios from 'axios';

const MainComponent = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const inputElement = useRef();

  const fetchImages = async () => {
    const currentInputValue = inputElement.current.value;
    await axios
      .get('https://api.unsplash.com/search/photos', {
        params: {
          query: currentInputValue,
        },
        headers: {
          Authorization:
            'Client-ID o-4xrUHyC2BD0UmCwrYOPx4sicfrS0iTbCyLnMArQ6k',
        },
      })
      .then((images) => {
        console.log(images.data.results);
        inputElement.current.value = '';
        setFetchedData(images.data.results);
      });
  };

  const renderImages = () => {
    if (fetchedData) {
      return fetchedData.map((image) => {
        return <img key={image.id} src={image.urls.regular} alt='' />;
      });
    }
  };

  if (!fetchedData) {
    return (
      <>
        <input
          ref={inputElement}
          type='text'
          name=''
          id=''
          placeholder='type here'
        />
        <button onClick={fetchImages}>find</button>
      </>
    );
  } else {
    return (
      <>
        <input
          ref={inputElement}
          type='text'
          name=''
          id=''
          placeholder='type here'
        />
        <button onClick={fetchImages}>find</button>
        {renderImages()}
      </>
    );
  }
};

export default MainComponent;
