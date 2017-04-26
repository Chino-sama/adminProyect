import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path:'/' });
  this.route('unidad1');
  this.route('unidad2');
  this.route('unidad3');
  this.route('unidad4');
  this.route('reflexion');
});

export default Router;
