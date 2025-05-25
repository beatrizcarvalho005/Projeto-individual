var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

// router.get("/ultimas/:idAquario", function (req, res) {
//     medidaController.buscarUltimasMedidas(req, res);
// });

// router.get("/tempo-real/:idAquario", function (req, res) {
//     medidaController.buscarMedidasEmTempoReal(req, res);
// })


router.get("/ultimas/:id_usuario", function (req, res) {
    medidaController.buscarPontuacao(req, res);
});

router.get("/totalTentativas/:id_usuario", function (req, res) {
    medidaController.buscarTotalTentativas(req, res);
});

router.get("/grafico", function (req, res) {
    medidaController.grafico(req, res);
});



module.exports = router;