import path from 'path';
import { fileURLToPath } from 'url';

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName) 

export const getUploadsPath = subDir =>{
    let basePath; 
    if( process.env.NODE_ENV ==="production"){
            basePath= '/var/www/enteBuddy-ecommerce/server/Public/uploads'
     }else {
        basePath= path.join(dirName , '../Public/uploads')
     } 
     return path.join(basePath, subDir)
}
