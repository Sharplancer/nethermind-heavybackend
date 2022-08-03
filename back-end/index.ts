import express from 'express';
import cors from 'cors'
import router from './src/router'

const port = process.env.API_URL || 8000
const app = express()

app.use(cors())
app.use('/', router)

app.listen(port, () => {
  console.log(`Backend is listening on port ${port}`)
})

export default app;


