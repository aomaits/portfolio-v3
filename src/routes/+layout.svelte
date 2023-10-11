<script>
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";

    let y
    let innerHeight = 0
    let innerWidth = 0

    function goTop() {
        document.body.scrollIntoView()
    }
</script>

<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
    <!-- if y > 0 user has scrolled down, setting the ternary for what happens if yes followed by if no-->
    <div class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] " + (y > 0 ? ' opacity-full pointer-events-auto': ' pointer-events-none opacity-0 ')}>
        <button on:click={goTop} class="ml-auto rounded-full bg-blue-950 text-yell0w-200 px-3 sm:px-4 hover:bg-blue-850 cursor-pointer">
            <i class="fa-solid fa-arrow-up grid place-items-center aspect-square">
        </button>
    </div>
    <Header y={y}/>
    <slot />
    <Footer/>
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />