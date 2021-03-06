const express = require('express');
const UsuarioController = require('../controllers/usuarioController.js');
const ProdutoController = require('../controllers/produtoController.js');
const PedidoController = require('../controllers/pedidoController.js');
const ItemPedidoController = require('../controllers/itemPedidoController.js');

const router = express.Router();

router.post('/usuarios', UsuarioController.Insert);
router.get('/usuarios', UsuarioController.SelectAll);
router.get('/usuarios/:id', UsuarioController.SelectDetail);
router.put('/usuarios/:id', UsuarioController.Update);
router.delete('/usuarios/:id', UsuarioController.Delete);

router.post('/produtos', ProdutoController.Insert);
router.get('/produtos', ProdutoController.SelectAll);
router.get('/produtos/:id', ProdutoController.SelectDetail);
router.put('/produtos/:id', ProdutoController.Update);
router.delete('/produtos/:id', ProdutoController.Delete);

router.post('/pedidos', PedidoController.Insert);
router.get('/pedidos', PedidoController.SelectAll);
router.get('/pedidos/:id', PedidoController.SelectDetail);
router.put('/pedidos/:id', PedidoController.Update);
router.delete('/pedidos/:id', PedidoController.Delete);

router.post('/itempedidos', ItemPedidoController.Insert);
//router.get('/itempedidos', ItemPedidoController.SelectAll);
router.get('/itempedidos/:id', ItemPedidoController.SelectAll);
router.put('/itempedidos/:id', ItemPedidoController.Update);
router.delete('/itempedidos/:id', ItemPedidoController.Delete);

module.exports = router;

