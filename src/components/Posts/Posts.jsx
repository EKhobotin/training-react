import React, {
  Component,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import SearchForm from "./SearchForm";
import { PostList } from "./PostList";
import styled from "styled-components";
import { fetchPosts, fetchPostsByQuery } from "../../services/api";
import { Comment } from "react-loader-spinner";
import { UserContext } from "../../context/Context.Provider";

export const Posts = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erorr, setErorr] = useState(null);
  const [skip, setSkip] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalPosts, setTotalPosts] = useState(null);
  const { userName, logout } = useContext(UserContext);
  console.log(userName);
  const getData = useCallback(async () => {
    try {
      setLoading(true);
      setErorr(null);
      const { posts, total } = searchQuery
        ? await fetchPosts({ skip })
        : await fetchPostsByQuery({
            skip,
            q: searchQuery,
          });
      setPosts((prevState) => [...prevState, ...posts]);
      setTotalPosts(total);
    } catch (error) {
      setErorr(error.message);
    } finally {
      setLoading(false);
    }
  }, [searchQuery, skip]);

  useEffect(() => {
    getData();
  }, [getData, searchQuery, skip]);

  const handleLoadMore = () => {
    // this.setState((prevState) => ({ skip: prevState.skip + 4 }));
    setSkip((prevState) => prevState + 4);
  };
  const handleSetSearchQuery = (query) => {
    // this.setState({ searchQuery: query, posts: [], skip: 0 });
    setSearchQuery(query);
    setPosts([]);
    setSkip(0);
  };

  return (
    <div>
      <h1>{userName}</h1>
      <button onClick={logout}>Exit</button>
      <SearchForm handleSetSearchQuery={handleSetSearchQuery} />
      <PostList posts={posts} user={user} />
      {loading && !posts.length && (
        <div
          style={{
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Comment
            visible={true}
            height="180"
            width="180"
            ariaLabel="comment-loading"
            wrapperStyle={{}}
            wrapperClass="comment-wrapper"
            color="#fff"
            backgroundColor="#F4442E"
          />
        </div>
      )}
      {posts.length && posts.length < totalPosts ? (
        <StyledBtn onClick={handleLoadMore}>
          {loading ? "LOADING" : "Load more"}
        </StyledBtn>
      ) : null}
    </div>
  );
};

// export class Posts extends Component {
//   state = {
//     posts: [],
//     loading: false,
//     erorr: null,
//     skip: 0,
//     searchQuery: "",
//     totalPosts: null,
//   };
//   async componentDidMount() {
//     try {
//       this.setState({ loading: true });
//       const { posts, total } = await fetchPosts();
//       this.setState({ posts, totalPosts: total });
//     } catch (error) {
//       console.log("error.message");
//     } finally {
//       this.setState({ loading: false });
//     }
//   }

//   async componentDidUpdate(_, prevState) {
//     if (!this.state.searchQuery && prevState.skip !== this.state.skip) {
//       try {
//         this.setState({ loading: true });
//         const { posts, total } = await fetchPosts({ skip: this.state.skip });
//         this.setState((prevState) => ({
//           posts: [...prevState.posts, ...posts],
//           totalPosts: total,
//         }));
//       } catch (error) {
//         console.log("error.message");
//       } finally {
//         this.setState({ loading: false });
//       }
//     }
//     if (
//       (this.state.searchQuery &&
//         prevState.searchQuery !== this.state.searchQuery) ||
//       (this.state.searchQuery && prevState.skip !== this.state.skip)
//     ) {
//       try {
//         this.setState({ loading: true });
//         const { posts, total } = await fetchPostsByQuery({
//           skip: this.state.skip,
//           q: this.state.searchQuery,
//         });
//         this.setState((prevState) => ({
//           posts: [...prevState.posts, ...posts],
//           totalPosts: total,
//         }));
//       } catch (error) {
//         console.log("error.message");
//       } finally {
//         this.setState({ loading: false });
//       }
//     }
//   }
//   handleLoadMore = () => {
//     this.setState((prevState) => ({ skip: prevState.skip + 4 }));
//   };
//   handleSetSearchQuery = (query) => {
//     this.setState({ searchQuery: query, posts: [], skip: 0 });
//   };

//   render() {
//     const { posts, totalPosts, loading } = this.state;
//     return (
//       <div>
//         <SearchForm handleSetSearchQuery={this.handleSetSearchQuery} />
//         <PostList posts={posts} />
//         {loading && !posts.length && (
//           <div
//             style={{
//               margin: "0 auto",
//               display: "flex",
//               justifyContent: "center",
//             }}
//           >
//             <Comment
//               visible={true}
//               height="180"
//               width="180"
//               ariaLabel="comment-loading"
//               wrapperStyle={{}}
//               wrapperClass="comment-wrapper"
//               color="#fff"
//               backgroundColor="#F4442E"
//             />
//           </div>
//         )}
//         {posts.length && posts.length < totalPosts ? (
//           <StyledBtn onClick={this.handleLoadMore}>
//             {loading ? "LOADING" : "Load more"}
//           </StyledBtn>
//         ) : null}
//       </div>
//     );
//   }
// }

const StyledBtn = styled.button`
  margin: 40px auto;
  font-size: 1.5rem;
  padding: 4px 12px;
  display: block;
  border: none;
  box-shadow: 2px 2px 4px 1px black;
  border-radius: 8px;
  background: teal;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background: #006060;
  }
`;
