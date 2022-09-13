'use strict';

const userSrv = require('../services/user.service');

class UserController {
  constructor() {}

  getAll(req, res) {
    try {
      const list = userSrv.getAll();
      if (list.length) {
        res
          .status(200)
          .send({ status: 200, message: 'Usuarios encontrados', data: list });
      } else {
        res
          .status(200)
          .send({ status: 200, message: 'Usuarios no encontrados', data: [] });
      }
    } catch (err) {
      console.error(err);
      res
        .status(200)
        .send({ status: 500, message: 'Error interno del servidor' });
    }
  }

  getOne(req, res) {
    try {
      const list = userSrv.getOne(req.params.id);
      if (list.length) {
        res
          .status(200)
          .send({ status: 200, message: 'Usuarios encontrados', data: list });
      } else {
        res
          .status(200)
          .send({ status: 200, message: 'Usuarios no encontrados', data: [] });
      }
    } catch (err) {
      console.error(err);
      res
        .status(200)
        .send({ status: 500, message: 'Error interno del servidor' });
    }
  }

  create(req, res) {
    try {
      const exist = userSrv.getOne(req.body.id);
      if (exist.length) {
        res.status(200).send({ status: 500, message: 'El usuario ya existe' });
        return;
      }

      const result = userSrv.create(req.body);
      if (result) {
        res
          .status(200)
          .send({ status: 200, message: 'Usuario creado con éxito' });
      } else {
        res
          .status(200)
          .send({ status: 500, message: 'Error al crear el usuario' });
      }
    } catch (err) {
      console.error(err);
      res
        .status(200)
        .send({ status: 500, message: 'Error interno del servidor' });
    }
  }

  update(req, res) {
    try {
      const exist = userSrv.getOne(req.body.id);
      if (!exist.length) {
        res.status(200).send({ status: 500, message: 'El usuario no existe' });
        return;
      }

      const result = userSrv.update(req.body);
      if (result) {
        res
          .status(200)
          .send({ status: 200, message: 'Usuario actualizado con éxito' });
      } else {
        res
          .status(200)
          .send({ status: 500, message: 'Error al actualizar el usuario' });
      }
    } catch (err) {
      console.error(err);
      res
        .status(200)
        .send({ status: 500, message: 'Error interno del servidor' });
    }
  }

  delete(req, res) {
    try {
      const exist = userSrv.getOne(req.params.id);
      if (!exist.length) {
        res.status(200).send({ status: 500, message: 'El usuario no existe' });
        return;
      }

      const result = userSrv.delete(req.params.id);
      if (result) {
        res
          .status(200)
          .send({ status: 200, message: 'Usuario eliminado con éxito' });
      } else {
        res
          .status(200)
          .send({ status: 500, message: 'Error al eliminar el usuario' });
      }
    } catch (err) {
      console.error(err);
      res
        .status(200)
        .send({ status: 500, message: 'Error interno del servidor' });
    }
  }
}

module.exports = new UserController();
