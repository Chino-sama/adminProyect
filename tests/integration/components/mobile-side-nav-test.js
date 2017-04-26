import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mobile-side-nav', 'Integration | Component | mobile side nav', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mobile-side-nav}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mobile-side-nav}}
      template block text
    {{/mobile-side-nav}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
