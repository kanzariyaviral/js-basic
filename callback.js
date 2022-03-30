function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(5, 3, function (result) {
    console.log(result);
});
