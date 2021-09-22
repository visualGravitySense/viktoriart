import axios from 'axios'

export const state = () => ({
  postsLoaded: [],
  // itemsLoaded: []
  // token: null
})

export const mutations = {
  setPosts (state, blogs) {
    state.postsLoaded = blogs
  },

  // setStock (state, items) {
  //     // console.log(items)
  //   state.itemsLoaded = items
  //   },

  // addPost (state, blog) {
  //   // console.log(blog)
  //   state.postsLoaded.push(blog)
  // },

  // editPost ({commit, state}, post) {
  //   // return axios.put(`http://localhost:1337/blogs/${post.id}?auth=${state.token}`, post)
  //   return axios.put(`http://localhost:1337/blogs/${post.id}`, post)
  //     .then(res => {
  //       commit('editPost', post)
  //     })
  //     .catch(e => console.log(e))
  // },
  // setToken (state) {
  //   state.token = token
  // },
  // destroyToken (state) {
  //   state.token = null
  // }
}

export const actions = {

  nuxtServerInit ({commit}, contex) {
    return axios.get('http://localhost:1337/articles')
      .then(res => {
        // console.log(res)
        // Resolve problem with post id on Firebase backend
        const postsArray = []
        for (let key in res.data) {
          postsArray.push( { ...res.data[key] } )
        }
        // Res
        commit('setPosts', postsArray)
      })
      .catch(e => console.log(e))
  },

  // >> >> >> << << <<
  // Eksperiment With Add Stock
  // addStock ({commit}, items) {
    // console.log(blog)
    // console.log('Hello STORE!!! - Add Post script worked from STORE!!!')
    // return axios.get('http://localhost:1337/articles')
    //   .then(res => {
    //     console.log(res)
    //     const stockArray = []
    //     for (let key in res.data) {
    //       stockArray.push( { ...res.data[key] } )
    //     }
        // Res
  //       commit('setStock', stockArray)
  //     })
  //     .catch(e => console.log(e))
  // },


  // addPost ({commit}, blog) {
  //   console.log(blog)
  //   // console.log('Hello STORE!!! - Add Post script worked from STORE!!!')
  //   return axios.post('http://localhost:1337/jobs', blog)
  //     .then(res => {
  //       commit('addPost', blog)
  //     })
  //     .catch(e => console.log(e))
  //
  // }

    // new version of user login from strapi documentation
    // async authUser ({commit}, authData) {
    //   axios
    //     .post('http://localhost:1337/auth/local', {
    //       identifier: authData.email,
    //       password: authData.password,
    //     })
    //     .then(response => {
    //       // Handle success.
    //       console.log('Well done!');
    //       console.log('User profile', response.data.user);
    //       console.log('User token', response.data.jwt);
    //     })
    //     .catch(error => {
    //       // Handle error.
    //       console.log('An error occurred:', error.response);
    //     });
    // },

    // logoutUser ({commit}) {
    //   commit('destroyToken')
    // },

  // editPost ({commit, state}, post) {
  //   return axios.put(`http://localhost:1337/blogs/${post.id}`, post)
  //     // return axios.put(`http://localhost:1337/blogs/${post.id}?auth=${state.token}`, post)
  //     .then(res => {
  //       commit('editPost', post)
  //     })
  //     .catch(e => console.log(e))
  // },


}

export const getters = {
  getPostsLoaded (state) {
    return state.postsLoaded
  }
}
