const cacheUtil = require("./CacheUtil");

cacheUtil.cacheFile("https://zeeraa.net/my_cat.jpg", "my_cat.jpg", "AC34C6D555D246BEDFDE71C6FCBCAF564AA449548F7979A3550FDE33BD36A9BC").then((result) => {
	console.log(result);
}).catch(err => {
	console.error(err);
});