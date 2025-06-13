import { type Signal, component$ } from '@qwik.dev/core';

interface Props {
  date : Signal<string>
}

export const Test = component$<Props>((props) => {

  return (
    <>
      <div>
        your date is: <p>{props.date.value}</p>
      </div>
    </>
  );
});