import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/main.css'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
  context: {
    auth: undefined!,
    queryClient,
  },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function InnerApp() {
  return <RouterProvider router={router} context={{}} />
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <InnerApp />
    </QueryClientProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
