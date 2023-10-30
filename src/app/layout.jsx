import './globals.css'
import SideModal from './componenets/sidemodal'
import CanvasComponent from './componenets/canvabg'


export const metadata = {
  title: 'Pain Multi Stream',
  description: 'Watch co-stream cblol and baiano',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="bg-zinc-900">
        {children}
        <SideModal />
      </body>

    </html>
  )
}
