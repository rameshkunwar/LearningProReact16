import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <ul>
    {articles.map((el, index) => (
      <li key={index}>{el.title}</li>
    ))}
  </ul>
);

const ReduxList = connect(mapStateToProps)(ConnectedList);
export default ReduxList;
