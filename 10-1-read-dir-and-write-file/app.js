/**
 * @TODO:
 * 1. Baca semua nama folder yang ada di dalam direktori ini
 * 2. Tulis semua nama folder yang ada di dalam direktori ini ke dalam file `out.txt`
 * 3. Pastikan direktori yang ditulis pada `out.txt` diurutkan secara ascending (A-Z).
 *
 * Contoh:
 * Jika dalam direktori ini terdapat folder `aaa`, `bbb`, dan `ccc`,
 * maka file `out.txt` akan berisi -> aaa,bbb,ccc
 *
 * Catatan:
 * - Anda bisa men-generate kembali folder-folder dengan menjalankan berkas `generate-folders.js`
 * - Hindari untuk mengubah kode yang sudah ada sebelumnya
 */

const fs = require('fs');

function readDirAndWriteFile() {
  // Tulis jawaban di bawah ini
  fs.readdir('./', (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    const folders = files.filter((file) => fs.lstatSync(file).isDirectory());
    const sortedFolders = folders.sort();

    fs.writeFile('out.txt', sortedFolders.join(','), (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log('Berhasil menulis file out.txt');
    });
  });
}

readDirAndWriteFile();
