export default function arrayConversion(route) {
  const newObj = JSON.parse(JSON.stringify(route));
  const location1 = newObj.location.reverse().join(', ').replace(', ', ',');
  const location2 = newObj.locationTo.reverse().join(', ').replace(', ', ',');
  return `${location1};${location2}`;
}
