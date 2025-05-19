const getMovies = async () => {
    return await fetch('../data/fakedata.json')
        .then((response) => response.json())
        .then(data => {
            return data;
        })
        .catch((error) => {
            console.error(error);
        })
}
