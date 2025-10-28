// Ambil elemen-elemen HTML
const form = document.getElementById('mahasiswaForm');
const tabel = document.querySelector('#tabelMahasiswa tbody');
const infoText = document.getElementById('infoText');

// Array untuk menyimpan data mahasiswa
let dataMahasiswa = [];
let nomor = 1;

// Elemen tambahan untuk menampilkan jumlah data
const jumlahInfo = document.createElement('p');
jumlahInfo.style.textAlign = 'center';
jumlahInfo.style.fontWeight = 'bold';
jumlahInfo.style.marginTop = '10px';
document.querySelector('.container').appendChild(jumlahInfo);
updateJumlah();

// Saat form dikirim
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Supaya tidak reload halaman

  // Ambil data dari input form
  const nama = document.getElementById('nama').value;
  const nim = document.getElementById('nim').value;
  const semester = document.getElementById('semester').value;
  const prodi = document.getElementById('prodi').value;
  const email = document.getElementById('email').value;

  // Simpan data ke dalam objek
  const mahasiswa = {
    nama: nama,
    nim: nim,
    semester: semester,
    prodi: prodi,
    email: email
  };

  // Tambahkan ke array dataMahasiswa
  dataMahasiswa.push(mahasiswa);

  // ✅ Tampilkan data ke console
  console.log("=== Data Mahasiswa Baru ===");
  console.log("Nama Lengkap :", nama);
  console.log("NIM          :", nim);
  console.log("Semester     :", semester);
  console.log("Program Studi:", prodi);
  console.log("Email        :", email);
  console.log("------------------------------");
  console.log("Jumlah total data saat ini:", dataMahasiswa.length);
  console.log("Semua data mahasiswa:", dataMahasiswa);
  console.log("==============================\n");

  // Tambahkan data ke tabel HTML
  const row = tabel.insertRow();
  row.innerHTML = `
    <td>${nomor++}</td>
    <td>${nama}</td>
    <td>${nim}</td>
    <td>${semester}</td>
    <td>${prodi}</td>
    <td>${email}</td>
  `;

  // Update jumlah data mahasiswa
  updateJumlah();

  // Tampilkan pesan sukses
  infoText.textContent = "✅ Data berhasil dikirim dan ditambahkan ke tabel!";

  // Kosongkan form
  form.reset();

  // Hapus pesan setelah 3 detik
  setTimeout(() => infoText.textContent = "", 3000);
});

// Fungsi untuk update jumlah data
function updateJumlah() {
  jumlahInfo.textContent = `📦 Jumlah data mahasiswa: ${dataMahasiswa.length}`;
}