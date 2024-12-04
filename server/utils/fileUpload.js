import multer from "multer";
import path from "path";
import { getUploadsPath } from "./getPath.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      try{ 
        let subDirectory ; 
        switch(file.fieldname){
          case "primaryImage" : 
          subDirectory = "primaryImages";
          break; 
          case "secondaryImages" : 
          subDirectory ="secondaryImages" ;
          break; 
          case "bannerImage" : 
          subDirectory = "bannerImages" 
          break;  
          case "icons" :
          subDirectory ="icons" 
          break; 
          default  : 
          return cb(new Error("Un expected field"))
        } 
        const uploadPath = getUploadsPath(subDirectory);
        cb(null, uploadPath);
      }catch(err) {
        cb(err)
      } 
  
  },

  filename: (req, file, cb) => {
    cb(
      null,
      file.originalname.split(".")[0] +
        "-" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

export const imageUpload = multer({ storage: storage }).fields([
  { name: "primaryImage", maxCount: 1 },
  { name: "secondaryImages", maxCount: 5 },
]);

export const bannerImageUpload = multer({ storage: storage }).single(
  "bannerImage"
);

export const addIcons = multer({ storage: storage }).array("icons");
