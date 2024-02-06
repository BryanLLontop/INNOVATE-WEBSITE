'use client'
import React from 'react'
import {
   FacebookShareButton,
   FacebookIcon, 
   RedditShareButton,
   RedditIcon,
   WhatsappShareButton,
   WhatsappIcon,
   LinkedinShareButton,
   LinkedinIcon,
   TelegramShareButton,
   TelegramIcon,
} from 'next-share';

export default function CSharesocial(props:any) {
   const clases =props.clases||'shareredes';
   const clases2 = props.clases2 || 'shareredestitulo';
   const titulo =props.titulo||''
   const url='https://imnovate.pe/'+(props.url||'')
   const textocompartir=props.textocompartir||titulo
   const idshare = props.idshare ||'sharesocial'  
   return (
      <div className={clases} key="keysocial1" id='sharesocial'>
         <h3 className={clases2}>{titulo}</h3>
         <FacebookShareButton           
            url={url} 
            quote={textocompartir}
            hashtag={'#'+idshare}
            >
            <FacebookIcon size={32} round />
         </FacebookShareButton>

         <WhatsappShareButton           
            url={url} >
            <WhatsappIcon size={32} round />
         </WhatsappShareButton>

         <LinkedinShareButton            
            url={url} >
            <LinkedinIcon size={32} round />
         </LinkedinShareButton>
         
         <TelegramShareButton
            url={url}
            title={titulo}  >
            <TelegramIcon size={32} round />
         </TelegramShareButton>

      </div>
   )
}