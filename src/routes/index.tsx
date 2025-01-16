import { component$ } from "@qwik.dev/core";
import { Link, type DocumentHead } from "@qwik.dev/router";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
      To reproduce the issue:
      <br/>
	•	Copy the .png files from the /public folder to /tmp.
      <br/>
	•	Visit the <Link href="/models">/models</Link> route. 
  <br/>
	•	Clicking the two buttons should change the image.
  <br/>
In the modelImg component, the onPending Resource comment does not work. If I remove the comment, it works.
        <br />
        
      </div>
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
