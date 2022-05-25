import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Major component imports
import { createRoot } from 'react-dom/client';
import ItemOverview from './Item-Overview/ItemOverview';
import RelatedOutfitView from './RIOC/RelatedOutfitView';
import QuestionsAndAnswers from './q-a/QuestionAndAnswers';
import RatingReviews from './Ratings-Reviews/RRcomponents/RRapp';

// create the root of the app by selection where the app should be mounted in the dom
const root = createRoot(document.getElementById('root'));

export const ProductIdContext = React.createContext();

function App() {
  const [itemId, setItemId] = useState(37316);

  return (
    <div>
      <ProductIdContext.Provider value={{ itemId, setItemId}}>
        <ItemOverview />
        <RelatedOutfitView />
        <QuestionsAndAnswers />
        <RatingReviews />
      </ProductIdContext.Provider>
    </div>
  );
}

// render the root element with the provided component
root.render(<App />);
