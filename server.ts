// import express from 'express'
// import next from 'next'
// import { createProxyMiddleware } from 'http-proxy-middleware'
export const s = 'sdfsdfsd'
// const port = process.env.PORT || 3000
// const dev = process.env.NODE_ENV !== 'production'

// const app = next({ dev })

// const handle = app.getRequestHandler()

// const apiPaths = {
//   '/v1': {
//     target: 'http://0.0.0.0:5000',
//     pathRewrite: {
//       '^/v1': '/v1'
//     },
//     changeOrigin: true
//   }
// }

// const isDevelopment = process.env.NODE_ENV !== 'production'

// app
//   .prepare()
//   .then(() => {
//     const server = express()

//     if (isDevelopment) {
//       server.use('/v1', createProxyMiddleware(apiPaths['/v1']))
//     }

//     server.all('*', (req: any, res: any) => {
//       return handle(req, res)
//     })

//     server.listen(port, () => {
//       console.log(`> Ready on http://localhost:${port}`)
//     })
//   })
//   .catch((err: any) => {
//     console.log('Error:::::', err)
//   })