import React, { useState } from 'react';
import axios from 'axios';

const imageList = () => {
  const [fetchedData, setFetchedData] = useState([]);

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
        setFetchedData(images.data.results);
      });
  };

  if (fetchedData) {
    return fetchedData.map((image) => {
      return <img key={image.id} src={image.urls.regular} alt='' />;
    });
  } else {
    return;
  }
};

export default imageList;
