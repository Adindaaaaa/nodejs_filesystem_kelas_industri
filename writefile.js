const fs = require('node:fs');
fs.writeFile('Hello.txt', 'Hello nama saya adinda',
function(error) {
    if (error){
        console.error ('Terjadi Error', error);
    } else {
        console.log('file berhasil dibuat');
    }

});