//big O here is equal to N (linear)
//The bigger copying object, the longer it takes to copy all subfields, but it doesn't grow N^2 or logN, linear it is.
function makeObjectDeepCopy(obj) {
  let OBJ = {};
  let init = obj;
  for (const key in obj) {
    const value = obj[key];
    let type = typeof obj[key];
    if (obj[key] == init) type = "circular";
    switch (type) {
      case "circular":
        OBJ[key] = init;
        break;
      case "object":
        OBJ[key] =
          value instanceof Array
            ? [...value]
            : value instanceof Date
            ? value
            : makeObjectDeepCopy(value);
        break;
      default:
        OBJ[key] = value;
        break;
    }
  }
  return OBJ;
}
