import express from "express";
const router = express.Router();

import { userRegistration , userLogin } from "../controller/userController.js";

router.post("/registration", userRegistration);
router.post("/login", userLogin);

router.all("/*", () => {
  return res.status(400).send({ status: false, messaage: "Path Invalid" });
});

export default router;
