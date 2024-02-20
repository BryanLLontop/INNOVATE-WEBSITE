import Image from 'next/image'
export default function CIMG(props:any) {
    const src=props.src||'';
    const alt=props.alt||'';
    const cls=props.cls||'';
    const wid:number=props.width||300;
    const hei:number=props.heigth||100;
    return (
      <Image className={cls}
        src={src}
        alt={alt}
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    )
  }