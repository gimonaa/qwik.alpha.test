import { component$, Resource, useResource$ } from '@qwik.dev/core';
import { Link, server$ } from '@qwik.dev/router';


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

  const resource = useResource$(async () => {
    const dataRes = await serverRes();
    return dataRes
  });

  return (
    <>

      <Link href="/">HOME</Link>

      <h1>useResource</h1>

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
            </div>
          )
        }}
      />

    </>
  );
});