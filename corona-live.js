const ambil = require("node-fetch");
const warna = require("chalk");

function lol() {
  ambil("https://api.teainside.org/corona/?country=Indonesia", {
      method: "GET"
    })
    .then(res => res.json())
    .then(result => {
      let negara1 = result.scope;
      let negara2 = negara1.slice(9, 17);
      let kasus = result.cmt;
      let mati = result.fst;
      let sembuh = result.sdt;
      let aktif = kasus - mati - sembuh;
      process.stdout.write("\033c");
      console.log("===========================");
      console.log("|  UPDATE CORONA TERBARU  |");
      console.log("===========================");
      console.log("[>] Negara      : I" + negara2);
      console.log("[>] Total Kasus : " + warna.red(kasus));
      console.log("[>] Kasus Aktif : " + warna.red(aktif));
      console.log("[>] Sembuh      : " + warna.green(sembuh));
      console.log("[>] Meninggal   : " + warna.yellowBright(mati));
      console.log("===========================");
      if (kasus > 150) {
        console.log(warna.red("!!INDONESIA DARURAT CORONA!!"));
      }
      let tanggal = new Date();
      let tgl = ("0" + tanggal.getDate()).slice(-2);
      let bulan = ("0" + (tanggal.getMonth() + 1)).slice(-2);
      console.log(
        "Terakhir Update : " +
        tgl +
        " - " +
        bulan +
        " - " +
        tanggal.getFullYear()
      );
    });
}

return lol()