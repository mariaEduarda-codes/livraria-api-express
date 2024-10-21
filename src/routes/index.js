import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status.send("Curso de Node.js"));

    app.use(express.json(), livros, autores);
};

export default routes;