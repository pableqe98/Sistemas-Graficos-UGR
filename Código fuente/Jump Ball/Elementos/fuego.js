class Fuego {
    constructor(scene, obs) {
        this.obs = obs;
        this.ancho = 8;

        this.crearFuego(scene, 67, 0, 0, 15, 0.3, this.ancho, 3, 1);

        this.crearFuego(scene, 100, 0, 0, 30, 0.3, this.ancho, 3, 1);

        this.crearFuego(scene, 170.5, 0, 0, 20, 0.3, this.ancho, 3, 1);

        this.crearFuego(scene, 257, 0, 0, 97, 0.3, this.ancho, 5, 1);
    }

    crearFuego(scene, px, py, pz, sx, sy, sz, txtX, txtY) {

        var geometry = new THREE.BoxGeometry(sx, sy, sz);

        var loader = new THREE.TextureLoader();

        var createTexture = loader.load('../imgs/fire.png', function (createTexture) {
            createTexture.wrapS = createTexture.wrapT = THREE.RepeatWrapping;
            createTexture.offset.set(0, 0);
            createTexture.repeat.set(txtX, txtY);
        });
        var material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: createTexture });

        var box = new Physijs.BoxMesh(
            geometry,
            Physijs.createMaterial(
                material,
                0.1, 0.9),
            0.0
        );


        box.position.set(px, py + sy / 2, pz);

        box.addEventListener('collision',
            function (o, v, r, n) {
                // Si el objeto que colisiona con el suelo es el personaje
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

        // Las figuras con física deben estar DIRECTAMENTE colgadas en la escena.
        scene.add(box);

    }
}