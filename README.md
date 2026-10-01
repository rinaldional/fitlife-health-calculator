# FitLife Health Calculator

Website sederhana untuk menghitung indikator kesehatan dasar berdasarkan input pengguna.

## Fitur

- Input jenis kelamin, usia, berat badan, tinggi badan, dan aktivitas harian
- Menghitung nilai BMI
- Menampilkan kategori BMI: Underweight, Normal, Overweight, atau Obese
- Menghitung estimasi berat badan ideal
- Menghitung estimasi kebutuhan kalori harian
- Tampilan responsif untuk desktop dan mobile

## Struktur Folder

```text
fitlife-health-calculator/
├── index.html
├── style.css
├── script.js
├── docs/
│   └── screenshot.png
├── .gitignore
└── README.md
```

## Cara Menjalankan di Laptop

1. Download atau clone repository ini.
2. Buka folder project.
3. Klik dua kali file `index.html`, atau buka dengan Live Server di VS Code.

## Rumus yang Digunakan

### BMI

```text
BMI = berat badan / (tinggi badan dalam meter x tinggi badan dalam meter)
```

Kategori BMI:

- Di bawah 18.5 = Underweight
- 18.5 sampai 24.9 = Normal
- 25 sampai 29.9 = Overweight
- 30 ke atas = Obese

### Berat Badan Ideal

```text
Berat ideal target = 22 x tinggi badan dalam meter x tinggi badan dalam meter
```

### Estimasi Kalori Harian

Menggunakan rumus Mifflin-St Jeor untuk BMR, lalu dikalikan faktor aktivitas.

Laki-laki:

```text
BMR = 10 x berat + 6.25 x tinggi - 5 x usia + 5
```

Perempuan:

```text
BMR = 10 x berat + 6.25 x tinggi - 5 x usia - 161
```

## Cara Upload ke GitHub

```bash
git init
git add .
git commit -m "Create FitLife health calculator"
git branch -M main
git remote add origin https://github.com/USERNAME/fitlife-health-calculator.git
git push -u origin main
```

Ganti `USERNAME` dengan username GitHub kamu.

## Cara Mengaktifkan GitHub Pages

1. Buka repository di GitHub.
2. Masuk ke **Settings**.
3. Pilih **Pages**.
4. Pada bagian **Branch**, pilih `main` dan folder `/root`.
5. Klik **Save**.
6. Link website akan muncul setelah proses deploy selesai.
