const log = (req, res, next) => {
    req.startTime = Date.now();
    console.log(`${req.method} | ${req.path}` )

    next();
};

module.exports = log;