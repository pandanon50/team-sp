import React, { useState, useCallback } from "react";
import AppLayout from "../components/AppLayout";
import { Calendar } from "antd";
import styled from "styled-components";
import moment from "moment";

const MonthDiv = styled.div`
  border: 1px solid #f0f0f0;
  border-radius: 2px;
`;

const month = () => {
  const [value, setValue] = useState(moment());

  const onPanelChange = useCallback((value) => {
    setValue(value);
  }, []);

  const onSelectDate = useCallback((value) => {
    setValue(value);
  }, []);
  return (
    <AppLayout>
      <MonthDiv>
        <Calendar
          value={value}
          onSelect={onSelectDate}
          fullscreen={false}
          onPanelChange={onPanelChange}
        />
      </MonthDiv>
      <div>{value && value.format("YYYYMMDD")}</div>
    </AppLayout>
  );
};

export default month;
