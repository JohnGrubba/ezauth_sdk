import { EZAuthClient } from "./ezauth_js/dist"

const client = new EZAuthClient('http://localhost:23321')

await client.connect()

await client.signup("test2", "Kennwort", "harpscharo@gmail.com")
//await client.login("string", "Kennwort1!")

console.log(client.session)
console.log(client.profile?.email)