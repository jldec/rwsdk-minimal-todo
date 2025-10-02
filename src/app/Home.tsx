import { Layout } from './Layout'
import { Button } from './Button'

export function Home() {
  return (
    <Layout title="rwsdk-minimal-starter Home">
      <a href="https://github.com/jldec/rwsdk-minimal-starter" className="block text-blue-500 underline">
        GitHub
      </a>
      <Button />
    </Layout>
  )
}
