import { loginModel } from "../models/userModel.js"
import { internalServer } from "../utils/responseStatus.js"

export const loginRender = (req, res) => {
    if(req.session.user) {
        return res.redirect("/")
    }
    return res.render("login")
}


export const login = async (req, res) => {
    try {
     


    } catch (error) {
        return internalServer(res)
    }
    

}

export const registerRender = (req, res) => {
    console.log("sfsddf")
    return res.status(200).json("ai foi")
}