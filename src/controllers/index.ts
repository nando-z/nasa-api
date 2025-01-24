class IndexController {
    async getMarsPhotos(req, res) {
        // Logic to fetch Mars photos from NASA API
        res.send("Mars photos data");
    }

    async getAsteroidData(req, res) {
        // Logic to fetch asteroid data from NASA API
        res.send("Asteroid data");
    }

    async getEarthData(req, res) {
        // Logic to fetch Earth data from NASA API
        res.send("Earth data");
    }
}

export default IndexController;