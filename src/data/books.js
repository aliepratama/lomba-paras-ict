const randomInt = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

const generateIsbn = () => {
    return String([...Array(4)].map(() => randomInt(100, 999))).replace(/,/g, '-').slice(0, -2);
}

const books = [
    {
        title: 'Filosofi Teras: Filsafat Yunani-Romawi Kuno untuk Mental Tangguh Masa Kini',
        author: 'Henry Manampiring',
        category: 'Filsafat',
    },
    {
        title: 'Bintang',
        author: 'Tere Liye',
        category: 'Fiksi',
    },
    {
        title: 'Metode Penelitian: Kuantitatif, Kualitatif, dan Penelitian Gabungan (Edisi Pertama)',
        author: 'Prof. Dr. A. Muri Yusuf, M.Pd.',
        category: 'Sains',
    },
    {
        title: 'Metodologi Penelitian Hukum Islam (Edisi Revisi)',
        author: 'Dr. Faisal Ananda Arfa, M.A. dan Dr. Watni Marpaung, M.A.',
        category: 'Agama',
    },
    {
        title: 'Millennials and i-Generation Life',
        author: 'Destiana Rahmawati',
        category: 'Sosial',
    },
    {
        title: 'Atomic Habits: Perubahan Kecil yang memberikan hasil luar biasa',
        author: 'James Clear',
        category: 'Umum',
    },
    {
        title: 'Kursus Singkat Bahasa Inggris Bisnis',
        author: 'N.S Bramadi',
        category: 'Bahasa',
    },
    {
        title: 'Filsafat Moral: Pergumulan Etis Keseharian Hidup Manusia',
        author: 'Dr. Agustinus W. Dewantara, S.S., M.Hum',
        category: 'Filsafat',
    },
    {
        title: 'Rekayasa dan Teknologi',
        author: 'Muhammad Ramdhan Adi',
        category: 'Teknologi',
    },
    {
        title: 'Ensiklopedi Sains',
        author: 'Abu Nuha Hanifah',
        category: 'Sains',
    },
];
books.map((val, index) => {
        val.id = index + 1;
        val.image = `./book${val.id}.png`;
        val.randomTrend = Math.random();
        val.rating = randomInt(41, 49) / 10;
        return val;
    })
    .toSorted((a, b) => a.randomTrend - b.randomTrend)
    .forEach((val, index) => {
        val.isbn = generateIsbn();
        val.trend = index + 1;
    });

export default books;
