class Muros_limite {

  constructor(scene, posZ, long) {

    //Muros laterales
    this.crearMuro(scene, posZ, long);
    this.crearMuro(scene, -posZ, long);

    //Muro del principio, a la izquerda del comienzo dle juego
    var geometry = new THREE.BoxGeometry(0.5, long, 4);
    var material = new THREE.MeshPhongMaterial({ color: 0xff0000, opacity: 0, transparent: true });

    var box = new Physijs.BoxMesh(
      geometry,
      Physijs.createMaterial(
        material,
        0.1, 0.9),
      0.0
    );
    box.position.set(-5.25, long / 2, 0);
    scene.add(box);


  }

  crearMuro(scene, posZ, long) {

    var geometry = new THREE.BoxGeometry(long, long/2, 0.5);
    var material = new THREE.MeshPhongMaterial({ color: 0xffffff, opacity: 0, transparent: true });

    var box = new Physijs.BoxMesh(
      geometry,
      Physijs.createMaterial(
        material,
        0.1, 0.9),
      0.0
    );


    box.position.set(long / 2 -5, long / 4, posZ);

    // Las figuras con física deben estar DIRECTAMENTE colgadas en la escena.
    scene.add(box);
  }

}