import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should match snapshot for no expenses", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={0} expenseTotal={0} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should match snapshot for 1 expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expenseTotal={1000} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should match snapshot for 3 expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={3} expenseTotal={10009} />
  );
  expect(wrapper).toMatchSnapshot();
});
