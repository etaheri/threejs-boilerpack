import THREE from 'three';

export default class Geometry {

    constructor() {
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshLambertMaterial({color: 0x666666});
        this.mesh = new THREE.Mesh( geometry, material );
    }

    place(scene) {
        scene.add(this.mesh);
    }

    render() {
        //update
    }

}
