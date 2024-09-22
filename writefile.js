const fs = require('node:fs');
fs.writeFile('Biodata.txt', 'Hello nama saya adinda, kelas XI TJKT 2, Alamat saya di jl Kramat awirarangan setu, umur 16 tahun',
function(error) {
    if (error){
        console.error ('Terjadi Error', error);
    } else {
        console.log('file berhasil dibuat');
    }

});