import '../styles/globals.css'

import Navbar from './Navbar'
import Preloader from './Preloader'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>brian pak</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="keywords" content="Brian Pak, Georgia Tech, GT, computer science"/>
        <meta name="Brian Pak's Personal Website" content="A website for all my past achievements, built using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        {/* <Navbar/> */}
        <Preloader/>
        {children}
      </body>
    </html>
  )
}
