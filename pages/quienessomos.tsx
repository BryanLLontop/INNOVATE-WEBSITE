import CFooter2 from '../pages/components/footer/footer2'
import CFooter from '../pages/components/footer/footer'
import CQuienessomos from '../pages/components/vistas/quienessomos'
import CClientes from '../pages/components/vistas/clientes'
import CMenu from '../pages/components/menu/menu'
import CAnimacion from '../pages/components/slider/animacion'
import CTop from '../pages/components/top/top'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'innovate.pe : Quienes Somos',
  description: 'Pagina incial de Imnovate',
  icons: {
    icon: '/images/favicon.ico', // /public path
  },
}
export default function Home() {
  return (
    <>     
    <CTop />
    <div className='animacionmenu'>
        <CMenu menu="quienesomos"/>
        <CAnimacion categoria="quienessomos" />
    </div>
    <CQuienessomos />
    <CClientes />
    <CFooter2 />
    <CFooter />
    </>
  )
}
