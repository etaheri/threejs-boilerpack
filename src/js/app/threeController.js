import THREE from 'three';
import Camera from './camera';
import Renderer from './renderer';
import Geometry from './geometry';
import Light from './light';
import Controls from './controls';
import Model from './model';
import Material from './material';

export default class ThreeController {

  constructor (container) {
    this.container = container;
    this.elements = [];
    this.scene = new THREE.Scene();
    this.camera = new Camera(container);
    this.renderer = new Renderer(container);
    this.light = new Light(this.scene);
    this.controls = new Controls(this.camera.camera);

    // add cube to scene
    this.addGeometry(new Geometry());

    //this.model = new Model('/assets/models/Ortho5_export_4.4.json', this.scene)
    console.log(this.model.object);

    this.render();
  }

  addGeometry(geo) {
    //keep track of geo
    this.elements.push(geo);
    geo.place(this.scene);
  }

  addLight(light) {
    light.place(this.scene);
  }

  render() {
    this.renderer.render( this.scene, this.camera.camera );
    this.controls.controls.update();
    requestAnimationFrame( this.render.bind(this));
  }

}
