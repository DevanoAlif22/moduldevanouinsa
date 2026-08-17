Judul : Deployment

sub modul 1 : Deploy dengan Github
gambar.png

Berikut adalah panduan praktis langkah demi langkah untuk melakukan instalasi Git, inisialisasi repositori, hingga mempublikasikan website prototipe Anda secara online melalui GitHub Pages:

- **Langkah 1: Instalasi Git**
  Unduh installer Git resmi untuk sistem operasi Anda di [https://git-scm.com/downloads](https://git-scm.com/downloads). Jalankan proses instalasi hingga selesai, dan verifikasi dengan mengetikkan perintah `git --version` di Terminal atau Command Prompt Anda.

- **Langkah 2: Konfigurasi Identitas Git**
  Hubungkan identitas lokal Anda dengan akun GitHub dengan mengetikkan perintah berikut di terminal:
  ```bash
  git config --global user.name "Nama Lengkap Anda"
  git config --global user.email "email_anda@example.com"
  ```

- **Langkah 3: Inisialisasi dan Commit Pertama**
  Masuk ke direktori folder proyek Anda di terminal, lalu jalankan inisialisasi repositori lokal dan buat commit pertama:
  ```bash
  git init
  git add .
  git commit -m "Inisiasi commit pertama proyek modul ajar"
  ```

- **Langkah 4: Upload dan Publish di GitHub Pages**
  Buat repositori baru di akun GitHub Anda, lalu jalankan perintah berikut untuk mengunggah berkas:
  ```bash
  git remote add origin https://github.com/username_anda/nama_repositori.git
  git branch -M main
  git push -u origin main
  ```
  Setelah berhasil diunggah, buka tab **Settings** -> **Pages** pada repositori GitHub Anda, pilih Source **Deploy from a branch**, atur branch ke **main / root**, lalu simpan untuk mengaktifkan URL website online Anda.