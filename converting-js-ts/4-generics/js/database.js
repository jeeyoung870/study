class DatabaseDriver {
  constructor() {
    this.data = {};
  }

  update(record) {
    this.data[record.id] = record;
  }

  get(id) {
    return this.data[id];
  }

  iterate(iterator) {
    Object.keys(this.data).forEach((id) => iterator(this.data[id]));
  }
}

module.exports = DatabaseDriver;
