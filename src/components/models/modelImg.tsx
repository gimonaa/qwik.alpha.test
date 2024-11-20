import { component$, useResource$, Resource } from '@qwik.dev/core';
import { type ModelProps } from './modelMenu';
import { serverImg } from '~/routes/(authenticated)/layout';
import { Image } from '../ui/image';

export const ModelImg = component$<ModelProps>((props) => {
  const imgLoc = useResource$(async ({ track }) => {
    track(() => props.store.model);
    track(() => props.store.datarun);
    track(() => props.store.level);
    track(() => props.store.run);
    track(() => props.store.variable);

    const url = `/tmp/${props.store.model}-${props.store.datarun}-${props.store.level}-${props.store.run}-${props.store.variable}.png`
    const data = await serverImg(url)
    console.debug("DBG url",url)
    return data
  });
  return (
    <>
        <Resource value={imgLoc} 
        //   onPending={() => <p >Loading..</p>}
          onRejected={() => <p>error ...</p>}
          onResolved={(res) => 
          ( res && <>
            {/* <div>{res}</div> */}
            <Image            
                class={props.class || `object-top object-contain md:h-[calc(100vh-120px)] w-full max-h-screen`}  
                src={`${res}`}>
            </Image></>)}
        />
    </>
  );
});
