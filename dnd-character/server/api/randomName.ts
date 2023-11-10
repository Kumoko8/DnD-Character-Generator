export default defineEventHandler(async event => {


    const randomName = await $fetch("https://randomuser.me/api/")


const characterName ={
    firstName: randomName.results[0].name.first,
    lastName: randomName.results[0].name.last,
}
    return characterName
})

