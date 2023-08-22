const db = require("../models");
const Users = db.users;

exports.create = (req, res) => {
  console.log("req", req.body);
  if (!req.body.name) {
    res.status(400).send({ message: "¡El contenido no puede estar vacío!" });
    return;
  }

  const users = new Users({
    name: req.body.name,
    position: req.body.position,
    email: req.body.email,
  });

  users
    .save(users)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocurrió algún error al crear el usuario.",
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  Users.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Se produjo un error al recuperar los usuarios.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Users.findById(id)
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: "No hay información para el usuario con id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error al recuperar el usuario con id" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "¡Los datos a actualizar no pueden estar vacíos!",
    });
  }

  const id = req.params.id;

  Users.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `No se puede actualizar el usuario con id =${id}.`,
        });
      } else res.send({ message: "El usuario se actualizó con éxito!" });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error al actualizar el usuario con id" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Users.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `No se puede eliminar el usuario con id=${id}.`,
        });
      } else {
        res.send({
          message: "El usuario se eliminó con éxito!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error al eliminar el usuario con id" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Users.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Usuarios se eliminaron con éxito!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Se produjo un error al eliminar todos los usuarios.",
      });
    });
};
