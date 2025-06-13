import { component$, Slot } from "@qwik.dev/core";
import {  server$, type RequestHandler } from "@qwik.dev/router";
// import { Navbar } from "~/components/navbar/navbar";
import fs from "fs/promises";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    // staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    // maxAge: 5,
  });
};



export const serverPlainText = server$(
  async function(url:string) {
    try {
      const data = await fs.readFile(url,"utf-8")
      // console.log(data.toString())
      return Buffer.from(data).toString() as string
    }
    catch(err) {
      // console.log(err)
      // return "" as string
    }
}) 

export default component$(() => {

  return (
    <>
      <main>
          <Slot />
      </main>
    </>
  )

});

// export default component$(() => {

//   return (
//     <>
//       <main>
//         <Navbar>
//           <Slot />
//         </Navbar>
//       </main>
//     </>
//   )

// });
