import DataSource from "../src/data/datasource"

console.log('DataSource getTrend default length is 5')
console.log(DataSource.getTrend().length === 5)

console.log('DataSource getKeyword by known keyword are shown')
console.log(DataSource.getKeyword('Filosofi Teras').length > 0)

console.log('DataSource getKeyword by random capitalization known keyword are shown')
console.log(DataSource.getKeyword('FIlOsoFi tErAS').length > 0)

console.log('DataSource getKeyword by typo whitespace known keyword are shown')
console.log(DataSource.getKeyword('FIlOsoFi  tErAS').length > 0)

console.log('DataSource getKeyword by sub keyword are shown')
console.log(DataSource.getKeyword(' teras').length > 0)

console.log('DataSource getNewest at least 5')
console.log(DataSource.getNewest(100).length > 5)