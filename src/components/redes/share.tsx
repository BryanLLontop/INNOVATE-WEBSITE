'use client'
import React from 'react';
import {
   FacebookShareButton,
   FacebookIcon, 
   WhatsappShareButton,
   WhatsappIcon,
   LinkedinShareButton,
   LinkedinIcon,
   TelegramShareButton,
   TelegramIcon,
} from 'next-share';

export default function CSharesocial(props: any){
   const clases = props.clases || 'shareredes';
   const clases2 = props.clases2 || 'shareredestitulo';
   const titulo = props.titulo || '';
   const url = 'https://imnovate.pe/' + (props.url || '');
   const textocompartir = props.textocompartir || titulo;
   const idshare = props.idshare || 'sharesocial';

   const estiloIcono = {
      marginRight: '4px', // Ajusta el espacio entre los iconos cambiando este valor
   };

   return (
      <div className={clases} key="keysocial1" id={idshare}>
         <FacebookShareButton url={url} quote={textocompartir} hashtag={'#' + idshare}>
            <FacebookIcon size={30} round style={estiloIcono} />
         </FacebookShareButton>

         <WhatsappShareButton url={url}>
            <WhatsappIcon size={30} round style={estiloIcono} />
         </WhatsappShareButton>

         <LinkedinShareButton url={url}>
            <LinkedinIcon size={30} round style={estiloIcono} />
         </LinkedinShareButton>
         
         <TelegramShareButton url={url} title={titulo}>
            <TelegramIcon size={30} round style={estiloIcono} />
         </TelegramShareButton>
      </div>
   );
}
