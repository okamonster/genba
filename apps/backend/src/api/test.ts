import { Hono } from 'hono'

const app = new Hono().get((c) => {
  const res = c.json({
    message: 'test',
  })

  return res
})

export default app
