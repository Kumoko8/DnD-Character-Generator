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



    <div class="m-4 p-3">
        <p class="font-bold text-orange-600 my-2"> Choose your own stats or generate randomly!</p>
        <div class=" font-bold p-3 bg-amber-100 rounded-xl">

            <p class="font-bold p-3"> Name : <input label="chosen-name" placeholder="Chosen Name"
                    class="mx-2 px-2 rounded-xl"> Random Name
                : {{
                    randomName.firstName }} {{ randomName.lastName }}
                <button class="font-semibold bg-white p-2 mx-3 rounded-md hover:bg-black hover:text-white"> Generate New
                    Name </button>
            </p>
            <p class="p-3 grid grid-cols-5"> Race : 
                <div>
                    <SelectMenu/>

                </div>
                <button class="font-semibold bg-white p-2 mx-3 rounded-md  hover:bg-black hover:text-white "> Generate New
                    Race
                </button>
            </p>
            <p class="p-3"> Class : <input label="chosen-class" placeholder="Chosen Class" class="mx-2 px-2 rounded-xl"></p>
            <div class="bg-white rounded-xl p-3">
                <p class="p-1"> Stats : </p>
                <div class="grid grid-cols-5">
                    <div>
                        <ul class="mx-6 ">
                            <li> Attack </li>
                            <li> Defense </li>
                            <li> Dexterity </li>
                            <li> Charisma </li>
                            <li> Constitution </li>
                        </ul>
                    </div>
                    <div class="grid w-fit ">
                        <input label="chosen-cons" placeholder="Current Constitution"
                            class="px-3 mx-2 bg-slate-100 rounded-xl text-sm">
                        <input label="chosen-cons" placeholder="Current Constitution"
                            class="px-3 mx-2 bg-slate-100 rounded-xl text-sm">
                        <input label="chosen-cons" placeholder="Current Constitution"
                            class="px-3 mx-2 bg-slate-100 rounded-xl text-sm">
                        <input label="chosen-cons" placeholder="Current Constitution"
                            class="px-3 mx-2 bg-slate-100 rounded-xl text-sm">
                        <input label="chosen-cons" placeholder="Current Constitution"
                            class="px-3 mx-2 bg-slate-100 rounded-xl text-sm">
                        <input label="chosen-cons" placeholder="Current Constitution"
                            class="px-3 mx-2 bg-slate-100 rounded-xl text-sm">

                    </div>
                </div>
            </div>

        </div>


    </div>
</template>

get dropdown of races, and classes
reformat NavBar
textfields for info
<!-- make button component -->
generate random races
generate random classes
generate random stats
change logo
figure out colors
nav logos
connect button to state change
pass props to button component
