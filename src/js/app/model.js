import THREE from 'three';

export default class Model {
  constructor(path, scene) {
    this.loader = new THREE.JSONLoader();
    this.load(path, scene);
  }

  load(path, scene) {
    var self = this;
    // load a resource
    this.loader.load(
      // resource URL
      path,
      // Function when resource is loaded
      function ( geometry, materials ) {
        //TODO: load material from material.js
        //geometry.mergeVertices();
			  //geometry.computeFaceNormals();
			  geometry.computeVertexNormals();
        var material = new THREE.MeshLambertMaterial({});
        self.object = new THREE.Mesh( geometry, material );
        scene.add(self.object);
      }
    );
  }
}
