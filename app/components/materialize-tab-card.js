import Ember from 'ember';

export default Ember.Component.extend({
	didRender () {
		this.$('ul.tabs').tabs();
	}
});
