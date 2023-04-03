const AbstractManager = require("./AbstractManager");

class VolumeManager extends AbstractManager {
  constructor() {
    super({ table: "volume" });
  }

  insert(volume) {
    return this.database.query(
      `insert into ${this.table} (number, release_date, pages, picture, read, synopsis, manga_idmanga) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        volume.number,
        volume.release_date,
        volume.pages,
        volume.picture,
        volume.read,
        volume.synopsis,
        volume.manga_idmanga,
      ]
    );
  }

  update(volume) {
    return this.database.query(
      `update ${this.table} set number = ?, release_date = ?, pages = ?, picture = ?, read = ?, synopsis = ?, manga_idmanga = ? where id = ?`,
      [
        volume.number,
        volume.release_date,
        volume.pages,
        volume.picture,
        volume.read,
        volume.synopsis,
        volume.manga_idmanga,
        volume.id,
      ]
    );
  }
}

module.exports = VolumeManager;
