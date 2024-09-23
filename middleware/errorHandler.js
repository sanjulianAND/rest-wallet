module.exports = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    cod_error: 500,
    message_error: "Ha ocurrido un error en el servidor.",
    data: err.message,
  });
};
