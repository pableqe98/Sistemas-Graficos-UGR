
// En este archivo se comenta principalmente lo relacionado con el  Coche
// Para el resto de comentarios mirar el otro ejemplo de física

class MyPhysiScene extends Physijs.Scene {
  constructor(unRenderer) {
    super();
    this.setGravity(new THREE.Vector3(0, -10, 0));

    /////////////MENU/////////////
    var instructions = document.getElementById('instructions');

    instructions.addEventListener('click', function () {

      instructions.style.display = 'none';

    }, false);
    ////////////////////////////////


    this.longitudMapa = 500;

    //Se añade la luz
    this.createLights();

    // Tendremos una cámara que sigue la personaje (gracias al update)
    this.createCamera(unRenderer);

    // IMPORTANTE: Los elementos que se desee sean tenidos en cuenta en la FISICA deben colgar DIRECTAMENTE de la escena. NO INDIRECTAMENTE.
    // Un suelo 
    this.createGround();

    //Obstaculos como cajas, muros...
    this.obstaculos = new Obstaculos(this);

    //Muros que me permiten no salirme del eje X
    this.muros_proteccion = new Muros_limite(this, 1, this.longitudMapa);

    //Fuego con el que mueres
    this.fuego = new Fuego(this, this.obstaculos);

    //Enemigos básicos
    this.enemigos = new EnemigoBasico(this, this.obstaculos);

    //Rampas
    this.rampas = new Rampas(this);

    //Aumento de vidas
    this.sumaVidas = new LiveUp(this);

    // this.corazon = new Corazon();  

    // Personaje
    this.ball = new Ball(this);



  }

  // Se controla las acciones que puede hacer nuestro personaje

  ballLeft(onOff) {

    this.ball.left = onOff;

  }

  ballRight(onOff) {

    this.ball.right = onOff;

  }

  ballJump(salto) {
    if (this.ball.body.isGrounded && salto) {
      this.ball.jump = true;
      this.ball.body.isGrounded = false;

    }
    else if (!salto) {
      this.ball.jump = false;
    }
  }

  createCamera(unRenderer) {
    // Para crear una cámara le indicamos
    //   El ángulo del campo de visión en grados sexagesimales
    //   La razón de aspecto ancho/alto
    //   Los planos de recorte cercano y lejano
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    // También se indica dónde se coloca
    this.camera.position.set(3, 6, 18);
    // Y hacia dónde mira
    var look = new THREE.Vector3(0, 0, 0);
    this.camera.lookAt(look);
    this.add(this.camera);

  }

  createGround() {
    var geometry = new THREE.BoxGeometry(this.longitudMapa, 20, 8);


    //var texture = new THREE.TextureLoader().load('../imgs/grass.jpg');

    var loader = new THREE.TextureLoader();

    var texture = loader.load('../imgs/ground.png', function (texture) {

      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(150, 2);

    });

    var material = new THREE.MeshPhongMaterial({ map: texture });
    var physiMaterial = Physijs.createMaterial(material, 1, 0.1);

    var ground = new Physijs.BoxMesh(geometry, physiMaterial, 0);
    ground.position.set(this.longitudMapa / 2 - 5, -10, 0);

    var that = this;
    ground.addEventListener('collision',
      function (o, v, r, n) {
        // Si el objeto que colisiona con el suelo es el personaje, puedo saltar
        if (o.personaje) {
          that.ball.body.isGrounded = true;
        }
      }
    );

    this.add(ground);

  }

  createLights() {
    // Se crea una luz ambiental, evita que se vean complentamente negras las zonas donde no incide de manera directa una fuente de luz
    // La luz ambiental solo tiene un color y una intensidad
    // Se declara como   var   y va a ser una variable local a este método
    //    se hace así puesto que no va a ser accedida desde otros métodos
    var ambientLight = new THREE.AmbientLight(0xccddee, 0.35);
    // La añadimos a la escena
    this.add(ambientLight);

    // Se crea una luz focal que va a ser la luz principal de la escena
    // La luz focal, además tiene una posición, y un punto de mira
    // Si no se le da punto de mira, apuntará al (0,0,0) en coordenadas del mundo
    // En este caso se declara como   this.atributo   para que sea un atributo accesible desde otros métodos.
    //     this.spotLight = new THREE.SpotLight( 0xffffff, this.guiControls.lightIntensity );
    this.spotLight = new THREE.SpotLight(0xffffff, 0.5);
    this.spotLight.position.set(60, 60, 40);
    this.add(this.spotLight);
  }

  getCamera() {
    // En principio se devuelve la única cámara que tenemos
    // Si hubiera varias cámaras, este método decidiría qué cámara devuelve cada vez que es consultado
    return this.camera;
  }

  setCameraAspect(ratio) {
    this.camera.aspect = ratio;
    this.camera.updateProjectionMatrix();
  }

  reiniciarMuerte() {
    var loader = new THREE.TextureLoader();
    
    this.ball.body.vidas = 3;
    this.ball.body.primeraZona = true;
    this.ball.body.segundaZona = false;
    this.ball.body.position.set(0, 5, 0);
    var createTexture = loader.load('../imgs/checkoint.jpg', function (createTexture) {
      createTexture.wrapS = createTexture.wrapT = THREE.RepeatWrapping;
      createTexture.offset.set(0, 0);
      createTexture.repeat.set(1, 1);
    });

    this.obstaculos.box.material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: createTexture });
    this.ball.body.primera = true;
  }

  update() {
    // Se actualizan los elementos de la escena para cada frame



    this.camera.position.x = this.ball.body.position.x - 5;
    this.camera.position.y = this.ball.body.position.y + 5;

    var look = new THREE.Vector3(this.ball.body.position.x, this.ball.body.position.y, this.ball.body.position.z);


    this.camera.lookAt(look);

    this.obstaculos.update();
    this.sumaVidas.update();

    this.ball.update();
    this.simulate();
  }
}

