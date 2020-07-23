let counterCall = 0;

function counter(req, res, next) {
  counterCall++;
  console.log(`Requisição número ${counterCall} efetuada`);

  return next();
}

export default counter;