import Ember from 'ember';

export default Ember.Component.extend({
	didRender() {
		this.$(".button-collapse").sideNav();
	}
});
