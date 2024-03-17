// import React from 'react';
// import { connect } from 'react-redux';

// import {getListPost as getListPostAction} from './redux/action';

// class App extends React.Component {
//   render() {
//     const {posts, load} = this.props.posts;

//     if(load) {
//       return (
//         <h1>Data is loading from API...</h1>
//       )
//     }
//     return (
//       <>
//         <h1>List Post</h1>
//         <table>
//           <tbody>
//             <tr>
//               <th>Id</th>
//               <th>Title</th>
//             </tr>
//             {
//               posts.map((post) => (
//                 <tr>
//                   <th>{post.id}</th>
//                   <th>{post.title}</th>
//                 </tr>
//               ))
//             }
//           </tbody>
//         </table>
//       </>
//     );
//   }

//   componentDidMount() {
//     this.props.getListPost();
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     posts: state.posts,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getListPost: (params) => dispatch(getListPostAction(params)),
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);



import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getListPost as getListPostAction } from './redux/action';

const App = ({ posts: { posts, load }, getListPost }) => {
  useEffect(() => {
    getListPost();
  }, [getListPost]);

  if (load) {
    return <h1>Data is loading from API...</h1>;
  }

  return (
    <>
      <h1>List Post</h1>
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Title</th>
          </tr>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  getListPost: (params) => dispatch(getListPostAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);