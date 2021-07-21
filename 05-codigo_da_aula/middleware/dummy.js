const dummy = (req, res, next) => {
  console.log('Hello World');
  res.status(200).json({ Hello: 'World', method: req.method, responseTime: Date.now() - req.startTime})
};

module.exports = dummy;