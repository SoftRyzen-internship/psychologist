export const setSpecialTitle = markdown => {
  if (markdown.heading.includes('\u00A0')) {
    return markdown;
  }
  const splittedTitle = markdown.heading.split(' ');
  const firstTwoWords = splittedTitle.slice(0, 2);
  const concatinatedWords = `${splittedTitle[2]}\u00A0${splittedTitle[3]}`;
  console.log(concatinatedWords);
  const specialTitle = [
    ...firstTwoWords,
    concatinatedWords,
    ...splittedTitle.slice(4),
  ].join(' ');
  markdown.heading = specialTitle;
  return markdown;
};
