import THREE from 'three';

export default class Renderer {
  constructor(container) {
    this.renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
    this.renderer.setClearColor( 0x000000, 0 );
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.renderer.domElement.style.position = "fixed";
    container.appendChild( this.renderer.domElement );
    this.renderer.gammaInput = true;
    this.renderer.gammaOutput = true;
    this.renderer.shadowMap.enabled = true;
    window.addEventListener( 'resize', this.updateSize.bind(this), false );

    this.updateSize();

    document.addEventListener("DOMContentLoaded", this.updateSize.bind(this), false);

  }
  updateSize() {
    this.renderer.setSize( window.innerWidth, window.innerHeight );
  }

  render(scene, camera) {
    this.renderer.render(scene, camera);
  }
}
