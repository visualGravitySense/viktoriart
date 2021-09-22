import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1d8f44e0 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _3a1ac47c = () => interopDefault(import('..\\pages\\artstudio.vue' /* webpackChunkName: "pages/artstudio" */))
const _66fd41ef = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _c1a7e438 = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _274fbde3 = () => interopDefault(import('..\\pages\\chalenges\\index.vue' /* webpackChunkName: "pages/chalenges/index" */))
const _c148850e = () => interopDefault(import('..\\pages\\classes\\index.vue' /* webpackChunkName: "pages/classes/index" */))
const _f1d7e43a = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _165f92da = () => interopDefault(import('..\\pages\\course\\index.vue' /* webpackChunkName: "pages/course/index" */))
const _1f6a044c = () => interopDefault(import('..\\pages\\course-1.vue' /* webpackChunkName: "pages/course-1" */))
const _1f781bcd = () => interopDefault(import('..\\pages\\course-2.vue' /* webpackChunkName: "pages/course-2" */))
const _1f86334e = () => interopDefault(import('..\\pages\\course-3.vue' /* webpackChunkName: "pages/course-3" */))
const _1f944acf = () => interopDefault(import('..\\pages\\course-4.vue' /* webpackChunkName: "pages/course-4" */))
const _9994c9d8 = () => interopDefault(import('..\\pages\\creators.vue' /* webpackChunkName: "pages/creators" */))
const _e3f87dbe = () => interopDefault(import('..\\pages\\hire\\index.vue' /* webpackChunkName: "pages/hire/index" */))
const _60476775 = () => interopDefault(import('..\\pages\\job-details.vue' /* webpackChunkName: "pages/job-details" */))
const _1073f27f = () => interopDefault(import('..\\pages\\jobs\\index.vue' /* webpackChunkName: "pages/jobs/index" */))
const _14a3b019 = () => interopDefault(import('..\\pages\\market\\index.vue' /* webpackChunkName: "pages/market/index" */))
const _00cdadda = () => interopDefault(import('..\\pages\\partys.vue' /* webpackChunkName: "pages/partys" */))
const _702f62af = () => interopDefault(import('..\\pages\\prints\\index.vue' /* webpackChunkName: "pages/prints/index" */))
const _e86d27d4 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _4c9f105c = () => interopDefault(import('..\\pages\\project.vue' /* webpackChunkName: "pages/project" */))
const _f379c15e = () => interopDefault(import('..\\pages\\project-details.vue' /* webpackChunkName: "pages/project-details" */))
const _3323de26 = () => interopDefault(import('..\\pages\\service-details.vue' /* webpackChunkName: "pages/service-details" */))
const _11ac8fdf = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _214a61c9 = () => interopDefault(import('..\\pages\\stock\\index.vue' /* webpackChunkName: "pages/stock/index" */))
const _648fba83 = () => interopDefault(import('..\\pages\\uidesign\\index.vue' /* webpackChunkName: "pages/uidesign/index" */))
const _3740606f = () => interopDefault(import('..\\pages\\urm\\index.vue' /* webpackChunkName: "pages/urm/index" */))
const _b068ed8e = () => interopDefault(import('..\\pages\\vacations.vue' /* webpackChunkName: "pages/vacations" */))
const _169b67c8 = () => interopDefault(import('..\\pages\\classes\\careers.vue' /* webpackChunkName: "pages/classes/careers" */))
const _fd28cb88 = () => interopDefault(import('..\\pages\\jobs\\github\\index.vue' /* webpackChunkName: "pages/jobs/github/index" */))
const _14c51341 = () => interopDefault(import('..\\pages\\classes\\_id\\index.vue' /* webpackChunkName: "pages/classes/_id/index" */))
const _0dc311fb = () => interopDefault(import('..\\pages\\jobs\\_id\\index.vue' /* webpackChunkName: "pages/jobs/_id/index" */))
const _4ca876be = () => interopDefault(import('..\\pages\\market\\_id\\index.vue' /* webpackChunkName: "pages/market/_id/index" */))
const _88d3806a = () => interopDefault(import('..\\pages\\prints\\_id\\index.vue' /* webpackChunkName: "pages/prints/_id/index" */))
const _0a3ebe1e = () => interopDefault(import('..\\pages\\stock\\_id\\index.vue' /* webpackChunkName: "pages/stock/_id/index" */))
const _10f03855 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _1d8f44e0,
    name: "about"
  }, {
    path: "/artstudio",
    component: _3a1ac47c,
    name: "artstudio"
  }, {
    path: "/blog",
    component: _66fd41ef,
    name: "blog"
  }, {
    path: "/blog-details",
    component: _c1a7e438,
    name: "blog-details"
  }, {
    path: "/chalenges",
    component: _274fbde3,
    name: "chalenges"
  }, {
    path: "/classes",
    component: _c148850e,
    name: "classes"
  }, {
    path: "/contact",
    component: _f1d7e43a,
    name: "contact"
  }, {
    path: "/course",
    component: _165f92da,
    name: "course"
  }, {
    path: "/course-1",
    component: _1f6a044c,
    name: "course-1"
  }, {
    path: "/course-2",
    component: _1f781bcd,
    name: "course-2"
  }, {
    path: "/course-3",
    component: _1f86334e,
    name: "course-3"
  }, {
    path: "/course-4",
    component: _1f944acf,
    name: "course-4"
  }, {
    path: "/creators",
    component: _9994c9d8,
    name: "creators"
  }, {
    path: "/hire",
    component: _e3f87dbe,
    name: "hire"
  }, {
    path: "/job-details",
    component: _60476775,
    name: "job-details"
  }, {
    path: "/jobs",
    component: _1073f27f,
    name: "jobs"
  }, {
    path: "/market",
    component: _14a3b019,
    name: "market"
  }, {
    path: "/partys",
    component: _00cdadda,
    name: "partys"
  }, {
    path: "/prints",
    component: _702f62af,
    name: "prints"
  }, {
    path: "/profile",
    component: _e86d27d4,
    name: "profile"
  }, {
    path: "/project",
    component: _4c9f105c,
    name: "project"
  }, {
    path: "/project-details",
    component: _f379c15e,
    name: "project-details"
  }, {
    path: "/service-details",
    component: _3323de26,
    name: "service-details"
  }, {
    path: "/shop",
    component: _11ac8fdf,
    name: "shop"
  }, {
    path: "/stock",
    component: _214a61c9,
    name: "stock"
  }, {
    path: "/uidesign",
    component: _648fba83,
    name: "uidesign"
  }, {
    path: "/urm",
    component: _3740606f,
    name: "urm"
  }, {
    path: "/vacations",
    component: _b068ed8e,
    name: "vacations"
  }, {
    path: "/classes/careers",
    component: _169b67c8,
    name: "classes-careers"
  }, {
    path: "/jobs/github",
    component: _fd28cb88,
    name: "jobs-github"
  }, {
    path: "/classes/:id",
    component: _14c51341,
    name: "classes-id"
  }, {
    path: "/jobs/:id",
    component: _0dc311fb,
    name: "jobs-id"
  }, {
    path: "/market/:id",
    component: _4ca876be,
    name: "market-id"
  }, {
    path: "/prints/:id",
    component: _88d3806a,
    name: "prints-id"
  }, {
    path: "/stock/:id",
    component: _0a3ebe1e,
    name: "stock-id"
  }, {
    path: "/",
    component: _10f03855,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
