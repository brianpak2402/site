import '../styles/globals.css'

import Navbar from './Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <title>brian pak</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="Brian Pak's Personal Website" content="A website for all my past achievements, built using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
