import { AsyncLocalStorage } from "async_hooks";
import {v2 as cloudinary} from "cloudinary"
import fs from "fs"



 // Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key:process.env.CLOUDINARY_CLOUD_KEY, 
    api_secret:process.env.CLOUDINARY_CLOUD_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        // Upload the file on cloudinary
        const response = await cloudinary.uploader.upload
        (localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfull
        console.log("File is upload on cloudinary",
            response.url);
            return response;
        
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}


cloudinary.v2.uploader.upload("https://res.cloudinary.com/xolx3q2m/image/upload/v1791459039/lovelu_pesty.jpg",{public_id: "xolx3q2m"},
    function(error, result) {console.log(result);
    })