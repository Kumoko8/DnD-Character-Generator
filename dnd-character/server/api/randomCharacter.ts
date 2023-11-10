export default defineEventHandler(async event => {


    const response = await $fetch("https://randomuser.me/api/")
console.log(response)

const firstName ={
    firstName: response.results[0].name.first
}
    return firstName
})
