import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({
    event: "Semana OmniStack 11.0",
    aluno: "Guilherme Gules",
  });
});

app.listen(3333);
