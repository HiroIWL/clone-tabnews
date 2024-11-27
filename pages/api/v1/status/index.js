function status(request, response) {
  response.status(200).json({ chave: "curso.dev é demais!" });
}

export default status;
