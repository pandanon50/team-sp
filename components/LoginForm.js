import React, { useState, useCallback } from "react";
import { Form, Input, Button } from "antd";
//import Link from "next/link";
import styled from "styled-components";
//import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { loginAction } from "../reducers/user";
const SubmitWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
  background-color: white;
`;

const LoginForm = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    dispatch(loginAction({ id, password }));
    //setIsLoggedIn(true);
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">패스워드</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <SubmitWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
      </SubmitWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
