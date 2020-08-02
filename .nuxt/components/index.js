export { default as Logo } from '../../components/Logo.vue'
export { default as AppLogin } from '../../components/login/AppLogin.vue'
export { default as AppFooter } from '../../components/layouts/AppFooter.vue'
export { default as AppHeader } from '../../components/layouts/AppHeader.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo'}" */).then(c => c.default || c)
export const LazyAppLogin = import('../../components/login/AppLogin.vue' /* webpackChunkName: "components/login/AppLogin'}" */).then(c => c.default || c)
export const LazyAppFooter = import('../../components/layouts/AppFooter.vue' /* webpackChunkName: "components/layouts/AppFooter'}" */).then(c => c.default || c)
export const LazyAppHeader = import('../../components/layouts/AppHeader.vue' /* webpackChunkName: "components/layouts/AppHeader'}" */).then(c => c.default || c)
