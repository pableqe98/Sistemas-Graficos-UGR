
class Ball {
  // Parámetros:
  // scene, la escena
  constructor(scene) {

    var texture = new THREE.TextureLoader().load('../imgs/ball.jpg');

    var ball_material = Physijs.createMaterial(
      new THREE.MeshLambertMaterial({ map: texture }),
      .9, // alta friccion
      .9 // alto rebote
    );

    // se crea la esfera
    var geom = new THREE.SphereGeometry(0.5, 10, 10);
    this.body = new Physijs.SphereMesh(geom, ball_material, 1.5);
    this.body.position.set(0, 3, 0);

    // se añade el cuerpo a la escena
    scene.add(this.body);

    //Vida
    this.body.vidas = 3;


    //Movimientos
    this.jump = false;
    this.right = false;
    this.left = false;

    //Colisiones/salto
    this.body.personaje = true;
    this.body.isGrounded = false;
    this.body.iteraciones = 0;
    this.body.impulso = 0;
    this.body.primera = true;

    //En qué parte del nivel me encuentro/dónde voy a reaparecer
    this.body.primeraZona = true;
    this.body.segundaZona = false;
  }



  update() {

    if (this.body.position.x > 456) {
      var win = document.getElementById('win');
      win.style.display = 'inline';
      win.style.paddingLeft ='1%';
      win.style.paddingTop ='20%';
      
    }

    if (this.right) {


      var fuerza = 0.4;
      var offset = new THREE.Vector3(1, 0, 0);
      var effect = offset.clone().normalize().multiplyScalar(fuerza);

      this.body.applyImpulse(effect, offset);

    } else if (this.left) {


      var fuerza = 0.4;
      var offset = new THREE.Vector3(-1, 0, 0);

      var effect = offset.clone().normalize().multiplyScalar(fuerza);

      this.body.applyImpulse(effect, offset);

    }

    if (this.jump) {


      var fuerza = 12;
      var offset = new THREE.Vector3(0, 1, 0);

      var effect = offset.clone().normalize().multiplyScalar(fuerza);

      this.body.applyImpulse(effect, offset);
      // this.body.isGrounded = false;
      //this.body.iteraciones += 1;
      //if (this.body.iteraciones >= 5) {
      // this.body.iteraciones = 0;
      this.jump = false;
      //}

    }

  }
};

function actualizarVidas(v) {
  var vidas = document.getElementById('contadorVidas');
  vidas.innerHTML = '';
  var img;
  for (var i = 0; i < v; i++) {
    img = document.createElement('img');
    img.setAttribute("src", '../imgs/corazon.png');
    vidas.appendChild(img);
  }
}