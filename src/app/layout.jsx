import { Inter } from 'next/font/google'
import './globals.css'
import CanvasComponent from './componenets/canvabg'
import SideModal from './componenets/sidemodal'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pain Multi Stream',
  description: 'Watch co-stream cblol and baiano',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-900">

        {children}
        <CanvasComponent />
        <SideModal />
      </body>
    </html>
  )
}
