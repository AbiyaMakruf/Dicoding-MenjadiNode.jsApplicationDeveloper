/**
 * @TODO
 * 1. Cetak jenis platform pada Terminal
 * 2. Hentikan proses dengan status code non-zero (selain 0)
 */

// Tulis jawaban di bawah ini
const os = require('os');
console.log(os.platform());
process.exit(1); // exit dengan status code 1