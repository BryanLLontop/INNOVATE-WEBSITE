import CAnimacion from '../pages/components/slider/animacion'
import CHome from '../pages/components/vistas/home'
import CFooter2 from '../pages/components/footer/footer2'
import CFooter from '../pages/components/footer/footer'
import CMenu from '../pages/components/menu/menu'
import CClientes from '../pages/components/vistas/clientes'
import CTop from '../pages/components/top/top'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'innovate.pe : Inicio',
  description: 'Pagina incial de Imnovate',
  icons: {
    icon: '/images/favicon.ico',
  },
}
export default function Home() {
  return (
    <>
      <CTop />
      <div>
        <CMenu/>
        <CAnimacion categoria="inicio" />
      </div>
      <CClientes />
      <CHome />
    <CFooter2 />
    <CFooter />
    </>
  )
}