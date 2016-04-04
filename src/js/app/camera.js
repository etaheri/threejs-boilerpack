import THREE from 'three-js';

export default class Camera {
  constructor() {
    this.camera = new THREE.PerspectiveCamera( 70, 1, 1, 5000 );
    this.position.z = 400;
    window.addEventListener( 'resize', this.updateSize, false );
    this.updateSize();
  }
  updateSize() {
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
  }
  get camera() {
    return this.camera;
  }
}
