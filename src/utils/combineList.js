export const combineList = list => {
  let completeList = list[0].content;

  return list
    .slice(1)
    .reduce((acc, currentList) => acc + currentList.content, completeList);
};
