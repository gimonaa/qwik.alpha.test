import { component$, Resource, useResource$, useSignal } from '@qwik.dev/core';
import { server$ } from '@qwik.dev/router';
import moment from 'moment';
import { Test } from '~/components/ui/test';


export const serverRes = server$(async () => {
  const data = [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
    },
    {
      id: 2,
      name: 'Jane Smith', 
      age: 25,
    },
  ]

  return data
})

export default component$(() => {

  const ymdSig = useSignal(moment().utc().format("YYYYMMDD"));

  const resource = useResource$(async ({ track, cleanup }) => {
    track(() => ymdSig.value);
    const dataRes = await serverRes();

    const controller = new AbortController();   
    cleanup(() => controller.abort()); 
    return dataRes
  });

  return (
    <>

      <h1 class="text-xl p-4">useResource 1</h1>

      <div>
        <p>ymd: {ymdSig.value}</p>
      </div>
      change date:<input class="p-1 border " type="text" bind:value={ymdSig}  />

      <Resource 
        value={resource}
        onPending={() => <p>Loading...</p>}
        onRejected={() => <p>Error</p>}
        onResolved={(res) => {
          return res.map((val,index) =>
            <div key={index}>
              <p>{val.id}</p>
              <p>{val.name}</p>
              <p>{val.age}</p>
              <Test date={ymdSig}></Test>
            </div>
          )
        }}
      />

    </>
  );
});