<template>
    <div class=" bg-black text-white text-right font-semibold grid grid-cols-4 py-3 px-2">
  <div> 
    <p class="text-left text-xl font-bold grid justify-center ">D&D Character Generator </p>
  </div>
        <div>
            <NuxtLink to="/" class="hover:underline">
                Home
            </NuxtLink>
        </div>
        <div>

            <NuxtLink to="/about" class="hover:underline">
                About
            </NuxtLink>
        </div>
        <div>

            <NuxtLink to="/contact" class="hover:underline">
                Contact
            </NuxtLink>
        </div>

    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

section to display the character information from API
section to display logo image
