const express = require("express");

const router = express.Router();

const mangaControllers = require("./controllers/mangaControllers");

router.get("/mangas", mangaControllers.browse);
router.get("/mangas/:id", mangaControllers.read);
router.put("/mangas/:id", mangaControllers.edit);
router.post("/mangas", mangaControllers.add);
router.delete("/mangas/:id", mangaControllers.destroy);

const volumeControllers = require("./controllers/volumeControllers");

router.get("/volumes", volumeControllers.browse);
router.get("/volumes/:id", volumeControllers.read);
router.put("/volumes/:id", volumeControllers.edit);
router.post("/volumes", volumeControllers.add);
router.delete("/volumes/:id", volumeControllers.destroy);

const userControllers = require("./controllers/userControllers");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.post("/users", userControllers.add);
router.delete("/users/:id", userControllers.destroy);

router.post("/login", userControllers.login);

module.exports = router;
