var IPCheckRange = require('./index.js');

console.log(IPCheckRange('192.168.34.253', ['192.168.0.1', '192.168.0-78.253']));    //= true
console.log(IPCheckRange('192.198.34.1', ['192.168-255.34.1', '192.168.0-78,253'])); //= true
console.log(IPCheckRange('192.13.134.223', ['192.*.*.*', '192.168.*,*']));           //= true
console.log(IPCheckRange('192.16.0.124', ['192.168.0.1-178', '192.168.0-78,253']));  //= false
console.log(IPCheckRange('192.168.34.76', ['192.168.0.1', '192.168.0-78.23-253']));  //= true