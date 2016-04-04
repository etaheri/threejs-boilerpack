import THREE from 'three';
import OrbitControls from 'three-orbit-controls';

export default class Controls {

    constructor(camera) {
        let orbitControls = OrbitControls(THREE);
        this.controls = new orbitControls(camera)
        this.controls.minDistance = 5;
    		this.controls.maxDistance = 10;
        this.controls.minPolarAngle = Math.PI / 3; // radians
    		this.controls.maxPolarAngle = Math.PI / 2; // radians
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.2;
    }

}
