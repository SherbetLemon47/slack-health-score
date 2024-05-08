const child_process = require('child_process');

module.exports = {
  calc: async function calculateScore(/* core */) {
    // TODO: wire up action inputs
    module.exports.grep('js', 'node_modules');
    // TODO: wire up action outputs
  },
  grep: async function grepForProblematicComments(ext, ignore) {
    let find = `find . -name "*.${ext}"`;
    if (ignore) {
      find += ` -not -path "*/${ignore}/*"`;
    }
    find += ' -exec grep -E \'TODO|HACK|FIXME\' {} \\; | wc -l';
    let count = 0;
    console.log(find);
    try {
      const out = child_process.execSync(find);
      count = parseInt(out.toString().trim(), 10);
    } catch (e) {
      // TODO: handle error
    }
    return count;
  },
};
