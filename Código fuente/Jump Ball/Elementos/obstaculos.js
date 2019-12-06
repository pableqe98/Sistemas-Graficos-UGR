class Obstaculos {

  constructor(scene) {
    this.box;

    this.crearObstaculo(scene, 2, 2, 2, 10, 0, '../imgs/box.jpg', 1, 1);
    this.crearObstaculo(scene, 2, 2, 2, 15, 0, '../imgs/box.jpg', 1, 1);
    this.crearSliderGiro(scene, 1, 5, 3, 10, 7, '../imgs/metal.jpg', 1, 1, false, 90 * Math.PI / 180, 1500);

    this.crearObstaculo(scene, 2, 9, 2, 23, 0, '../imgs/brick.png', 2, 3);
    this.crearObstaculo(scene, 2, 30, 2, 30, 3, '../imgs/brick.png', 2, 10);



    this.crearSliderGiro(scene, 0.5, 9, 3, 79, 9.5, '../imgs/metal.jpg', 1, 1, true, 2 * Math.PI, 3500);

    this.crearObstaculo(scene, 10, 5, 3, 80, 0, '../imgs/brick.png', 8, 3);
    this.crearObstaculo(scene, 10, 5, 3, 80, 14, '../imgs/brick.png', 8, 3);

    this.crearSliderVertical(scene, 8, 0.5, 3, 100, 7.5, '../imgs/metal.jpg', 7, 1, 3, 2000, false);

    this.crearObstaculo(scene, 9, 0.6, 3, 137, 2.8, '../imgs/brick.png', 5, 1);

    this.crearBisagra(scene, 160, '../imgs/metal.jpg');
    this.crearBisagra(scene, 167, '../imgs/metal.jpg');
    this.crearBisagra(scene, 174, '../imgs/metal.jpg');

    //Checkpoint comienzo Zona 2
    this.crearObstaculo(scene, 2, 2, 2, 190, 0, '../imgs/checkoint.jpg', 1, 1, true);

    this.crearObstaculo(scene, 2, 30, 2, 198, 3, '../imgs/brick.png', 2, 10);
    this.crearObstaculo(scene, 2, 15, 2, 206, 0, '../imgs/brick.png', 2, 6);

    this.crearObstaculo(scene, 2, 0.4, 2, 204, 2.5, '../imgs/brick.png', 1, 0.5);
    this.crearObstaculo(scene, 2, 0.4, 2, 200, 5, '../imgs/brick.png', 1, 0.5);
    this.crearObstaculo(scene, 2, 0.4, 2, 204, 7.5, '../imgs/brick.png', 1, 0.5);
    this.crearObstaculo(scene, 2, 0.4, 2, 200, 10, '../imgs/brick.png', 1, 0.5);
    this.crearObstaculo(scene, 2, 0.4, 2, 204, 13, '../imgs/brick.png', 1, 0.5);

    this.crearObstaculo(scene, 7, 1, 2, 220, 9, '../imgs/brick.png', 1, 0.3);
    this.crearObstaculo(scene, 7, 1, 2, 233, 4, '../imgs/brick.png', 1, 0.3);

    this.crearObstaculo(scene, 2, 1, 2, 235.5, 5, '../imgs/brick.png', 1, 0.3);
    this.crearCatapulta(scene, 2, 0.3, 235.5, 6, '../imgs/jump.jpg');

    this.crearObstaculo(scene, 7, 1, 2, 252, 13, '../imgs/brick.png', 1, 0.3);

    this.crearSliderHorizontal(scene, 8, 0.8, 3, 275, 8, '../imgs/metal.jpg', 1, 1, 11, 2700);

    this.crearObstaculo(scene, 10, 9, 8, 311, 0, '../imgs/brick.png', 8, 4);

    this.crearObstaculo(scene, 2, 30, 2, 325, 3, '../imgs/brick.png', 2, 10);

    this.crearPendulo(scene, 1, 6, 1, 330, 6, '../imgs/wood.jpg', Math.PI / 4, 1000);
    this.crearPendulo(scene, 1, 6, 1, 338, 6, '../imgs/wood.jpg', Math.PI / 4, 1500);
    this.crearPendulo(scene, 1, 6, 1, 346, 6, '../imgs/wood.jpg', Math.PI / 4, 900);


    this.crearSliderVertical(scene, 3, 8, 3, 360, 7, '../imgs/metal.jpg', 1, 1, 3, 1000, true);
    this.crearSliderVertical(scene, 3, 8, 3, 363, 7, '../imgs/metal.jpg', 1, 1, 3, 1300, true);
    this.crearSliderVertical(scene, 3, 8, 3, 366, 7, '../imgs/metal.jpg', 1, 1, 3, 2000, true);

    this.crearAspas(scene, 385, 5, '../imgs/wood.jpg', '../imgs/metal.jpg', 2000);
    this.crearAspas(scene, 397, 5, '../imgs/wood.jpg', '../imgs/metal.jpg', 3000);
    this.crearAspas(scene, 409, 5, '../imgs/wood.jpg', '../imgs/metal.jpg', 1800);

    this.crearCajaMovil(scene, 2, 2, 1.5, 425, 0, '../imgs/box.jpg', 1, 1, 5);
    this.crearCajaMovil(scene, 3.5, 5, 1.5, 435, 0, '../imgs/box.jpg', 1, 2, 5);
    this.crearCajaMovil(scene, 3.5, 7.5, 1.5, 445, 0, '../imgs/box.jpg', 1, 3, 5);

    this.crearObstaculo(scene, 1, 9, 2, 450, 0, '../imgs/brick.png', 2, 10);
    this.crearSliderGiro(scene, 0.5, 3, 3, 450, 16, '../imgs/metal.jpg', 1, 1, false, Math.PI / 2, 1000);
    this.crearSliderGiroInferior(scene, 0.5, 3, 3, 450, 9, '../imgs/metal.jpg', 1, 1, false, -Math.PI / 2, 1000);

    //Muro final
    this.crearObstaculo(scene, 2, 15, 8, 494, 0, '../imgs/brick.png', 2, 6);
  }

  crearObstaculo(scene, sx, sy, sz, px, py, texture, txtX, txtY, check) {

    //Creo la plataforma que estará arriba (invisible)

    var geometryPlataforma = new THREE.BoxGeometry(sx, 0.05, sz);
    var plataforma = new Physijs.BoxMesh(
      geometryPlataforma,
      Physijs.createMaterial(
        new THREE.MeshPhongMaterial({ color: 0xff0000, opacity: 0, transparent: true }),
        0.6, 0.9),
      0.0
    );
    plataforma.position.set(px, py + sy, 0);


    //Obstaculo
    var geometry = new THREE.BoxGeometry(sx, sy, sz);

    var loader = new THREE.TextureLoader();

    var createTexture = loader.load(texture, function (createTexture) {
      createTexture.wrapS = createTexture.wrapT = THREE.RepeatWrapping;
      createTexture.offset.set(0, 0);
      createTexture.repeat.set(txtX, txtY);
    });

    var material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: createTexture });

    if (check) {
      this.box = new Physijs.BoxMesh(
        geometry,
        Physijs.createMaterial(
          material,
          0.1, 0.7),
        0.0
      );
    }
    else {
      var box = new Physijs.BoxMesh(
        geometry,
        Physijs.createMaterial(
          material,
          0.1, 0.7),
        0.0
      );
    }

    if (check) this.box.position.set(px, py + sy / 2, 0);
    else box.position.set(px, py + sy / 2, 0);

    plataforma.addEventListener('collision',
      function (o, v, r, n) {
        // Si el objeto que colisiona con el suelo es el personaje, puedo saltar
        if (o.personaje) {
          o.isGrounded = true;
        }
      }
    );

    var that= this;
    if (check) {
      plataforma.addEventListener('collision',
        function (o, v, r, n) {
          if (o.personaje && o.primera) {
            o.isGrounded = true;
            o.primeraZona = false;
            o.segundaZona = true;

            var createTexture = loader.load('../imgs/checkpointRojo.jpg', function (createTexture) {
              createTexture.wrapS = createTexture.wrapT = THREE.RepeatWrapping;
              createTexture.offset.set(0, 0);
              createTexture.repeat.set(txtX, txtY);
            });

            that.box.material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: createTexture });
            o.primera = false;
          }
        }
      );
      this.box.addEventListener('collision',
        function (o, v, r, n) {
          if (o.personaje && o.primera) {
            o.isGrounded = true;
            o.primeraZona = false;
            o.segundaZona = true;

            var createTexture = loader.load('../imgs/checkpointRojo.jpg', function (createTexture) {
              createTexture.wrapS = createTexture.wrapT = THREE.RepeatWrapping;
              createTexture.offset.set(0, 0);
              createTexture.repeat.set(txtX, txtY);
            });

            that.box.material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: createTexture });
            o.primera = false;
          }
        }
      );

    }

    // Las figuras con física deben estar DIRECTAMENTE colgadas en la escena.
    if (check) scene.add(this.box);
    else scene.add(box);
    scene.add(plataforma);
  }

  crearSliderVertical(scene, sx, sy, sz, px, py, texture, txtX, txtY, desplazamiento, tiempo, mata) {

    var loader = new THREE.TextureLoader();

    var createTexture = loader.load(texture, function (createTexture) {
      createTexture.wrapS = createTexture.wrapT = THREE.RepeatWrapping;
      createTexture.offset.set(0, 0);
      createTexture.repeat.set(txtX, txtY);
    });
    var material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: createTexture });

    var objMovil = new Physijs.BoxMesh(
      new THREE.BoxGeometry(sx, sy, sz),
      Physijs.createMaterial(
        material,
        0.1, 0.9),
      0
    );

    objMovil.position.set(px, py, 0);

    //Animacion muro arriba-abajo
    var origen1 = { x: px, y: py - desplazamiento, z: 0 };
    var destino1 = { x: px, y: py + desplazamiento, z: 0 };
    this.movimiento1 = new TWEEN.Tween(origen1)
      .to(destino1, tiempo)
      .easing(TWEEN.Easing.Linear.None)
      .onUpdate(function () {
        objMovil.position.set(this.x, this.y, this.z);
        objMovil.__dirtyPosition = true;
      })
      .repeat(Infinity)
      .yoyo(true)
      .start();

    if (mata) {
      objMovil.addEventListener('collision',
        function (o, v, r, n) {

          if (o.personaje) {



            o.__dirtyPosition = true;
            if (o.primeraZona) {
              o.position.set(0, 5, 0);
            }
            else if (o.segundaZona) {
              o.vidas--;  //Reduzco el numero de vidas
              if (o.vidas == 0) {
                scene.reiniciarMuerte();
              }
              else {
                o.position.set(190, 5, 0);
              }
            }

            actualizarVidas(o.vidas);

            o.setLinearVelocity(new THREE.Vector3(0, 0, 0));
            o.setAngularVelocity(new THREE.Vector3(0, 0, 0));
          }
        }
      );
    }

    scene.add(objMovil);
  }

  crearSliderHorizontal(scene, sx, sy, sz, px, py, texture, txtX, txtY, desplazamiento, tiempo) {

    var loader = new THREE.TextureLoader();

    var createTexture = loader.load(texture, function (createTexture) {
      createTexture.wrapS = createTexture.wrapT = THREE.RepeatWrapping;
      createTexture.offset.set(0, 0);
      createTexture.repeat.set(txtX, txtY);
    });
    var material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: createTexture });

    var objMovil = new Physijs.BoxMesh(
      new THREE.BoxGeometry(sx, sy, sz),
      Physijs.createMaterial(
        material,
        0.1, 0.9),
      0
    );

    objMovil.position.set(px, py, 0);

    objMovil.addEventListener('collision',
      function (o, v, r, n) {
        // Si el objeto que colisiona con el suelo es el personaje, puedo saltar
        if (o.personaje) {
          o.isGrounded = true;
        }
      }
    );

    //Animacion muro arriba-abajo
    var origen1 = { x: px - desplazamiento, y: py, z: 0 };
    var destino1 = { x: px + desplazamiento, y: py, z: 0 };
    this.movimiento1 = new TWEEN.Tween(origen1)
      .to(destino1, tiempo)
      .easing(TWEEN.Easing.Linear.None)
      .onUpdate(function () {
        objMovil.position.set(this.x, this.y, this.z);
        objMovil.__dirtyPosition = true;
      })
      .repeat(Infinity)
      .yoyo(true)
      .start();

    scene.add(objMovil);
  }

  crearSliderGiro(scene, sx, sy, sz, px, py, texture, txtX, txtY, centro, angulo, tiempo) {

    var loader = new THREE.TextureLoader();

    var createTexture = loader.load(texture, function (createTexture) {
      createTexture.wrapS = createTexture.wrapT = THREE.RepeatWrapping;
      createTexture.offset.set(0, 0);
      createTexture.repeat.set(txtX, txtY);
    });
    var material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: createTexture });

    var objFijo;
    var geometry = new THREE.BoxGeometry(sx, sy, sz);
    var objMovil = new Physijs.BoxMesh(
      geometry,
      Physijs.createMaterial(
        material,
        0.1, 0.3),
      0
    );

    var aniadido = 0.5;
    if (centro) {
      objFijo = objMovil;
      aniadido = 0;
    }
    else {
      objMovil.position.set(0, -sy / 2 - 0.5, 0);

      var geometryPadre = new THREE.BoxGeometry(1, 1, 3);
      objFijo = new Physijs.BoxMesh(
        geometryPadre,
        Physijs.createMaterial(
          material,
          0.1, 0.3),
        0
      );

      objFijo.add(objMovil);
    }

    objFijo.position.set(px, py + aniadido, 0);

    //Animacion muro giro
    var start = {};
    start.y = 0;
    var targ = {};
    targ.y = angulo;

    var yoyo;

    if (centro) {
      yoyo = false;
    }
    else { yoyo = true; }

    var tween = new TWEEN.Tween(start).to(targ, tiempo)
      .onUpdate(function () {
        objFijo.rotation.z = start.y;
        objFijo.__dirtyRotation = true;
      })
      .repeat(Infinity)
      .yoyo(yoyo)
      .start();


    //SI colisiono, vuelvo al principio
    objFijo.addEventListener('collision',
      function (o, v, r, n) {
        // Si el objeto que colisiona con el suelo es el personaje, puedo saltar
        if (o.personaje) {
          o.isGrounded = true;
        }
      }
    );

    scene.add(objFijo);
  }

  crearSliderGiroInferior(scene, sx, sy, sz, px, py, texture, txtX, txtY, centro, angulo, tiempo) {

    var loader = new THREE.TextureLoader();

    var createTexture = loader.load(texture, function (createTexture) {
      createTexture.wrapS = createTexture.wrapT = THREE.RepeatWrapping;
      createTexture.offset.set(0, 0);
      createTexture.repeat.set(txtX, txtY);
    });
    var material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: createTexture });

    var objFijo;
    var geometry = new THREE.BoxGeometry(sx, sy, sz);
    var objMovil = new Physijs.BoxMesh(
      geometry,
      Physijs.createMaterial(
        material,
        0.1, 0.3),
      0
    );

    var aniadido = 0.5;
    if (centro) {
      objFijo = objMovil;
      aniadido = 0;
    }
    else {
      objMovil.position.set(0, sy / 2 + 0.5, 0);

      var geometryPadre = new THREE.BoxGeometry(1, 1, 3);
      objFijo = new Physijs.BoxMesh(
        geometryPadre,
        Physijs.createMaterial(
          material,
          0.1, 0.3),
        0
      );

      objFijo.add(objMovil);
    }

    objFijo.position.set(px, py + aniadido, 0);

    //Animacion muro giro
    var start = {};
    start.y = 0;
    var targ = {};
    targ.y = angulo;

    var yoyo;

    if (centro) {
      yoyo = false;
    }
    else { yoyo = true; }

    var tween = new TWEEN.Tween(start).to(targ, tiempo)
      .onUpdate(function () {
        objFijo.rotation.z = start.y;
        objFijo.__dirtyRotation = true;
      })
      .repeat(Infinity)
      .yoyo(yoyo)
      .start();


    //SI colisiono, vuelvo al principio
    objFijo.addEventListener('collision',
      function (o, v, r, n) {
        // Si el objeto que colisiona con el suelo es el personaje, puedo saltar
        if (o.personaje) {
          o.isGrounded = true;
        }
      }
    );

    scene.add(objFijo);
  }

  crearBisagra(scene, px, texture) {

    //Plataforma fija, inferior
    var geometry = new THREE.BoxGeometry(1, 1, 1.9);

    var loader = new THREE.TextureLoader();

    var createTexture = loader.load(texture, function (createTexture) {
      createTexture.wrapS = createTexture.wrapT = THREE.RepeatWrapping;
      createTexture.offset.set(0, 0);
      createTexture.repeat.set(1, 1);
    });

    var material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: createTexture });


    var box = new Physijs.BoxMesh(
      geometry,
      Physijs.createMaterial(
        material,
        0.1, 0.7),
      0.0
    );

    box.position.set(px, 1 / 2, 0);

    //plataforma que se mueve, superior
    var geometry = new THREE.BoxGeometry(0.5, 4, 1.5);

    var loader = new THREE.TextureLoader();

    var createTexture = loader.load(texture, function (createTexture) {
      createTexture.wrapS = createTexture.wrapT = THREE.RepeatWrapping;
      createTexture.offset.set(0, 0);
      createTexture.repeat.set(1, 1);
    });

    var material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: createTexture });


    var movil = new Physijs.BoxMesh(
      geometry,
      Physijs.createMaterial(
        material,
        0.1, 0.7),
      0.4
    );

    movil.position.set(px + 0.4, 1 + 4 / 2, 0);

    movil.addEventListener('collision',
      function (o, v, r, n) {
        // Si el objeto que colisiona con el suelo es el personaje, puedo saltar
        if (o.personaje) {
          o.isGrounded = true;
        }
      }
    );

    scene.add(box);
    scene.add(movil);


    var restric = new Physijs.HingeConstraint(
      movil, box, new THREE.Vector3(box.position.x + 0.5, box.position.y + 0.5, 0),
      new THREE.Vector3(0, 0, 1)); //eje de bisagra

    scene.addConstraint(restric);

    restric.setLimits(0, -Math.PI / 2, 0.0, 0.7);
  }

  crearCatapulta(scene, sx, sy, px, py, texture) {

    var geometry = new THREE.BoxGeometry(sx, sy, 2);

    var loader = new THREE.TextureLoader();

    var createTexture = loader.load(texture, function (createTexture) {
      createTexture.wrapS = createTexture.wrapT = THREE.RepeatWrapping;
      createTexture.offset.set(0, 0);
      createTexture.repeat.set(1, 1);
    });

    // var material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: createTexture });
    var material = new THREE.MeshPhongMaterial({ color: 0x0000ff });

    var box = new Physijs.BoxMesh(
      geometry,
      Physijs.createMaterial(
        material,
        0.1, 0.7),
      0.0
    );

    box.position.set(px, py + sy / 2, 0);

    box.addEventListener('collision',
      function (o, v, r, n) {
        // Si el objeto que colisiona con la catapulta es el personaje, salta
        if (o.personaje) {

          var fuerza = 30;
          var offset = new THREE.Vector3(0, 1, 0);


          var effect = offset.clone().normalize().multiplyScalar(fuerza);

          scene.ball.body.applyImpulse(effect, offset);
          // o.impulso = 1;

          o.isGrounded = false;
        }
      }
    );

    scene.add(box);
  }

  crearPendulo(scene, sx, sy, sz, px, py, texture, angulo, tiempo) {
    var loader = new THREE.TextureLoader();

    var createTexture = loader.load(texture, function (createTexture) {
      createTexture.wrapS = createTexture.wrapT = THREE.RepeatWrapping;
      createTexture.offset.set(0, 0);
      createTexture.repeat.set(1, 1);
    });
    var material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: createTexture });

    var objFijo;
    var geometry = new THREE.BoxGeometry(sx, sy, sz);
    var objMovil = new Physijs.BoxMesh(
      geometry,
      Physijs.createMaterial(
        material,
        0.1, 0.3),
      0
    );

    var aniadido = 0.5;

    objMovil.position.set(0, -sy / 2 - 0.5, 0);

    var geometryPadre = new THREE.BoxGeometry(sx, 1, sz);
    objFijo = new Physijs.BoxMesh(
      geometryPadre,
      Physijs.createMaterial(
        material,
        0.1, 0.3),
      0
    );

    objFijo.add(objMovil);


    objFijo.position.set(px, py + aniadido, 0);

    //Animacion muro giro
    var start = {};
    start.y = -angulo;
    var targ = {};
    targ.y = angulo;


    var tween = new TWEEN.Tween(start).to(targ, tiempo)
      .onUpdate(function () {
        objFijo.rotation.x = start.y;
        objFijo.__dirtyRotation = true;
      })
      .repeat(Infinity)
      .yoyo(true)
      .start();


    //SI colisiono, vuelvo al principio
    objFijo.addEventListener('collision',
      function (o, v, r, n) {

        o.__dirtyPosition = true;
        if (o.primeraZona) {
          o.position.set(0, 5, 0);
        }
        else if (o.segundaZona) {
          o.vidas--;  //Reduzco el numero de vidas
          if (o.vidas == 0) {
            scene.reiniciarMuerte();
          }
          else {
            o.position.set(190, 5, 0);
          }
        }

        actualizarVidas(o.vidas);
        o.setLinearVelocity(new THREE.Vector3(0, 0, 0));
        o.setAngularVelocity(new THREE.Vector3(0, 0, 0));
      }
    );

    scene.add(objFijo);
  }

  crearAspas(scene, px, py, texture1, texture2, tiempo) {

    //Cargo las dos texturas
    var loader = new THREE.TextureLoader();

    var createTexture1 = loader.load(texture1, function (createTexture) {
      createTexture.wrapS = createTexture.wrapT = THREE.RepeatWrapping;
      createTexture.offset.set(0, 0);
      createTexture.repeat.set(1, 1);
    });
    var material1 = new THREE.MeshPhongMaterial({ color: 0xffffff, map: createTexture1 });

    var createTexture2 = loader.load(texture2, function (createTexture) {
      createTexture.wrapS = createTexture.wrapT = THREE.RepeatWrapping;
      createTexture.offset.set(0, 0);
      createTexture.repeat.set(1, 1);
    });
    var material2 = new THREE.MeshPhongMaterial({ color: 0xffffff, map: createTexture2 });

    //Creo el eje (un colindro)
    var geometryEje = new THREE.BoxGeometry(1, 1, 3);
    var eje = new Physijs.BoxMesh(
      geometryEje,
      Physijs.createMaterial(
        material1,
        0.1, 0.3),
      0
    );

    //Aspas
    var geometryAspa = new THREE.BoxGeometry(0.8, py, 2);
    //Aspa inferior
    var aspa1 = new Physijs.BoxMesh(
      geometryAspa,
      Physijs.createMaterial(
        material2,
        0.9, 0.1),
      0
    );
    //Aspa izquierda
    var aspa2 = new Physijs.BoxMesh(
      geometryAspa,
      Physijs.createMaterial(
        material2,
        0.1, 0.3),
      0
    );

    //Aspa superior
    var aspa3 = new Physijs.BoxMesh(
      geometryAspa,
      Physijs.createMaterial(
        material2,
        0.1, 0.3),
      0
    );

    //Aspa derecha
    var aspa4 = new Physijs.BoxMesh(
      geometryAspa,
      Physijs.createMaterial(
        material2,
        0.1, 0.3),
      0
    );


    eje.add(aspa1);
    eje.add(aspa2);
    eje.add(aspa3);
    eje.add(aspa4);

    eje.position.set(px, py + 0.5, 0);
    //aspa inferior
    aspa1.position.y = py / 2 + 0.5;
    //aspa izq
    aspa2.rotation.z = Math.PI / 2;
    aspa2.position.x = -0.5 - py / 2;
    //aspa superior
    aspa3.position.y = -py / 2 - 0.5;
    //aspa der
    aspa4.rotation.z = Math.PI / 2;
    aspa4.position.x = +0.5 + py / 2;


    //Animacion
    var start = {};
    start.y = 0;
    var targ = {};
    targ.y = 2 * Math.PI;



    var tween = new TWEEN.Tween(start).to(targ, tiempo)
      .onUpdate(function () {
        eje.rotation.z = start.y;
        eje.__dirtyRotation = true;
      })
      .repeat(Infinity)
      .start();

    scene.add(eje);

  }

  crearCajaMovil(scene, sx, sy, sz, px, py, texture, txtX, txtY, peso) {
    var geometry = new THREE.BoxGeometry(sx, sy, sz);

    var loader = new THREE.TextureLoader();

    var createTexture = loader.load(texture, function (createTexture) {
      createTexture.wrapS = createTexture.wrapT = THREE.RepeatWrapping;
      createTexture.offset.set(0, 0);
      createTexture.repeat.set(txtX, txtY);
    });

    var material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: createTexture });


    var box = new Physijs.BoxMesh(
      geometry,
      Physijs.createMaterial(
        material,
        0.1, 0.7),
      peso
    );

    box.position.set(px, py + sy / 2, 0);

    box.addEventListener('collision',
      function (o, v, r, n) {
        // Si el objeto que colisiona con el suelo es el personaje, puedo saltar
        if (o.personaje) {
          o.isGrounded = true;
        }
      }
    );

    scene.add(box);
  }

  update() {

    TWEEN.update();
  }


}


