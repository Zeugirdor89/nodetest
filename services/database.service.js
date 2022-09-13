const fs = require('fs');

class DataBaseService {
  path = './db.json';
  encoding = 'UTF-8';

  get() {
    try {
      return JSON.parse(fs.readFileSync(this.path, this.encoding));
    } catch (err) {
      console.log(err);
      return;
    }
  }

  set(data) {
    try {
      fs.writeFileSync(this.path, JSON.stringify(data), this.encoding);
    } catch (err) {
      console.log(err);
      return;
    }
  }
}

module.exports = new DataBaseService();
