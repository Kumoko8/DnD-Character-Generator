<script setup>
const { data: randomName } = await useFetch('/api/randomName')
</script>

<template >
    <div class="grid justify-center">
        <img src="/images/DnD.png" class="h-28 rounded-full m-5 ">
    </div>
    <div class="justify-center">

        <h1 class="font-sans font-bold text-lg grid justify-center "> Choose Your Character</h1>

    </div>
    <div class="grid justify-center">
        <button class="font-bold bg-white p-2 rounded-md m-4 hover:bg-black hover:text-white"> Generate </button>
    </div>
    
   
    <div class="m-4 p-3">
<div class="p-3">

    <p class="p-3"> Name : {{ randomName.firstName }} {{ randomName.lastName }}</p>
    <p class="p-3"> Race </p>
    <p class="p-3"> Class </p>
    <p class="p-3"> Stats </p>
    
</div>


    </div>
</template>