const AbstractManager = require("./AbstractManager");

class MangaManager extends AbstractManager {
  constructor() {
    super({ table: "manga" });
  }

  displayManga() {
    return this.database.query(
      `select name, type, picture from manga join category on idcategory = manga.category_idcategory join volume on idmanga = volume.manga_idmanga where volume.number = 1;`
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
