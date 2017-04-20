import Ember from 'ember';

export default Ember.Component.extend({
	didRender () {
		this.$('.carousel.carousel-slider').carousel({fullWidth: true});
	}
});
