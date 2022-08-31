async function Response(req, res, status, msg) {
  if (status === 200) {
    res.json({
      status: status,
      data: msg,
    });
  } else {
    res.json({
      status: status,
      err: msg,
    });
  }
}

module.exports = Response;
