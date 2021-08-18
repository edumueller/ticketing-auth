import express from "express";

const router = express.Router();

router.get("/get/users/currentuser", (req, res) => {});

export { router as currentUserRouter };
