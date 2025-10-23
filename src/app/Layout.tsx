export function Layout({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl p-2">
      <title>{title}</title>
      <main>
        <a className="text-blue-500 underline" href="https://github.com/jldec/rwsdk-minimal-todo">GitHub</a>
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        {children}
      </main>
    </div>
  )
}
