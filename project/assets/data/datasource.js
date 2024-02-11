import books from "./books.js";

class DataSource {
    static getTrend(limit = 5){
        return books.toSorted((first, second) => first.trend - second.trend).slice(0, limit);
    }
}

export default DataSource;
