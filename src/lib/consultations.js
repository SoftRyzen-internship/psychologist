import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const consultDir = 'src/content';

export const getConsultationsData = () => {
  const fullPath = join(consultDir, 'consultations.md');

  const fileContentsStr = fs.readFileSync(fullPath);

  const parsedContent = matter(fileContentsStr);

  return parsedContent.data;
};
