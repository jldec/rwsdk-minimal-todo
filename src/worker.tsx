import { defineApp } from 'rwsdk/worker'
import { route, render } from 'rwsdk/router'

import { Document } from '@/app/Document'
import { Home } from '@/app/Home'
import { About } from '@/app/About'

export type AppContext = {}

export default defineApp([
  render(Document, [
    route('/', Home),
    route('/about', About)
  ])
])
