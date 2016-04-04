import THREE from 'three';

export default class Camera {
  constructor(container) {
    this.container = container;
    this.camera = new THREE.PerspectiveCamera();
    this.camera.position.set(0, 0, 500)
    this.camera.position.z = 5;
    window.addEventListener( 'resize', this.updateSize.bind(this), false );
    this.updateSize();
  }

  updateSize(container) {
    this.camera.aspect = this.container.offsetWidth / this.container.offsetHeight;
    this.camera.updateProjectionMatrix();
  }

  // get camera() {
  //   return this.camera;
  // }

}
