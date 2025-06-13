import { component$ } from "@qwik.dev/core";
import { type RequestHandler, type DocumentHead } from "@qwik.dev/router";

export const onRequest: RequestHandler = async ({
  // sharedMap,
  redirect,
  url,
}) => {
  // const session = sharedMap.get("session");
  // console.log(url.pathname)
  // if (session && new Date(session.expires) > new Date()) {
    // console.log(event.url)
    if (url.pathname !== "/dashboard") {
      throw redirect(301, "/dashboard");
    }
  // }
};


export default component$(() => {
  return (
    <div>
      <div>
        <h1 class="text-2xl p-4">Qwik site HOME PAGE</h1>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
