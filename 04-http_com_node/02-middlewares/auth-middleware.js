const authMiddleware = (req, res, next) => {
  if(!req.headers.authorization){
    return res.status(401).json({ message: 'Cabeçalho de autorização ausente'})
  }

  const authorizationHeader = req.headers.authorization;

  const validHeaderRegex = new RegExp('0-9a-z', 'i');

  if(authorizationHeader.length < 12 ||
    validHeaderRegex.test(authorizationHeader)
  ){
      return res.status(401).json({ message: 'token de autenticação inválido' })
  }
  next()
}

module.exports = authMiddleware;
