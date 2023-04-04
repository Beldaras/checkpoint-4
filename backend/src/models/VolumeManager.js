const AbstractManager = require("./AbstractManager");

class VolumeManager extends AbstractManager {
  constructor() {
    super({ table: "volume" });
  }

  displayById(id) {
    return this.database.query(
      `SELECT number, DATE_FORMAT(release_date, "%d/%m/%Y") as parution, pages, picture, volume.read, synopsis, name FROM volume join manga on idmanga = manga_idmanga where id = ?;`,
      [id]
    );
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
      `update ${this.table} set \`read\` = ? where id = ?`,
      [volume.read, volume.id]
    );
  }
}

module.exports = VolumeManager;
