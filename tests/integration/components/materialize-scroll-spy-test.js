import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('materialize-scroll-spy', 'Integration | Component | materialize scroll spy', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{materialize-scroll-spy}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#materialize-scroll-spy}}
      template block text
    {{/materialize-scroll-spy}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
