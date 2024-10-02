//buat sebuah fungsi namanya myPromise
//resolv adalah tepati dan erject adalah ingkari
const myPromise = new Promise(function(resolve,reject){
    // buat variable sucsess isinya boleh false atau true
    const sucsess = true;

    if(sucsess === true){
        // jika sucsess maka resolve
        resolve('berhasil');
    } else {
        // jika sucsess itu false maka reject atau ingkar
        reject ('gagal');
    }
})

myPromise.then (function(result) {
    console.log(result);
})
.catch (function(error) {
    console.log(error); // ambil nilai dari reject yaitu
})
.finally (function() {
    console.log('sistem promise telah selesai berjalan')
})