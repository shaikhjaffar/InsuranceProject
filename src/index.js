// ** React Imports
// import { Suspense, lazy } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

// ** Redux Imports
// import { store } from "./redux/store"
// import { Provider } from "react-redux"

// ** ThemeColors Context

// import { ThemeContext } from "./utility/context/ThemeColors"

// ** ThemeConfig
// import themeConfig from "./configs/themeConfig"

// ** Toast
// import { Toaster } from "react-hot-toast"

// ** Spinner (Splash Screen)
// ** Ripple Button
import  "./@core/components/ripple-button"

// ** PrismJS
import "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/components/prism-jsx.min"
// ** React Perfect Scrollbar
import "react-perfect-scrollbar/dist/css/styles.css"
// ** React Hot Toast Styles
import "@styles/react/libs/react-hot-toasts/react-hot-toasts.scss"
// ** Core styl
import "./@core/assets/fonts/feather/iconfont.css"
import "./@core/scss/core.scss"
import "./assets/scss/style.scss"
// ** Service Worker
import * as serviceWorker from "./serviceWorker"
// ** Lazy load app
import Show from "./views/landing1"
import Hide from './views/landing2'
import ScrollToTop from "./scroltop"
// import NavigateButton from "./@core/components/navigateButton"
// import Ball from './@core/components/ball/index'
const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <BrowserRouter>
          {/* <Ball/> */}
        <Hide/>
        <Show/>
  </BrowserRouter>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
