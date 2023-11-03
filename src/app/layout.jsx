import './globals.css'
import SideModal from './componenets/sidemodal'
import { ContextProvider } from './componenets/contextprovider'

export const metadata = {
  title: 'Vivo Keyd Multi Stream',
  description: 'Watch co-stream cblol and baiano',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-900">
        <ContextProvider>
          {children}
          <SideModal />
        </ContextProvider>
      </body>
    </html>
  )
}
