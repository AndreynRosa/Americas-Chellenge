export function getHouresTemplate(time: number) {
  let houres = Math.floor(time);
  let min = time - Math.floor(time);
  return `${houres}:${min.toFixed(1).toString().replace('.', '')}`;
}
