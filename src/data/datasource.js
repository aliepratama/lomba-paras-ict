import books from "./books.js";

class DataSource {
    static getTrend(limit = 5){
        return books.toSorted((first, second) => first.trend - second.trend).slice(0, limit);
    }
    static getPopular(limit = 5, asc = true, filter = 'Semua buku'){
        if(filter === 'Semua buku') {
            return asc ? 
            books.toSorted((first, second) => first.trend - second.trend)
                .slice(0, limit)
            : books.toSorted((first, second) => second.trend - first.trend)
                .slice(0, limit)
        }
        return asc ? 
        books.toSorted((first, second) => first.trend - second.trend)
            .filter((val) => val.category == filter)
            .slice(0, limit)
        : books.toSorted((first, second) => second.trend - first.trend)
            .filter((val) => val.category == filter)
            .slice(0, limit)
    }
    static getRating(limit = 5, asc = true, filter = 'Semua buku'){
        if(filter === 'Semua buku') {
            return asc ? 
            books.toSorted((first, second) => first.rating - second.rating)
                .slice(0, limit)
            : books.toSorted((first, second) => second.rating - first.rating)
                .slice(0, limit)
        }
        return asc ? 
        books.toSorted((first, second) => first.rating - second.rating)
            .filter((val) => val.category == filter)
            .slice(0, limit)
        : books.toSorted((first, second) => second.rating - first.rating)
            .filter((val) => val.category == filter)
            .slice(0, limit);
    }
    static getNewest(limit = 5, asc = true, filter = 'Semua buku'){
        if(filter === 'Semua buku') {
            return asc ? 
            books.toSorted((first, second) => first.id - second.id)
                .slice(0, limit)
            : books.toSorted((first, second) => second.id - first.id)
                .slice(0, limit)
        }
        return asc ? 
        books.toSorted((first, second) => first.id - second.id)
            .filter((val) => val.category == filter)
            .slice(0, limit)
        : books.toSorted((first, second) => second.id - first.id)
            .filter((val) => val.category == filter)
            .slice(0, limit);
    }
    static getKeyword(keyword){
        return books.filter((val) => 
            String(val.title.toLowerCase())
            .includes(String(keyword).toLowerCase()));
    }
}

export default DataSource;
