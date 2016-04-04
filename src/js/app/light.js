import THREE from 'three';

export default class Light {

    constructor(scene) {
      this.PointLightRight = new THREE.PointLight(0xff3bff, 2, 200);
      this.PointLightRight.position.set(100, 100, 100);
      scene.add(this.PointLightRight);

      this.PointLightLeft = new THREE.PointLight(0xff3bff, 1, 200);
      this.PointLightLeft.position.set(-100, 100, -100);
      scene.add(this.PointLightLeft);
    }
}
