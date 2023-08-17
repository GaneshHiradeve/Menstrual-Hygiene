import express from "express";
import {
  userChangepassword,
  userLogin,
  userLogout,
  userProfile,
  userProfileupate,
  userRegister,
  userprofileDelete,
} from "../controllers/userControllers.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";

const router = express.Router();

router.route("/register").post(userRegister);

router.route("/login").post(userLogin);

router.route("/logout").get(isAuthenticatedUser, userLogout);


router.route("/profile")
.get(isAuthenticatedUser, userProfile)
.put(isAuthenticatedUser, userProfileupate)
.delete(isAuthenticatedUser,userprofileDelete);

router.route("/changepassword/:id").put(isAuthenticatedUser, userChangepassword);




export default router;
