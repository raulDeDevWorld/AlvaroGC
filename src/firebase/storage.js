import { app } from './config'
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { writeUserData } from './database'

import imageCompression from 'browser-image-compression';

const storage = getStorage(app)

//--------------------------- Firebase Storage ---------------------------
async function uploadIMG(ruteDB, ruteSTG, fileName, file, object, setUserSuccess) {
    const imagesRef = ref(storage, `/${ruteSTG}/${fileName}`);

    const options = {
        maxWidthOrHeight: 500,
        maxSizeMB: 0.07,
        alwaysKeepResolution: true,
        useWebWorker: true,
        maxIteration: 300,
        fileType: 'image/webp'
    }

    const compressedFile = file.type != 'image/gif' ? await imageCompression(file, options) : file
    uploadBytes(imagesRef, compressedFile).then(async (snapshot) => {
        getDownloadURL(ref(storage, snapshot.metadata.fullPath))
            .then((url) => {
                let obj = {
                    ...object,
                    url,
                }
                return writeUserData(ruteDB, obj, setUserSuccess)
            })
            .catch((error) => {
            });
    });
}

let object = {}
export { uploadIMG }