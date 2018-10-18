module.exports = function ipRangeCheck(ip, pool) {
    var matchIP = function (ip1, ip2) {
        var subsets1 = ip1.split('.');
        var subsets2 = ip2.split('.');
        return subsets1.reduce(function (acc, subset, i) {
            if (!acc) return false;
            if (subsets2[i].indexOf('-') > -1) {
                var range = subsets2[i].split('-');
                if (+subset >= +range[0] && +subset <= +range[1]) return !!subsets2;
                else return false;
            } else if (['*', subset, ''].indexOf(subsets2[i]) > -1) return !!subsets2;
            else return false;
        }, true)
    }
    return pool.reduce(function (acc, _ip) {
        if (acc) return (acc.join && acc.join('.')) || acc;
        return matchIP(ip, _ip);
    }, false)
}
