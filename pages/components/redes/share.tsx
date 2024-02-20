
import React from 'react';
import {
   FacebookIcon,
   WhatsappIcon,
   LinkedinIcon,
   TelegramIcon,
} from 'next-share';

export default function CSharesocial(props: any){
   const clases = props.clases || 'shareredes';
   const titulo = props.titulo || '';
   const idshare = props.idshare || 'sharesocial';

   const estiloIcono = {
      marginRight: '4px', // Ajusta el espacio entre los iconos cambiando este valor
   };

   return (
      <div className={clases} key="keysocial1" id={idshare}>
         <a href="https://www.facebook.com/profile.php?id=61556572370304" target="_blank">
            <FacebookIcon size={30} round style={estiloIcono} />
         </a>

         <a href="https://api.whatsapp.com/send?phone=51954498176" target="_blank">
         <WhatsappIcon size={30} round style={estiloIcono} />
         </a>

         <a href="https://www.linkedin.com/company/innovateper/" target="_blank">
         <LinkedinIcon size={30} round style={estiloIcono} />
         </a>

         <a href="https://www.facebook.com/profile.php?id=61556572370304" target="_blank">
         <TelegramIcon size={30} round style={estiloIcono} />
         </a>

      </div>
      
   );
}
