const Dockerfile = require('../models/Dockerfile');

module.exports = server => {

    /**
     * Handle GET requests on dockerfiles
     * Return a list of all the dockerfiles to the client
     */
    server.get('/dockerfiles', (req, res, next) => {
        Dockerfile.find((err, dockerfiles) => {
            res.send(dockerfiles);
            next();
        });
    });


    /**
     * Handle GET requests on specific dockerfile
     * Return a description of the dockerfile to the client
     */
    server.get('/dockerfiles/:id', (req, res, next) => {
        Dockerfile.findOne({ _id:req.params.id }, (err, dockerfile) => {
            res.send(dockerfile);
            next();
        });
    });

    /**
     * Handle POST requests on dockerfiles
     * Create a new dockerfile in database
     */
    server.post('/dockerfiles', (req, res, next) => {
        let dockerfile = new Dockerfile({
            weight: req.body.weight,
            name: req.body.name,
            age: req.body.age
        });
        for (let prop in req.body)
            dockerfile[prop] = req.body[prop];
        dockerfile.save().then(dockerfile => {
            res.send(dockerfile);
            next();
        });
    });

    /**
     * Handle PUT requests on specific dockerfile
     * Update an existing dockerfile in database
     */
    server.put('/dockerfiles/:id', (req, res, next) => {
        Dockerfile.findOne({ _id:req.params.id }, (err, dockerfile) => {
            for (let prop in req.body)
                dockerfile[prop] = req.body[prop];
            dockerfile.save().then(dockerfile => {
                res.send(dockerfile);
                next();
            });
        });
    });

    /**
     * Handle DELETE requests on specific dockerfile
     * Delete an existing dockerfile in database
     */
    server.del('/dockerfiles/:id', (req, res, next) => {
        Dockerfile.remove({ _id: req.params.id }, err => {
            res.send(200);
            next();
        });
    });

}
