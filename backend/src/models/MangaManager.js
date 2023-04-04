const AbstractManager = require("./AbstractManager");

class MangaManager extends AbstractManager {
  constructor() {
    super({ table: "manga" });
  }

  displayManga() {
    return this.database.query(
      `select idmanga, name, mangaka, editor, type, picture, state from manga join category on category.id = manga.category_id join volume on idmanga = volume.manga_idmanga join status on status.id = status_id where volume.number = 1;`
    );
  }

  displayById(idmanga) {
    return this.database.query(
      `select name, mangaka, editor, volume.id, number, picture, release_date, state from manga join volume on idmanga = volume.manga_idmanga join status on status.id = status_id where idmanga = ?;`,
      [idmanga]
    );
  }

  insert(manga) {
    return this.database.query(
      `insert into ${this.table} (name, mangaka, editor, status_idstatus, category_idcategory) values (?, ?, ?, ?, ?)`,
      [
        manga.name,
        manga.mangaka,
        manga.editor,
        manga.status_idstatus,
        manga.category_idcategory,
      ]
    );
  }

  update(manga) {
    return this.database.query(
      `update ${this.table} set name = ?, mangaka = ?, editor = ?, status_idstatus = ?, category_idcategory = ? where id = ?`,
      [
        manga.name,
        manga.mangaka,
        manga.editor,
        manga.status_idstatus,
        manga.category_idcategory,
        manga.id,
      ]
    );
  }
}

module.exports = MangaManager;
