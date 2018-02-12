import promise from "../promises";

// export const getPost = ({ commit, state }, slug) => {
//   return new Promise((resolve, reject) => {
//     promise.getPost(slug).then(
//       response => {
//         commit("POST", response);
//         resolve(response);
//       },
//       response => {
//         reject(response);
//       }
//     );
//   });
// };

// export const getPosts = ({ commit, state }) => {
//   return new Promise((resolve, reject) => {
//     promise.getPosts().then(
//       response => {
//         commit("POSTS", response);
//         resolve(response);
//       },
//       response => {
//         reject(response);
//       }
//     );
//   });
// };

export const getMainMenu = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    promise.getMainMenu().then(
      response => {
        commit("MAINMENU", response);
        resolve(response);
      },
      response => {
        reject(response);
      }
    );
  });
};