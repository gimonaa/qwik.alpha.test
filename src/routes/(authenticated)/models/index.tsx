import { component$, useStore} from '@qwik.dev/core';
// import { Image } from '~/components/ui/image';
// import { serverImg } from '../layout';
import { ModelImg } from '~/components/models/modelImg';

export default component$(() => {

  const storeModel = useStore({
      model: 'ECMWF',
      datarun: '2021-01-01',
      level: 'SFC',
      run: '00',
      variable: 'TP',
      
  })

  return (
    <div class="">

        <button
            class="m-3 p-3 bg-slate-200 border-2 border-black"
            onMouseOver$={() => {
              storeModel.model = 'GFS';
            }}
            onClick$={() => {
              storeModel.model = 'GFS';
            
        }}
        >
          button GFS
        </button>

        <button
            class="m-3 p-3 bg-slate-200 border-2 border-black"
            onMouseOver$={() => {
              storeModel.model = 'ECMWF';
            }}
            onClick$={() => {
            storeModel.model = 'ECMWF';
        }}
        >
          button ECMWF
        </button>
        
        <ModelImg store={storeModel}></ModelImg>

    </div>
  );
});