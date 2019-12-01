const fs = require('fs-extra');

(async() => {

    const src = './docs/index.html';
    const copy = './docs/404.html';

    await fs.remove(copy);
    await fs.copy(src, copy);

})();