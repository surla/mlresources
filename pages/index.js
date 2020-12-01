import Head from 'next/head'
import "tailwindcss/tailwind.css"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Machine Learning Resources</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="text-xl">Machine Learning Resources</h1>
    </div>
  )
}
