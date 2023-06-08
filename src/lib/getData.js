import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
// import * as path from 'path';

const folderPathTemplate = 'src/content/';

export const getData = folder => {
  const folderPath = `${folderPathTemplate}${folder}`;
  // const folderPath = path.join(__dirname, 'content', folder);

  console.log(folderPath);
  const filesContentsArray = fs.readdirSync(folderPath).map(fileName => {
    const fullPath = join(folderPath, fileName);

    const fileContentStr = fs.readFileSync(fullPath, 'utf-8');

    const parsedContent = matter(fileContentStr);

    const keyOfObj = fileName.split('.');

    return { [keyOfObj[0]]: parsedContent.data };
  });

  return filesContentsArray.reduce((prevVal, el) => {
    return { ...prevVal, ...el };
  }, {});
};
