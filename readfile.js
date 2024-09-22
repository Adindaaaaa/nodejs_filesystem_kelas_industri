const fs = require('node:fs');
fs.readFile('Biodata.txt', 'utf8', function(error, data) {
    if(error) {console.error(error)
    }else{
        console.log('adin :', data)
    }
});
//untuk ngapus di prettier pake cls
// untuk memberhentikan pake ctrl c

