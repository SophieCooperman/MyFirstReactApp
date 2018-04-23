const getMovies = () => {
  
  const fetchPromise = new Promise((resolve, reject)=>{
    fetch("https://facebook.github.io/react-native/movies.json")
    .then(data => resolve(data.json()))
    .then(parsedData => '\n\n **** ' + Console.log(JSON.stringify(parsedData)))
    .catch(error => {
      fetchPromise.reject(error);
      console.error("getMovies Error: " + error);
    });
  });

  return fetchPromise;
};

export { getMovies };
