<script>
    import Step from"./Step.svelte";

    let steps = [
        {name: 'The Village', icon: 'fa-solid fa-house', href: 'https://the-village-pr3-499485f65b78.herokuapp.com/'},
        {name: 'JumpItNYC', icon: 'fa-solid fa-pizza-slice', href: 'https://jump-it-nyc-20d7358ef139.herokuapp.com/'},
        {name: 'Is My Park Safe?', icon: 'fa-solid fa-map-location-dot', href: 'https://liq543.github.io/Park-Safe/'}
    ];

    let benefits = [
        {name: 'a driven developer', description: 'I recently completed the University of Texas at Austin / edX full-stack bootcamp. I fully dedicated myself to the developer experience, pouring my time and energy into class sessions and challenges. Having excelled in the coursework, I\'m now energetically seeking the enterprise where I can immediately begin to contribute!'},
        {name: 'an enthusiastic learner', description: 'I love learning! I have a reputation for asking good questions and I love expanding my understanding. In my free time, I\'m often listening to podcasts and reading articles on programming topics so that I can have a better understanding of the space.'},
        {name: 'an excellent colloborator', description: 'My favorite projects have been group projects. I greatly look forward to working for and celebrating with my next team. I\'ve seen how diversity of thought and outlook has proved crucial in whiteboarding, debugging, and beyond while programming. I am excited to join other engineers and develop great things together!'}
    ];
    
</script>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="flex flex-col lg:justify-center text-center lg: gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi there! <br/> I'm  <span class="poppins text-yellow-400">Abe Omaits</span>,  <br/> Full Stack Developer!
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                Some of my <span class="text-yellow-400">favorite tech</span> includes JavaScript, CSS / TailwindCSS, Node.js + Express.js & SQL / MongoDB.
            </p>
            <a class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-blue-950 cursor-pointer" href="https://www.linkedin.com/in/abe-omaits/" target="_blank">
                <div class="absolute top-0 right-full w-full h-full bg-yellow-400 opacity-20 group-hover:translate-x-full z-0 duration-200">
        </div>
        <h4 class="relative z-9">Get in touch&rarr;</h4>
            </a>
        </div>
        <div class="relative shadow-2xt grid place-items-center">
            <img src={"images/Abe-cropped.png"} alt="Abe Omaits profile" class="object-cover z-[2] max-h-[70vh]"/>
        </div>
    </section>

    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl">
                Some of the projects
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                I'm <span class="poppins text-yellow-400">most excited</span> about! 
            </h3>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <p> This fullstack group project is a childcare resource-sharing app built with <strong class="text-yellow-400">React, GraphQL,</strong> and <strong class="text-yellow-400">MongoDB</strong>. It takes a village to raise a child, so find your village today! 
            </Step>
            <Step step={steps[1]}>
                <p> An arcade-style, retro-inspired side-scroller game built as another group project. We used a <strong class="text-yellow-400">SQL</strong> database leaderboard and run the game in <strong class="text-yellow-400">Javascript</strong>. Avoid the rats, get the pizza!
            </Step>
            <Step step={steps[2]}>
                <p> A front-end website allowing users to see reported criminal activity in and around Austin city parks. This project utilized calls to several <strong class="text-yellow-400">third-party APIs</strong> along with <strong class="text-yellow-400">HTML, TailwindCSS,</strong> and <strong class="text-yellow-400">Javascript</strong>. 
            </Step>
        </div>
    </section>

    <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
        <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-yellow-400 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-yellow-400 py-4">

            <h3 class="font-semibold text-3xl sm:text-4xl md:5xl">
                Here's a bit <span class="poppins text-yellow-400">about</span> me.
            </h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am...</p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <div class="flex gap-6 sm:gap-8">
                    <p class="poppins text-4xl sm:text-5xl md:text-6xl text-gray-400 font-semibold">
                        0{index+1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>{benefit.description}</p>
                    </div>
                </div>
            {/each}
        </div>
    </section>
</main>
