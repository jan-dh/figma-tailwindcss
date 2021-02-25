export default function() {
  // eslint-disable-next-line no-undef
  const filterdNodes = figma.root.findAll(n => (n.cornerRadius));
  const radius = new Set();
  Array.from(filterdNodes).forEach(n => {
    if(typeof n.cornerRadius === 'number'){
      radius.add(n.cornerRadius);
    }
  })
  const radiusArray = [...radius];
  console.log(radiusArray);
  return {radiusArray}
}
