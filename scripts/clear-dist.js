const fs = require('fs-extra');

(async() => {

    const src = './dist';
    await fs.remove(src);
})();