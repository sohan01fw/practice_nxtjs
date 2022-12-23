import fs from 'fs';

export default async function handler(req, res) {
  /*   
    fs.readdir("blogdata",(err,data)=>{
        console.log(data)
        res.send(data)
    }) */

     let readData = await fs.promises.readdir("blogdata");
    let readdir_file;
    let fileArr = [];
    for (let index = 0; index < readData.length; index++) {
        const fileDir = readData[index];
       /*  console.log(fileDir) */
        readdir_file = await fs.promises.readFile(('blogdata/' +fileDir),'utf-8');
        /* console.log(readdir_file) */
        fileArr.push(JSON.parse(readdir_file))
    }
    res.status(200).json(fileArr)
}