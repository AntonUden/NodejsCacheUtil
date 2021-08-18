# NodejsCacheUtil
A utility to cache files from a websever to the local disk in nodejs

## Example way of using the library
```javascript
const cacheUtil = require("cacheutil");

// A sha256 hash can be provided to prevent downloading the image if the file already exists with the provided hash
cacheUtil.cacheFile("https://zeeraa.net/my_cat.jpg", "my_cat.jpg", "AC34C6D555D246BEDFDE71C6FCBCAF564AA449548F7979A3550FDE33BD36A9BC").then((result) => {
  // Returns true if the image was downloaded and false if the hash is matching the provided one
	console.log(result);
}).catch(err => {
  // Something went wrong
	console.error(err);
});
```
