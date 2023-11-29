export interface BasicRecord {
  id: number;
}

export default class DatabaseDriver<T extends BasicRecord> {
  private data: { [key: number]: T } = {};

  update(record: T) {
    this.data[record.id] = record;
  }

  get(id: number): T {
    return this.data[id];
  }

  iterate(iterator: (record: T) => void) {
    Object.keys(this.data).forEach((id) => iterator(this.data[id]));
  }
}
