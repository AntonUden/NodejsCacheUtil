const Axios = require("axios");
const fs = require("fs");
const sha256File = require('sha256-file');

exports.cacheFile = function (url, filePath, sha256 = null) {
	return new Promise(async function (resolve, reject) {
		if (sha256 != null) {
			if (fs.existsSync(filePath)) {
				let hash = sha256File(filePath);

				if (hash == sha256.toLocaleLowerCase()) {
					resolve(false);
					return;
				} else {
					fs.unlinkSync(filePath);
				}
			}
		}

		try {
			const response = await Axios({
				url,
				method: 'GET',
				responseType: 'stream'
			});

			const writer = fs.createWriteStream(filePath)

			response.data.pipe(writer)

			writer.on('finish', function () {
				resolve(true);
			});

			writer.on('error', (err) => {
				reject(err)
			});
		} catch (err) {
			reject(err);
			return;
		}
	});
}