import { defineApp } from 'rwsdk/worker'
import { route, render } from 'rwsdk/router'

import { Document } from '@/app/Document'
import { TodoPage } from '@/app/TodoPage'

export type AppContext = {}

export default defineApp([
  render(Document, [
    route('/', TodoPage),
  ])
])
