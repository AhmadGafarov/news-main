import React from "react";
import axios from "axios";

export const useFetchSearchData = (query) => {
  const [loaded, setLoaded] = React.useState(false);
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    setLoaded(false);

    const apiKey = process.env.REACT_APP_API_KEY;
    // console.log("API Key:", apiKey);

    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`
      )
      .then((response) => {
        setArticles(response.data.response.docs);
        setLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoaded(true);
      });
  }, [query]);

  return { loaded, articles };
};
