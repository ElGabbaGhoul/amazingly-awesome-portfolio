<script>
  import Step from "./Step.svelte";

  let steps = [
    { name: "JamPackd", icon: "fa-solid fa-jar" },
    { name: "Fancy Clock", icon: "fa-regular fa-clock" },
    { name: "Foodr", icon: "fa-solid fa-utensils" },
    { name: "Scootshop", icon: "fa-solid fa-book" },
  ];

  let benefits = [
    {
      name: "a self taught developer",
      description:
        "I taught myself to code using free online resources and absolutely fell in love with the creativity and problem solving that is involved in developing and engineering innovative new online experiences. Starting with JavaScript, HTML & CSS and evolving my knowledge base to include JavaScript frameworks, backend programming, design, cloud services and much much more.",
    },
    {
      name: "a product design & UX fanatic",
      description:
        "Carefully crafting and designing amazing user experiences allows me to express and experiment with every morsel of creativity I Have. I love the challenge of learning new design concepts and enabling users with amazing online experiences.",
    },
    {
      name: "an excellent communicator",
      description:
        "Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any workspace with any team.",
    },
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="font-semibold text-4xl sm:text-5xl md text-6xl">
        Hi, I'm <span class="poppins text-violet-400">Scott</span> Nideffer!
        <br />Full Stack <span class="poppins text-violet-400">Developer</span>,
        <span class="poppins text-violet-400">Engineering</span> Student
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        My <span class="poppins text-violet-400">Favorite Tech</span> includes Python,
        C++, JavaScript (SvelteKit or React), TailwindCSS, Node.js, PostrgreSQL,
        and MongoDB!
      </p>
      <!-- Url to socials go here -->
      <a
        href="#"
        target="_blank"
        class="BlueShadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
        ></div>
        <h4 class="relative z-9">Get In Touch &rarr;</h4>
      </a>
    </div>
    <div class="relative shadow-2xl grid place-items-center">
      <!-- PLEASE FOR THE LOVE OF FUCK -->
      <!-- DO NOT FORGET TO CHANGE THIS -->
      <!-- THIS IS NOT A PICTURE OF YOU -->
      <!-- THIS IS A PICTURE OF HADES FROM -->
      <!-- DISNEY'S HERCULES -->
      <img
        src={"images/hades.png"}
        alt="professional head shot goes here"
        class="object-cover z-[2] max-h-[70vh]"
      />
    </div>
  </section>

  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-lg sm:text-xl md:text-2xl">
        A few of my creative endeavors:
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curious to <span class="poppins text-violet-400">see </span>my work?
      </h3>
    </div>
    <a
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
      class="mx-auto px-4 py-2 rounded-md border border-solid
            border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10
            hover:border-violet-700 duration-200"
    >
      <p>Click here for project 1</p>
    </a>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      <Step step={steps[0]}>
        <p>
          JamPackd is a Full Stack
          <strong class="text-violet-400"
            >SvelteKit, TailwindCSS, & MongoDB/PostgreSQL
          </strong> CRUD application that allows a user to login and create Spotify
          playlists with the Spotify API and share them with other users on the application.
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          Fancy Clock is a modern, simple clock application built with
          <strong class="text-violet-400">SvelteKit & TailwindCSS </strong> that
          looks great and uses location data to get current time.
        </p>
      </Step>
      <Step step={steps[2]}>
        <p>
          Foodr is a calorie tracking application created with
          <strong class="text-violet-400"
            >SvelteKit, TailwindCSS & MongoDB
          </strong> that tracks users' daily food intake and keeps track of macronutrients.
        </p>
      </Step>
      <Step step={steps[3]}>
        <p>
          Scootshop is a merchandising store created with
          <strong class="text-violet-400"
            >Next.js Commerce.js Stripe & Node.js + Express.js!</strong
          > Commerce.js is a product CMS and Stripe is used for all transaction handling.
        </p>
      </Step>
    </div>
  </section>

  <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5
        before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
      <h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A bit <span class="poppins text-violet-400">about</span> me.
      </h3>
    </div>
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
      I am . . .
    </p>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      {#each benefits as benefit, index}
        <div class="flex gap-6 sm:gap-8">
          <p
            class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
          >
            0{index + 1}
          </p>
          <div class="flex flex-col gap-6 sm:gap-8">
            <h3 class="text-2xl sm:text-3xl md:text-5xl">
              {benefit.name}
              <p>{benefit.description}</p>
            </h3>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>
