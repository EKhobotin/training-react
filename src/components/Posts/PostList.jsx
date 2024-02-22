import React, { useContext } from "react";
import { PostCard } from "./PostCard";
import styled from "styled-components";
import { MyContext } from "../..";
import { UserContext } from "../../context/Context.Provider";

export const PostList = ({ posts, user }) => {
  const context = useContext(MyContext);
  const userContext = useContext(UserContext);
  return (
    <StyledSection>
      <h1>Posts</h1>
      <h2>{user.name}</h2>
      <h2>{context.age}</h2>
      <h2>{context.email}</h2>
      <h2>{context.sayHello("Petro")}</h2>
      <ul>
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </ul>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 20px 10px;
  h1 {
    text-align: center;
    font-weight: 700;
    text-decoration: underline;
    font-size: 2.5rem;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
    max-width: 80%;
    padding: 20px 0;
    margin: 0 auto;
    gap: 15px;
    text-align: center;
  }
`;
