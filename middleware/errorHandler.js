const errorHandler = (err, req, res, next) => {
    err.message = err.message || 'Something went wrong';
    err.status = err.status || 500;

    console.log(err.message);

    res.status(err.status).send({error: err});
};

module.exports = errorHandler;