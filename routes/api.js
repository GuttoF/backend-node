const express = require("express");
const router = express.Router();

const TasksController = require("../app/controllers/api/TasksController");
const UsersController = require("../app/controllers/api/UsersController");
// Rota nova
const AgendasController = require("../app/controllers/api/AgendasController");

// Rotas das Tarefas
router.get('/tasks', TasksController.list)
router.get('/tasks/:id', TasksController.show)
router.post('/tasks', TasksController.save)
router.delete('/tasks/:id', TasksController.remove)
router.put('/tasks/:id', TasksController.update)
router.put('/tasks/:id/update-status', TasksController.updateStatus)


router.get('/users', UsersController.list)
router.post('/users/login', UsersController.login)
router.get('/users/:id', TasksController.show)
router.post('/users', UsersController.save)
router.delete('/users/:id', UsersController.remove)
// router.put('/users/:id', UsersController.update)

// Rotas da Agenda
/**
 * @swagger
 * tags:
 *   name: Agendas
 *   description: Gerenciamento de agendas de contatos
 */

/**
 * @swagger
 * /api/agendas:
 *   get:
 *     summary: Lista todas as agendas
 *     tags: [Agendas]
 *     responses:
 *       200:
 *         description: A lista de agendas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Agenda'
 */
router.get('/agendas', AgendasController.list);

/**
 * @swagger
 * /api/agendas/{id}:
 *   get:
 *     summary: Obtém uma agenda pelo ID
 *     tags: [Agendas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID da agenda
 *     responses:
 *       200:
 *         description: A agenda encontrada pelo ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Agenda'
 *       404:
 *         description: Agenda não encontrada
 */
router.get('/agendas/:id', AgendasController.show);

/**
 * @swagger
 * /api/agendas:
 *   post:
 *     summary: Cria uma nova agenda
 *     tags: [Agendas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Agenda'
 *     responses:
 *       201:
 *         description: Agenda criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Agenda'
 *       400:
 *         description: Erro ao criar a agenda
 */
router.post('/agendas', AgendasController.save);

/**
 * @swagger
 * /api/agendas/{id}:
 *   put:
 *     summary: Atualiza uma agenda pelo ID
 *     tags: [Agendas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID da agenda
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Agenda'
 *     responses:
 *       200:
 *         description: Agenda atualizada com sucesso
 *       404:
 *         description: Agenda não encontrada
 */
router.put('/agendas/:id', AgendasController.update);

/**
 * @swagger
 * /api/agendas/{id}:
 *   delete:
 *     summary: Remove uma agenda pelo ID
 *     tags: [Agendas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID da agenda
 *     responses:
 *       200:
 *         description: Agenda removida com sucesso
 *       404:
 *         description: Agenda não encontrada
 */
router.delete('/agendas/:id', AgendasController.remove);

router.get('*', function notFound(request, response) {
  return response.status(404).json({ message: 'Página não encontrada' });
});

module.exports = router;