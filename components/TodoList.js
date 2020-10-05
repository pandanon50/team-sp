import React from "react";
import { Button, Card, List } from "antd";
import { StopOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const TodoList = ({ header, data }) => {
  return (
    <List
      style={{ marginBottom: 20 }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="large"
      header={<div style={{ fontSize: 30 }}>{header}</div>}
      loadMore={
        <div style={{ textAlign: "center", margin: "10px 0" }}>
          <Button>더보기</Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: 20 }}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.thing} />
          </Card>
        </List.Item>
      )}
    />
  );
};

TodoList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default TodoList;
