import axios from "axios";

export default {
  baseUrl: "http://localhost:8080/wp-json/wp/v2/",

	getPosts(type = 'posts') {
    return new Promise((resolve, reject) => {
      axios.defaults.baseURL = this.baseUrl;
      axios.get(type).then(response => {
        const data = [...response.data];
        //console.log(data);
        if (response.status === 200 && response.data.length > 0) {
          // const filtered = {
          //   total: response.headers["x-wp-total"],
          //   totalPages: response.headers["x-wp-totalpages"],
          //   data: data.map(item => ({
          //     id: item.id,
          //     title: item.title.rendered,
          //     content: item.content.rendered,
          //     excerpt: item.excerpt.rendered,
          //     slug: item.slug
          //   }))
          // };
          resolve(data);
        } else {
          reject(response);
        }
      });
    });
  },

	getPost(slug) {
    return new Promise((resolve, reject) => {
      axios.defaults.baseURL = this.baseUrl;
      axios.get(`posts?slug=${slug}`).then(response => {
        const data = response.data;
        if (response.status === 200 && response.data.length > 0) {
          resolve(data);
        } else {
          reject(response.data);
        }
      });
    });
	},

  getPage(slug) {
    return new Promise((resolve, reject) => {
      axios.defaults.baseURL = this.baseUrl;
      axios.get(`pages?slug=${slug}`)
        .then(response => {
          const data = response.data;
          if (response.status === 200 && response.data.length > 0) {
            resolve(data);
          } else {
            resolve({statusCode: 404, message: 'Post not found' })
          }
        })
        .catch(err => {
          console.log(err);
          resolve(err);
        });
    });
  },

  getSingle(type, slug) {
    return new Promise((resolve, reject) => {
      axios.defaults.baseURL = this.baseUrl;
      axios.get(`${type}?slug=${slug}`)
        .then(response => {
          const data = response.data;
          if (response.status === 200 && response.data.length > 0) {
            resolve(data);
          } else {
            resolve({statusCode: 404, message: 'Post not found' })
          }
        })
        .catch(err => {
          console.log(err);
          resolve(err);
        });
    });
  },

  getMainMenu() {
    return new Promise((resolve, reject) => {
      axios.get(`http://localhost:8080/wp-json/wp-api-menus/v2/menus/8`).then(response => {
        const data = response.data;
        if (response.status === 200 && response.data.items.length > 0) {
          resolve(response.data.items);
        } else {
          reject(response.data);
        }
      });
    });
  }

}