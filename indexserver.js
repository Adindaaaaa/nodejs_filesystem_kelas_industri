// create server ini mengambil fungsidari modul http
const {createServer} = require('node:http');
// membuat hostname untuk server/ alamat server
const hostname = '127.0.0.1'
// lalu, mendeklarasikan sebuah port untuk aplikasi kita
const port = 1301;
// menjalankan create server dan memberikan konfigurasi untuk server
const server = createServer ((req, res) =>{
    // untuk status kode respon
    res. statuscode = 200
    // untuk membuka tipe data ke website
    res. setHeader('Content-Type', 'text/plain');
    // untuk hasil akhir dari konfigurasi server, yaitu mencetak hasil
    res.end('gatau');
});

// menjalankan server dengan .listen dan memberikan port,hostname, dan callback
server.listen(port,hostname, () => {
    // mencetak log atau text ke server
    console. log(`server berjalan di http://${hostname}:${port}`);
});

