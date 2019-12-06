class EnemigoBasico {
    constructor(scene, obs) {
        this.obs = obs;
        this.crearEnemigoBasico(scene, 42.5, 0, 10, 2000);

        this.crearEnemigoBasico(scene, 130, 0, 5, 2000);
        this.crearEnemigoBasico(scene, 145, 0, 5, 2000);
    }

    crearEnemigoBasico(scene, px, py, desplazamiento, tiempo) {

        //Por una parte haré la cabeza, y aparte el resto del cuerpo, para diferenciar el contacto

        var radioCabeza = 0.4,
            pechoX = 0.4,
            pechoY = 1.6,
            pechoZ = 1.6,
            piernaX = 0.7,
            piernaY = 0.3,
            piernaZ = 0.2;

        //Creo la cabeza
        var gCabeza = new THREE.SphereGeometry(radioCabeza, 8, 8);
        var cabeza = new Physijs.SphereMesh(
            gCabeza,
            new THREE.MeshPhongMaterial({ color: 0x00ff00 }),
            0
        );

        cabeza.position.set(px, py + radioCabeza + pechoY + piernaY, 0);

        //Pecho
        var gPecho = new THREE.BoxGeometry(pechoX, pechoY, pechoZ);
        var pecho = new Physijs.BoxMesh(
            gPecho,
            new THREE.MeshPhongMaterial({ color: 0x0000ff }),
            0
        );

        //Piernas
        var gPiernaL = new THREE.BoxGeometry(piernaX, piernaY, piernaZ);
        var piernaL = new Physijs.BoxMesh(
            gPiernaL,
            new THREE.MeshPhongMaterial({ color: 0x000000 }),
            0
        );
        piernaL.position.set(0, -pechoY / 2 - piernaY / 2, 0.3);

        var gPiernaR = new THREE.BoxGeometry(piernaX, piernaY, piernaZ);
        var piernaR = new Physijs.BoxMesh(
            gPiernaR,
            new THREE.MeshPhongMaterial({ color: 0x000000 }),
            0
        );
        piernaR.position.set(0, -pechoY / 2 - piernaY / 2, -0.3);

        /////////////////////////
        pecho.add(piernaL);
        pecho.add(piernaR);

        pecho.position.set(px, py + pechoY / 2 + piernaY, 0);

        ////////////Colision con cabeza
        cabeza.addEventListener('collision',
            function (o, v, r, n) {
                // Si el objeto que colisiona con el suelo es el personaje, puedo saltar
                if (o.personaje) {
                    scene.remove(this);
                    scene.remove(pecho);
                    pecho.geometry.dispose();
                    cabeza.geometry.dispose();
                }
            }
        );

        /////////////////Colision con el resto

        pecho.addEventListener('collision',
            function (o, v, r, n) {
                // Si el objeto que colisiona con el suelo es el personaje, puedo saltar
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

        //Desplazamiento lateral

        var origen1 = { x: px - desplazamiento, y: py, z: 0 };
        var destino1 = { x: px + desplazamiento, y: py, z: 0 };
        this.movimiento1 = new TWEEN.Tween(origen1)
            .to(destino1, tiempo)
            .easing(TWEEN.Easing.Linear.None)
            .onUpdate(function () {
                pecho.position.set(this.x, this.y + pechoY / 2 + piernaY, this.z);
                pecho.__dirtyPosition = true;
                cabeza.position.set(this.x, this.y + radioCabeza + pechoY + piernaY, this.z);
                cabeza.__dirtyPosition = true;
            })
            .repeat(Infinity)
            .yoyo(true)
            .start();


        scene.add(pecho);
        scene.add(cabeza);

    }
}