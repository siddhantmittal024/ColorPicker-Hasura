export const hexCodeGenerator = () => {
  // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // const hexCode = '#' + randomColor;
  // //console.log(hexCode);
  // //console.log(hexTorgbConvert(hexCode));
  // return hexCode;
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

export function hexTorgbConvert(h) {
  let r = '0x' + h[1] + h[2];
  let g = '0x' + h[3] + h[4];
  let b = '0x' + h[5] + h[6];

  return 'rgb(' + +r + ',' + +g + ',' + +b + ')';
}
