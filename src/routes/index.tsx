import { component$ } from "@qwik.dev/core";
import { Link, type DocumentHead } from "@qwik.dev/router";



export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>

      <Link href="/resource">Link to a route that uses useResource</Link>

    </>
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
