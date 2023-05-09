export const linesCatalog = {
  Tokyo: {
    JR: ["Yamanote Line", "Chuo Line"],
  },
  Heerlen: {
    Arriva: ["Heuvellandlijn"],
  },
};

export const getCities = () => {
  return Object.keys(linesCatalog);
};

export const getGroupsForCity = (city) => {
  return Object.keys(linesCatalog[city]);
};

export const getLinesForGroup = (city, group) => {
  return linesCatalog[city][group];
};
