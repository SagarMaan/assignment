import {
  validateUserName,
  validateEmailId,
  validatePassword,
} from "./regexValidation.js";

import bcrypt from "bcrypt";


//================================================    Check Inputs of Object     ==================================================//

export const validObjectInput = (body) => {
  if (Object.keys(body).lenght === 0)
    return res.status(400).send({
      status: false,
      message: "Body can't be empty give the required inputs.",
    });
  return body;
};

//================================================     Check User Name    ==========================================================//

export const validUserName = async (userName) => {
  if (!userName ){
    return res.status(400).send({
      status: false,
      message:
        "Please provide user name with suitable datatype OR it can't be empty",
    })
  };

  if (!validateUserName(userName)){
    return res.status(400).send({
      status: false,
      message: "User name should contain only alphabates.",
    })
  };

  return userName;
};

//=============================================      Check EmailId      =========================================================//

export const validEmailId = async (emailId) => {
  if (!emailId ){
    return res.status(400).send({
      status: false,
      message:
        "Please provide emailId with suitable datatype OR it can't be empty",
    })
  };

  if (!validateEmailId(emailId)){
    return res
      .status(400)
      .send({ status: false, message: "Email should be in a valid format." })
  };

  return emailId;
};

//=================================================      Password      ========================================================//

export const validPassword = (password) => {
  if (!password ){
    return res.status(400).send({
      status: false,
      message:
        "Please provide password with suitable datatype OR it can't be empty",
    })
  };

  if (!validatePassword(password)){
    return res.status(400).send({
      status: false,
      message:
        "Password should contain 8-15 alphabets with atleast one lowercase alphabates, one upper case alphabate , one numric value and a special letter.",
    })
  };

  let hashing = bcrypt.hashSync(password, 8);
  password = hashing;
  return password;
};
