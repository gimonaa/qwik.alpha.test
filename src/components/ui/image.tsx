import { type PropsOf, component$ } from '@qwik.dev/core';

type ImageProps = PropsOf<'img'>

export const Image = component$<ImageProps>((props) => {

  return (
    <>
      <img 
        width={props.width || `300`} 
        height={props.height || `300`} 
        class={props.class || `object-top object-contain md:h-[calc(100vh-120px)] w-full max-h-screen`}  
        src={`${props.src}`}
      />
    </>
  );
});