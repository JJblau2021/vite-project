import React, { useState } from "react";
import { Form, Button } from "@douyinfe/semi-ui";
import { Link } from "react-router-dom";

import { sleep } from "@/utils";

import "./index.less";

const FormInput = Form.Input;
const FormSlot = Form.Slot;

const LoginOrRegisterForm = ({ type }) => {
  const [formApi, setFormApi] = useState({});
  const [loading, setLoading] = useState(!1);

  const onLoginSubmit = (values) => {
    console.log("login submit");
    console.table(values);
  };
  const onRegisterSubmit = (values) => {
    console.log("register submit");
    console.table(values);
  };
  const onSubmit = async (v) => {
    setLoading(!0);
    type === "login" ? onLoginSubmit(v) : onRegisterSubmit(v);
    await sleep(3000);
    setLoading(!1);
  };

  const checkStr = (field = "") => {
    let reg;
    switch (field) {
      case "email":
        reg = /^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
        break;
      case "username":
        reg = /^\w+$/;
        break;
      case "password":
        reg = /^\w+$/;
        break;
      default:
        break;
    }
    return (_, str) => {
      if (reg) return reg.test(str);
      return !0;
    };
  };

  const checkPassword = (val = "") => {
    const password = val;
    // console.clear();
    // console.log("1", "password");
    // console.table(values);
    if (password === undefined || password.length === 0) return "required error";
    if (type === "register") {
      formApi.validate(["password2"]);
      if (password.length < 8 || password.length > 16) return "length: 8 ~ 16";
      if (!checkStr("password")) {
        return "password err";
      }
    }
  };

  const checkPassword2 = (val, { password }) => {
    if (password !== val) return "Inconsistent password input";
    return "";
  };

  const itemList = [
    {
      field: "email",
      placeholder: "email",
      rules: [
        { required: !0, message: "required error" },
        { validator: checkStr("email"), message: "not email" },
      ],
      stopValidateWithError: !0,
    },
    {
      field: "username",
      placeholder: "username",
      rules: [
        { validator: checkStr("username"), message: "not username" },
        { required: !0, message: "required error" },
      ],
      stopValidateWithError: !0,
    },
    {
      field: "password",
      placeholder: "password",
      mode: "password",
      validate: checkPassword,
    },
    {
      field: "password2",
      placeholder: "password again",
      mode: "password",
      validate: checkPassword2,
    },
  ]
    .map((item) => ({
      ...item,
      noLabel: !0,
      size: "large",
      fieldClassName: "formItem",
      className: "formInput",
    }))
    .filter(
      (item) =>
        type === "register" ||
        (type === "login" && item.field !== "email" && item.field !== "password2")
    );

  const footer = {
    login: {
      text: "Don't have account? Now ",
      to: "register",
    },
    register: {
      text: "Have account? Now ",
      to: "login",
    },
  };
  const FormFooter = ({ btnText = "", text = "", to = "" }) => {
    return (
      <>
        <FormSlot className="loginSlot">
          {text}
          <Link className="toRegister" to={`/${to}`} onClick={() => formApi.reset()}>
            {to}
          </Link>
          !
        </FormSlot>
        <FormSlot className="loginSlot">
          <Button htmlType="submit" size="large" className="loginSubmitBtn" loading={loading}>
            {btnText}
          </Button>
        </FormSlot>
      </>
    );
  };
  return (
    <Form layout="vertical" onSubmit={onSubmit} getFormApi={(apiObj) => setFormApi(apiObj)}>
      {itemList.map((item) => (
        <FormInput {...item} key={item.field} />
      ))}
      <FormFooter btnText={type.toUpperCase()} text={footer[type].text} to={footer[type].to} />
    </Form>
  );
};

export default LoginOrRegisterForm;
