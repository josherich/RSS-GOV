// Access a nested object field from a string, like 'a.b.c'
const objectByString = function(o, s) {
  s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  s = s.replace(/^\./, '');           // strip a leading dot
  let a = s.split('.');
  for (let i = 0, n = a.length; i < n; ++i) {
      let k = a[i];
      if (!!o && k in o) {
          o = o[k];
      } else {
          return;
      }
  }
  return o;
};

module.exports = {
  get: objectByString
}
