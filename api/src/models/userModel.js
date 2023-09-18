import { findUserByEmail } from "../repositorys/userRepository.js"
import { checkFieldsEmpty } from "../utils/validation.js"

export const loginModel = (data) => {
    const fieldEmpty = checkFieldsEmpty(data, ["email", "senha"])
    if(fieldEmpty) {
        return {
            status: 400,
            message: `Preencha o campo ${fieldEmpty}.`
        }
    }
    const user = findUserByEmail(data.email)
    return true
}