import THREE from 'three';
import Camera from './camera';
import Renderer from './renderer';
import Geometry from './geometry';

export default class ThreeController {

  constructor (container) {
    this.container = container;

    this.elements = [];
    this.scene = new THREE.Scene();
    this.camera = new Camera(container);
    this.renderer = new Renderer(container);
    this.addGeometry(new Geometry());
    this.render();
  }

  addGeometry(geo) {
    geo.place(this.scene);
  }

  render() {
    this.renderer.render( this.scene, this.camera.camera );
    requestAnimationFrame( this.render.bind(this));
  }

}
