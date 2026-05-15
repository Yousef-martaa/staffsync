// filename: server/routes/task.routes.js

import express from "express";

const router = express.Router();

/*
Basic placeholder routes for tasks.

This file currently only prevents server crashes by providing
a valid router export. Real endpoints will be implemented later.
*/

router.get("/", (req, res) => {
	res.send("Task route is working");
});

export default router;
