# Remotion Motion Graphics Video Generator (MP4)

Proyek ini adalah template **Node.js + TypeScript + Remotion** untuk membuat video motion graphics berdurasi **10 detik**, **60 FPS**, resolusi **1920x1080**, lalu ekspor ke MP4.

## 1) Prasyarat

- Node.js 18+ (disarankan Node.js 20 LTS)
- npm 9+

Cek versi:

```bash
node -v
npm -v
```

## 2) Instalasi dari Nol

```bash
# 1. Masuk ke folder project
cd /workspace/1-april

# 2. Install dependencies
npm install

# 3. Jalankan Remotion Studio (preview timeline)
npm run dev
```

## 3) Struktur Folder

```text
.
├── package.json
├── remotion.config.ts
├── tsconfig.json
└── src
    ├── index.ts
    ├── Root.tsx
    ├── components
    │   ├── GoldCoinSpin.tsx
    │   ├── LoadingBar.tsx
    │   ├── SearchBarMotion.tsx
    │   └── TextReveal.tsx
    ├── compositions
    │   └── MainComposition.tsx
    └── utils
        └── animation.ts
```

## 4) Penjelasan Arsitektur

- `src/index.ts` → Entry Remotion (`registerRoot`)
- `src/Root.tsx` → Mendaftarkan komposisi utama dan video specs
- `src/compositions/MainComposition.tsx` → Scene utama video
- `src/components/GoldCoinSpin.tsx` → Komponen animasi koin emas berputar (spin)
- `src/components/LoadingBar.tsx` → Komponen animasi progress bar
- `src/components/TextReveal.tsx` → Komponen teks fade + slide
- `src/components/SearchBarMotion.tsx` → Komponen search bar dengan animasi typing + cursor blink
- `src/utils/animation.ts` → Utility reusable untuk easing/progress/fade

## 5) Video Specs (Sesuai Requirement)

Ditetapkan di `Root.tsx`:

- Durasi: `600` frame (`10 detik × 60 fps`)
- FPS: `60`
- Resolusi: `1920 × 1080`

## 6) Render ke MP4

### Render default

```bash
npm run render
```

Output: `out/video.mp4`

### Render kualitas tinggi (opsional)

```bash
npm run render:pro
```

Contoh opsi yang dipakai:

- `--codec=h264`
- `--crf=18` (lebih kecil = kualitas lebih baik, file lebih besar)
- `--audio-codec=aac`

## 7) Kustomisasi Cepat

- Ubah teks: edit prop `text` di `MainComposition.tsx`
- Ubah speed loading bar: ubah `startFrame` / `endFrame` di `LoadingBar`
- Ubah easing: edit utility `smoothProgress` di `utils/animation.ts`
- Ubah durasi global: `durationInFrames` di `Root.tsx`

## 8) Catatan Production-Ready

- Komponen dipisah berdasarkan tanggung jawab
- Utility animasi reusable untuk menghindari duplikasi
- Seluruh animasi memakai `interpolate`, `useCurrentFrame`, dan easing
- Struktur siap dikembangkan untuk multi-scene video generator

## 9) Import Lebih Mudah (Alias + Barrel Exports)

Supaya import lebih rapi, project ini mendukung:

- Alias `@` → `src`
- Barrel exports (`index.ts`) di folder `components`, `compositions`, dan `utils`

Contoh sebelum:

```ts
import {LoadingBar} from '../components/LoadingBar';
import {TextReveal} from '../components/TextReveal';
```

Contoh sesudah:

```ts
import {LoadingBar, TextReveal} from '@/components';
```

Ini membuat penambahan komponen "motion" baru jauh lebih mudah karena kamu cukup export dari `src/components/index.ts`, lalu import dari satu tempat.


## 11) Mode Ringan (opsional)

Kalau ingin render lebih ringan / lebih cepat:

- Gunakan background statis (tanpa animasi gradient per frame)
- Hapus efek visual mahal seperti `backdrop-filter` dan bayangan besar
- Sederhanakan komponen loading bar (tanpa shimmer layer)

Perubahan ini sudah diterapkan pada template saat ini agar lebih hemat proses render.


## 12) Motion Baru: Gold Coin Spin

Komponen `GoldCoinSpin` sudah ditambahkan ke scene utama.

Fitur animasi:
- Koin berputar terus (`spinSpeed`)
- Efek ketebalan koin via `scaleX` saat sisi koin menghadap kamera
- Entrance halus dengan fade + slide
