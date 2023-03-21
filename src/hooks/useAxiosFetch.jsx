import axios from "axios";
import { useEffect, useState } from "react";

import React from "react";

const useAxiosFetch = (url) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (fetchUrl) => {
      setIsLoading(true);
      try {
        const response = await axios.get(fetchUrl, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (error) {
        if (isMounted) {
          setData([]);
          setFetchError(error.message);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetchData(url);

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [url]);

  return { data, isLoading, fetchError };
};

export default useAxiosFetch;
