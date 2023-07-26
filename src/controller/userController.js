import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mailer from "nodemailer";

import userModel from "../model/userModel.js";

import {
  validObjectInput,
  validUserName,
  validEmailId,
  validPassword,
} from "../util/validation/functionValidation.js";

//=============================================  User Login =========================================//

export const userRegistration = async function (req, res) {
  try {
    let body = req.body;
    body = validObjectInput(body);

    let { userName, emailId, password } = body;

    userName = validUserName(userName);
    emailId = validEmailId(emailId);
    password = validPassword(password);

    let checkDuplicate = await userModel.findOne({
      $and: [{ emailId: emailId }, { userName: userName }],
    });

    if (checkDuplicate.emailId === emailId) {
      return res.status(400).send({
        status: false,
        message: "This email ID is already registered.",
      });
    } else if (checkDuplicate.userName === userName) {
      return res.status(400).send({
        status: false,
        message: "This user name is already registered.",
      });
    } else
      (checkDuplicate.emailId !== emailId) &
        (checkDuplicate.userName !== userName);
    {
      let userRegister = await userModel.create(body);

      return res.status(201).send({
        status: true,
        message: "User login successfully.",
        data: userRegister,
      });
    }     
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

export const userLogin = async function (req, res) {
  try {
    let body = req.body;
    body = validObjectInput(body);

    let { emailId, password } = body;

    emailId = validEmailId(emailId);
    password = validPassword(password);

    let checkEmailId = await userModel.findOne({ emailId: emailId });
    if (!checkEmailId) {
      return res
        .status(404)
        .send({
          status: false,
          message: "User is not registered with this emailId.",
        });
    }

    return res
      .status(201)
      .send({
        status: true,
        message: " User succcessfully Login.",
        data: checkEmailId,
      });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};
