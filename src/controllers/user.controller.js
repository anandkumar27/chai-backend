import {asyncHandler} from "../utils/asycHandler.js";

const registerUser = asyncHandler (async (req, res) => {
    return  res.status(200).json({
        message: "Ok"
    })
})

export {registerUser}