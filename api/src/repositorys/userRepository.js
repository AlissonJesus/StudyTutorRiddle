import client from "../database.js"

export const findUserByEmail = async (email) => {
   return (await client.query("SELECT * FROM users WHERE email = $1"), [email]).rows[0]
}