module.exports = {

    create: (req, res, next) => {
        const dbInstance = req.app.get('db'); 
        const { name, address, city, state, zipcode } = req.body; 
        dbInstance.create_house([name, address, city, state, zipcode]).then(() => res.sendStatus(200))
        .catch(error => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"})
            console.log('--- create house error ---', error)
        })
    },

    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
        dbInstance.read_house([params.id]).then(house => res.status(200).send(house) )
        .catch( error => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log('--- get one house error ---', error)
        });
    },

    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_houses().then(houses => res.status(200).send( houses))
        .catch( error => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log('--- get all houses error ---', error)
        });
    },

    update: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;
        dbInstance.update_house([params.id, query.desc]).then(() => res.sendStatus(200) )
        .catch( error => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log('--- update house error ---', error)
        });
    },

    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
        dbInstance.delete_house([params.id]).then(() => res.sendStatus(200) )
        .catch( error => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log('--- delete house error ---', error)
        });
    }
}