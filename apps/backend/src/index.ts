import { Hono } from 'hono'
import test from '~/api/test'
const app = new Hono()

app.route('/test', test)

export default app
