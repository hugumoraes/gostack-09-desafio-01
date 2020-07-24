let counterCall = 0;

function counter(req, res, next) {
  counterCall++;
  console.log(`API call number: ${counterCall}`);

  return next();
}

export default counter;