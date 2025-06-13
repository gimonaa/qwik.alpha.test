import { component$, Slot, useSignal, } from "@qwik.dev/core";
import { Link } from "@qwik.dev/router";

export const Navbar = component$(() => {
  const isOpenSig = useSignal(true);
  const mobisOpenSig = useSignal(false);
  const prefetch = useSignal(false);

  return (
    <>
      {/* sm control menu */}
      <button
        onClick$={() => {
          mobisOpenSig.value = !mobisOpenSig.value;
        }}
        type="button"
        class={`ms-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 ${mobisOpenSig.value ? "sm:hidden" : "sm:hidden"} hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none`}
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      {/* md control menu */}
      <button
        aria-label="toggle sidebar"
        title="menu"
        class={`fixed top-1 hidden rounded rounded-r-full bg-gray-50 p-1 text-2xl text-black sm:block ${isOpenSig.value ? "left-56" : "left-0 -translate-x-0"}`}
        onClick$={() => (isOpenSig.value = !isOpenSig.value)}
      >

      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        class={`fixed top-0 left-0 z-40 h-screen transform overflow-y-auto bg-gray-50 transition-transform duration-200 ${mobisOpenSig.value ? "translate-x-0" : "-translate-x-full"} ${isOpenSig.value ? "w-56" : "w-56 sm:hidden"} w-56 sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div class="h-full overflow-y-auto bg-gray-50 px-3 py-4">
          <Link
            href="/"
            class="mb-5 flex items-center ps-2.5"
            onClick$={() => (mobisOpenSig.value = false)}
          >

            <span class="self-center text-xl font-semibold whitespace-nowrap">
              HOME
            </span>
          </Link>

          {/* Menu */}
            <ul class="space-y-1 font-medium" key={"menu1"}>
              <li>
                      <button
                        type="button"
                        class={` group flex w-full cursor-pointer items-center rounded-lg p-2 text-base transition duration-75 hover:bg-gray-100`}
                      >
                        <span class="ms-3 flex-1 text-left whitespace-nowrap rtl:text-right">
                         Menu1
                        </span>
                        <svg
                          class={`h-3 w-3 transform  transition-transform`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      <ul
                        key={"submenu1"}
                        id={"dropdownmenu"}
                        class={`space-y-1 py-2 `}
                      >
                        {/* Sub Menu  */}
             
                          <li key={"submenu11"}>
                            <div class="flex">
                              <Link
                                aria-hidden={false}
                                prefetch={prefetch.value}
                                aria-label={"resource"}
                                href={"/resource/"}
                                onClick$={() => (mobisOpenSig.value = false)}
                                class={`group w-full items-center rounded-lg p-2 pl-8 text-gray-900 transition duration-75 hover:bg-gray-100  `}
                              >
                                {"resource"}
                              </Link>
                            </div>
                          </li>
                          <li key={"submenu11"}>
                            <div class="flex">
                              <Link
                                aria-hidden={false}
                                prefetch={prefetch.value}
                                aria-label={"resource2"}
                                href={"/resource2/"}
                                onClick$={() => (mobisOpenSig.value = false)}
                                class={`group w-full items-center rounded-lg p-2 pl-8 text-gray-900 transition duration-75 hover:bg-gray-100  `}
                              >
                                {"resource2"}
                              </Link>
                            </div>
                          </li>
                          <li key={"submenu12"}>
                            <div class="flex">
                              <Link
                                aria-hidden={false}
                                prefetch={prefetch.value}
                                aria-label={"link1"}
                                href={"/link1/"}
                                onClick$={() => (mobisOpenSig.value = false)}
                                class={`group w-full items-center rounded-lg p-2 pl-8 text-gray-900 transition duration-75 hover:bg-gray-100  `}
                              >
                                {"link1"}
                              </Link>
                            </div>
                          </li>
                          <li key={"submenu13"}>
                            <div class="flex">
                              <Link
                                aria-hidden={false}
                                prefetch={prefetch.value}
                                aria-label={"link2"}
                                href={"/link2/"}
                                onClick$={() => (mobisOpenSig.value = false)}
                                class={`group w-full items-center rounded-lg p-2 pl-8 text-gray-900 transition duration-75 hover:bg-gray-100  `}
                              >
                                {"link2"}
                              </Link>
                            </div>
                          </li>
                      </ul>
              </li>
            </ul>
            <ul class="space-y-1 font-medium" key={"menu2"}>
              <li>
                      <button
                        type="button"
                        class={` group flex w-full cursor-pointer items-center rounded-lg p-2 text-base transition duration-75 hover:bg-gray-100`}
                      >
                        <span class="ms-3 flex-1 text-left whitespace-nowrap rtl:text-right">
                         Menu2
                        </span>
                        <svg
                          class={`h-3 w-3 transform  transition-transform`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      <ul
                        key={"submenu2"}
                        id={"dropdownmenu"}
                        class={`space-y-1 py-2 `}
                      >
                        {/* Sub Menu  */}
             
                          <li key={"submenu21"}>
                            <div class="flex">
                              <Link
                                aria-hidden={false}
                                prefetch={prefetch.value}
                                aria-label={"link3"}
                                href={"/link3/"}
                                onClick$={() => (mobisOpenSig.value = false)}
                                class={`group w-full items-center rounded-lg p-2 pl-8 text-gray-900 transition duration-75 hover:bg-gray-100  `}
                              >
                                {"link3"}
                              </Link>
                            </div>
                          </li>
                          <li key={"submenu22"}>
                            <div class="flex">
                              <Link
                                aria-hidden={false}
                                prefetch={prefetch.value}
                                aria-label={"link4"}
                                href={"/link4/"}
                                onClick$={() => (mobisOpenSig.value = false)}
                                class={`group w-full items-center rounded-lg p-2 pl-8 text-gray-900 transition duration-75 hover:bg-gray-100  `}
                              >
                                {"link4"}
                              </Link>
                            </div>
                          </li>
                      </ul>
              </li>
            </ul>

        </div>
      </aside>

      <div
        onClick$={() => (mobisOpenSig.value = false)}
        class={` 
          ${isOpenSig.value && "sm:ml-56"} `}
      >
        <div class="w-full">
          <Slot></Slot>
        </div>
      </div>
    </>
  );
});
