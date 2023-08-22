const addComma = num => {
  const reg = /\B(?=(\d{3})+(?!\d))(?<!\.\d*)/g;

  return num.toString().replace(reg, ',');
};

export default addComma;