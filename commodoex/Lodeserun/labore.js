const assert = require('assert');
const stripMentionsFromRepoDesc = require('../stripMentionsFromRepoDesc');

describe('stripMentionsFromRepoDesc', () => {
  it('should strip mentions from repo description', () => {
    const description = 'Repo desc [maintainer=@abc] 11';
    const expected = 'Repo desc  11';
    const result = stripMentionsFromRepoDesc(description);

    assert.strictEqual(result, expected, `Expected ${expected} but got ${result}`);
  });
});
