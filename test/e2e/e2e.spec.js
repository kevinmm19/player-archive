import test from 'ava';
import { Nuxt, Builder } from 'nuxt';
import { resolve } from 'path';

let nuxt = null;

test.before('Init Nuxt.js', async t => {
    const rootDir = resolve(__dirname, '../../');
    let config = {};
    try { 
        config = require(resolve(rootDir, 'nuxt.config.js')) 
    } catch (e) {}
    config.rootDir = rootDir;
    config.dev = false;
    config.mode = 'universal';
    nuxt = new Nuxt(config);
    await new Builder(nuxt).build();
    nuxt.listen(4000, 'localhost');
});

test('Renders the profile page of Fabio', async t => {
    const { window } = await nuxt.renderRoute('/players/profile-111', {});
    const search = window.document.querySelector('.search__input');
    search.text('fabio');
    const playerFound = window.document.querySelector('.player');
    t.not(playerFound, null);
});

test('Renders the player found section for Fabio', async t => {
    const window = await nuxt.renderAndGetWindow('http://localhost:4000/');
    const element = window.document.querySelector('.stats__item');
    t.not(element, null);
});

test.after('Closing server', t => {
    nuxt.close();
});