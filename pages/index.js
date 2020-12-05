import React, { useState, useEffect } from "react";
import AppLayout from "../components/AppLayout.js";
import TodoItem from "../components/TodoItem";
import TodoForm from "../components/TodoForm";
import axios from "axios";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row } from "antd";
import { END } from "redux-saga";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import { LOAD_POST_REQUEST } from "../reducers/post";
import wrapper from "../store/configureStore";

const TodosWrapper = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
  width: 100%;
`;

const Todo = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const { me } = useSelector((state) => state.user);
  const {
    todos,
    addPostLoading,
    loadPostDone,
    addPostDone,
    checkDone,
  } = useSelector((state) => state.post);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  useEffect(() => {
    dispatch({
      type: LOAD_POST_REQUEST,
    });
  }, [loadPostDone, addPostDone]);

  return (
    <AppLayout>
      <div style={{ marginBottom: "20px" }}>
        <TodoForm />
      </div>
      <TodosWrapper className="todosWrapper">
        <Row gutter={6}>
          {todos &&
            todos.map((post) => (
              <Col xs={24} md={12} lg={8} key={post.id}>
                <TodoItem key={post.id} post={post} month={false} />
              </Col>
            ))}
        </Row>
      </TodosWrapper>
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";

    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
      type: LOAD_POST_REQUEST,
    });

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Todo;
