import { c as create_ssr_component, b as add_attribute, e as each, d as escape, v as validate_component } from "../../chunks/ssr.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { y } = $$props;
  let tabs = [{ name: "Projects", link: "#projects" }, { name: "About Me", link: "#about" }];
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  return `<header${add_attribute(
    "class",
    "sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid " + (y > 0 ? " py-4 bg-slate-950 border-violet-950 " : " py-6 bg-transparent border-transparent "),
    0
  )}><h1 class="font-medium" data-svelte-h="svelte-npdp2i"><b class="font-bold poppins">Scott</b> Nideffer</h1> <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">${each(tabs, (tab) => {
    return `<a${add_attribute("href", tab.link, 0)} class="duration-200 hover:text-violet-400"><p>${escape(tab.name)}</p> </a>`;
  })}</div>  <a href="https://www.linkedin.com/in/scott-nideffer" target="_blank" class="BlueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950" data-svelte-h="svelte-1w7l42"><div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">Get In Touch</h4></a></header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="py-20 sm:py-32 bg-black border-top border-solid border-violet-950 flex flex-col gap-4 sm:gap-8 justify-center items-center" data-svelte-h="svelte-1e5lluy"><p class="px-4 py-2 bg-white text-slate-950 font-medium">Connect with me ↓</p> <div class="flex flex-col gap-4 items-center justify-center"><p><b class="pr-2">Email</b> nideffer.scott@gmail.com</p> <p><b class="pr-2">GitHub</b> <a href="https://www.github.com/ElGabbaGhoul" class="text-violet-400" target="_blank">El Gabba Ghoul <sup><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p> <p><b class="pr-2">LinkedIn</b> <a href="https://www.linkedin.com/in/scott-nideffer" class="text-violet-400" target="_blank">Scott Nideffer<sup><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let y;
  return `<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"><div${add_attribute(
    "class",
    "fixed bottom-0 w-full duration-200 flex p-10 z-[10]  pointer-events-none opacity-0 ",
    0
  )}><button class="ml-auto rounded-full aspect-square bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer" data-svelte-h="svelte-g1q3ia"><i class="fa-solid fa-arrow-up grid place-items-center aspect-square"></i></button></div> ${validate_component(Header, "Header").$$render($$result, { y }, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> `;
});
export {
  Layout as default
};
