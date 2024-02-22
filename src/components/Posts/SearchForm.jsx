import React, { Component } from "react";
import styled from "styled-components";

export default class SearchForm extends Component {
  state = {
    query: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.handleSetSearchQuery(this.state.query);
  };
  handleChangeQuery = (e) => {
    // console.log(e.target.value);
    this.setState({ query: e.target.value });
  };
  render() {
    const { query } = this.state;
    return (
      <StyledWrapperForm>
        <StyledForm onSubmit={this.handleSubmit}>
          <input type="text" value={query} onChange={this.handleChangeQuery} />
          <button type="submit">Search</button>
        </StyledForm>
      </StyledWrapperForm>
    );
  }
}

const StyledForm = styled.form`
  display: flex;
  gap: 10px;
  input {
    border-radius: 8px;
    padding: 4px 10px;
    box-shadow: 2px 2px 4px 1px gray;
  }
`;
const StyledWrapperForm = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  background-color: teal;
`;
