const validator = (req, res, next) => {
    const { authorization } = req.headers;

    if(!authorization){
      return res.status(401).json({ Error: 'Token não informado'})
    };

    if(authorization != 123456) return res.status(401).json({ error: "Não autorizado"});
    next()
};

module.exports = validator;