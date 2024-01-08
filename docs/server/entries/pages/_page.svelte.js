import { c as create_ssr_component, b as add_attribute, d as escape, v as validate_component, e as each } from "../../chunks/ssr.js";
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  return `<a${add_attribute("href", step.href, 0)} target="_blank" class="p-4 sm:p-5 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200"><div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"><i${add_attribute("class", step.icon, 0)}></i></div> <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">${escape(step.name)}</h3> ${slots.default ? slots.default({}) : ``} <div class="flex-1 flex justify-between gap-4 items-center" data-svelte-h="svelte-1el29xd"><div class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:w-full after:h-full after:bg-white after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"><p class="relative z-4">Go To →</p></div></div></a>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      name: "JamPackd",
      icon: "fa-solid fa-jar"
    },
    {
      name: "Fancy Clock",
      icon: "fa-regular fa-clock"
    },
    {
      name: "Foodr",
      icon: "fa-solid fa-utensils"
    },
    {
      name: "Scootshop",
      icon: "fa-solid fa-book"
    }
  ];
  let benefits = [
    {
      name: "a self taught developer",
      description: "I taught myself to code using free online resources and absolutely fell in love with the creativity and problem solving that is involved in developing and engineering innovative new online experiences. Starting with JavaScript, HTML & CSS and evolving my knowledge base to include JavaScript frameworks, backend programming, design, cloud services and much much more."
    },
    {
      name: "a product design & UX fanatic",
      description: "Carefully crafting and designing amazing user experiences allows me to express and experiment with every morsel of creativity I have. I love the challenge of learning new design concepts and enabling users with amazing online experiences."
    },
    {
      name: "an excellent communicator",
      description: "Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any workspace with any team."
    }
  ];
  return `<main class="flex flex-col flex-1 p-4"><section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14" data-svelte-h="svelte-1to93sv"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"><h2 class="font-semibold text-4xl sm:text-5xl md md:text-6xl">Hi, I&#39;m <span class="poppins text-violet-400">Scott</span> Nideffer!
        <br>Full Stack <span class="poppins text-violet-400">Developer</span>,
        <span class="poppins text-violet-400">Engineering</span> Student</h2> <p class="text-base sm:text-lg md:text-xl">My <span class="poppins text-violet-400">Favorite Tech</span> includes Python,
        C++, JavaScript (SvelteKit or React), TailwindCSS, Node.js, PostrgreSQL,
        and MongoDB!</p> <a href="https://www.linkedin.com/in/scott-nideffer" target="_blank" class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"><div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">Get In Touch →</h4></a></div> <div class="relative shadow-2xl grid place-items-center"><img${add_attribute("src", "images/FramedTransparentScooter.png", 0)} alt="professional head shot goes here" class="object-cover z-[2] max-h-[70vh]"></div></section> <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24"><div class="flex flex-col gap-2 text-center" data-svelte-h="svelte-1awlo9"><h6 class="text-lg sm:text-xl md:text-2xl">A few of my creative endeavors:</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Curious to <span class="poppins text-violet-400">see </span>my work?</h3></div> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200" data-svelte-h="svelte-jsbypk"><p>Click here for project 1</p></a> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">${validate_component(Step, "Step").$$render($$result, { step: steps[0] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-zez3vm">JamPackd is a Full Stack
          <strong class="text-violet-400">SvelteKit, TailwindCSS, &amp; MongoDB/PostgreSQL</strong> CRUD application that allows a user to login and create Spotify
          playlists with the Spotify API and share them with other users on the application.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[1] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1egljhc">Fancy Clock is a modern, simple clock application built with
          <strong class="text-violet-400">SvelteKit &amp; TailwindCSS</strong> that
          looks great and uses location data to get current time.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[2] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-pkqtsd">Foodr is a calorie tracking application created with
          <strong class="text-violet-400">SvelteKit, TailwindCSS &amp; MongoDB</strong> that tracks users&#39; daily food intake and keeps track of macronutrients.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[3] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1vv0fxo">Scootshop is a merchandising store created with
          <strong class="text-violet-400">Next.js Commerce.js Stripe &amp; Node.js + Express.js!</strong> Commerce.js is a product CMS and Stripe is used for all transaction handling.</p>`;
    }
  })}</div></section> <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"><div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4" data-svelte-h="svelte-5jid0b"><h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400">about</span> me.</h3></div> <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl" data-svelte-h="svelte-1xbwjyh">I am . . .</p> <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">${each(benefits, (benefit, index) => {
    return `<div class="flex gap-6 sm:gap-8"><p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">0${escape(index + 1)}</p> <div class="flex flex-col gap-6 sm:gap-8"><h3 class="text-2xl sm:text-3xl md:text-5xl">${escape(benefit.name)}</h3> <p>${escape(benefit.description)}</p></div> </div>`;
  })}</div> <h5 class="text-2xl sm:text-3xl font-semibold text-center poppins" data-svelte-h="svelte-1f719c">The <span class="text-violet-400 poppins">Complete</span> Package</h5> <div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full" data-svelte-h="svelte-1lq773r"><table class="bg-white text-slate-700 rounded text-center"><thead class="border-b border-solid border-slate-200"><tr class=""><th></th> <th class="whitespace-nowrap p-2 px-4">Candidate #1</th> <th class="whitespace-nowrap p-2 px-4">Candidate #2</th> <th class="whitespace-nowrap p-2 px-4">Candidate #3</th> <th class="whitespace-nowrap bg-violet-700 text-white p-4 px-8">Me</th></tr></thead> <tbody class=""><tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap">Dedication</td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr> <tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap">Critical Thought</td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr> <tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap">Interpersonal Skills</td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr> <tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap">Programming Ability</td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr></tbody></table></div> <div class="mx-auto -mt-12 italic sm:hidden opacity-50" data-svelte-h="svelte-1fnroui"><p>Scroll to see more →</p></div> <p class="mx-auto" data-svelte-h="svelte-g5q3n9">So why not invest?</p></section></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
