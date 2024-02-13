import CAnimacion from '@/components/slider/animacion'
import CHome from '@/components/vistas/home'
import CFooter2 from '@/components/footer/footer2'
import CFooter from '@/components/footer/footer'
import CMenu from '@/components/menu/menu'
import CClientes from '@/components/vistas/clientes'
import CTop from '@/components/top/top'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'innovate.pe : Inicio',
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
      <CMenu/>
      <CAnimacion menu="inicio" />
      </div>
      <CClientes />
      <CHome />
    <CFooter2 />
    <CFooter />
    </>
  )
}
