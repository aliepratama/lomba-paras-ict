import books from "./books.js";

class DataSource {
    static getTrend(limit = 5){
        return new Promise((resolve, reject) => {
            const trendBooks = books.toSorted((first, second) => first.trend - second.trend).slice(0, limit);
            if(trendBooks.length){
                resolve(trendBooks);
            } else {
                reject(new Error('Data buku kosong!'));
            }
        });
    }
}

export default DataSource;
