export const hexCodeGenerator = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const hexCode = '#' + randomColor;
  //console.log(hexCode);
  //console.log(hexTorgbConvert(hexCode));
  return hexCode;
};

export function hexTorgbConvert(hex) {
  const validHex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const RGB = {
    r: parseInt(validHex[1], 16),
    g: parseInt(validHex[2], 16),
    b: parseInt(validHex[3], 16)
  };
  return `rgb(${RGB.r},${RGB.g},${RGB.b})`;
}
