import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"

const registerUser = asyncHandler(async(req, res) => {
    /*
      - Firstly get user details from the frontend then
      - Check validation then
      - Check if user already exist(by username, email)
      - Check for images, check for avatar
      - Upload them to cloudinary, check if avatar is uploaded
      - Create user object - Create entry in db
      - Remove password and refresh token field from response
      - Check for user creation
      - return res
    */

    const {fullName, email, username, password} = req.body
    console.log("email: ", email);

    if(
        [fullName, email, username, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

});

export {registerUser}