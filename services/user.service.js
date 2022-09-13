'use strict';

const fs = require('fs');
const dbSrv = require('./database.service');

class UserService {
  constructor() {}

  getAll() {
    try {
      const db = dbSrv.get();
      return db.user;
    } catch (err) {
      console.log(err);
      return;
    }
  }

  getOne(id) {
    try {
      const db = dbSrv.get();
      return db.user.filter((user) => user.id === id);
    } catch (err) {
      console.log(err);
      return;
    }
  }

  create(user) {
    try {
      const db = dbSrv.get();
      db.user = {
        id: user.id,
        email: user.email,
        password: user.password,
      };
      dbSrv.set(db);
      return true;
    } catch (err) {
      console.log(err);
      return;
    }
  }

  update(user) {
    try {
      const db = dbSrv.get();
      const idx = db.user.findIndex((__user) => user.id === __user.id);
      db.user[idx].email = user.email;
      db.user[idx].password = user.password;
      dbSrv.set(db);
      return true;
    } catch (err) {
      console.log(err);
      return;
    }
  }

  delete(id) {
    try {
      const db = dbSrv.get();
      const idx = db.user.findIndex((__user) => id === __user.id);
      dp.user.splice(idx, 1);
      dbSrv.set(db);
    } catch (err) {
      console.log(err);
      return;
    }
  }
}

module.exports = new UserService();
