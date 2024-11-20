import { component$, useSignal } from '@qwik.dev/core';
import moment from 'moment';
// import { Date } from '~/components/ui/date';
import { RdsTabs } from '~/components/rds/rdsTabs';
// import { RdsImg } from '~/components/rds/rdsImg';

export default component$(() => {

  const ymdSig = useSignal(moment().format('YYYYMMDD'))
  const prodTypeSig = useSignal('UDINE')

  return (
    <>
      <div class="md:flex">
        <div class="md:flex-none">
          {/* <Date ymdSig={ymdSig}></Date> */}
        </div>
        <div class="md:flex-1">
          <div> 
            <button 
              id='btnudine'
              class={`ml-5 g-button p-3 ${prodTypeSig.value==="UDINE" && "bg-blue-200"}`} 
              onClick$={() => prodTypeSig.value="UDINE"}>Thetaplot</button>
            <button
              id='btnprofilo' 
              class={`ml-5 g-button p-3 ${prodTypeSig.value==="PROFILO" && "bg-blue-200"}`} 
              onClick$={() => prodTypeSig.value="PROFILO"}>profilo</button>
            <button 
              id='btntabella' 
              class={`ml-5 g-button p-3 ${prodTypeSig.value==="TABELLA" && "bg-blue-200"}`} 
              onClick$={() => prodTypeSig.value="TABELLA"}>table</button>
          </div>
        </div>
      </div>

      <div>
        {
          // (prodTypeSig.value==="UDINE" || prodTypeSig.value==="PROFILO") &&
          // <RdsImg ymd={ymdSig} prodType={prodTypeSig}></RdsImg>
        }
      </div>

      <div>
        { 
          prodTypeSig.value==="TABELLA" && 
          <RdsTabs ymd={ymdSig}/> 
        }
      </div>
    </>
  );
});
