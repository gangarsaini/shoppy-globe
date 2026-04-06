import { lazy, Suspense } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Loading the Layout lazily for the faster loading
const Layout = lazy(()=>import("./components/Layout"))

// Loading the productList lazily for the faster loading
const ProductList  = lazy(()=>import("./components/ProductList"))

// Loading the productDetail lazily for the faster loading
const ProductDetail = lazy(()=>import("./components/ProductDetail"))

// Loading the Cart lazily for the faster loading
const Cart = lazy(()=>import("./components/Cart"))

// Loading the Checkout lazily for the faster loading
const Checkout = lazy(()=>import("./components/Checkout"))

// // Loading the NotFound lazily for the faster loading
const NotFound = lazy(()=>import("./components/NotFound"))


// creating router using createBrowserRouter for providing routing based on the path 
const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children :[
      {
        index :true,
        element :<ProductList/>
      },
      {
        path : "product/:id",
        element : <ProductDetail/>
      },
      {
        path : "cart",
        element : <Cart/>
      },
      {
        path : "checkout",
        element : <Checkout/>
      }
    ]
  },
  {
    path : "*",
    element : <NotFound/>
  }
])
function App() {
  return (
    // providing suspense with fallback to all the components inside router
    <Suspense fallback={<h1>Loading...</h1>}>
      {/* providing router created using RouterProvider */}
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App