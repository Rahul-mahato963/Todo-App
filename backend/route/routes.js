import express from "express"
import {create, read, update, deleted} from "../controller/controller.js"
const router = express.Router();


router.route("/create").post(create)
router.route("/read").get(read)
router.route("/update/:id").put(update)
router.route("/deleted/:id").delete(deleted)


export default router;