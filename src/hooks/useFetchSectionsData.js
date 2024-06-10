import React from "react";
import axios from "axios";

export const useFetchSectionsData = (section) => {
  const [loaded, setLoaded] = React.useState(false);
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    setLoaded(false);

    const apiKey = process.env.REACT_APP_API_KEY;
    // console.log("API Key:", apiKey);  // Add this line for debugging

    // Call API only once a section is defined
    if (section) {
      axios
        .get(
          `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`
        )
        .then((response) => {
          setArticles(response.data.results);
          setLoaded(true);
        })
        .catch((error) => {
          setLoaded(true);
          console.error("Error fetching data: ", error);
        });
    }
  }, [section]);

  return { loaded, articles };
};
