class LiveUp {
    constructor(scene) {

        this.crearLiveUp(scene, 252, 14);

    }

    crearLiveUp(scene, px, py) {

        var x = 0, y = 0;

        var heartShape = new THREE.Shape();
        /*
                heartShape.moveTo(x + 0, y + 0);
                heartShape.bezierCurveTo(x, y - 0.5, x - 0.5, y - 0.5, x - 0.5, y + 0);
                heartShape.bezierCurveTo(x - 0.4, y + 0.2, x - 0.2, y + 0.4, x, y + 0.5);
                heartShape.bezierCurveTo(x + 0.34, y + 0.2, x + 0.3, y + 0.3, x + 0.5, y + 0);
                heartShape.bezierCurveTo(x + 0.5, y - 0.5, x, y - 0.5, x, y);*/

        heartShape.moveTo(x + 0, y + 0);
        heartShape.bezierCurveTo(x, y - 2.5, x - 2.5, y - 2.5, x - 2.5, y + 0);
        heartShape.bezierCurveTo(x - 2, y + 1, x - 1, y + 2, x, y + 2.5);
        heartShape.bezierCurveTo(x + 1.7, y + 1, x + 1.5, y + 1.5, x + 2.5, y + 0);
        heartShape.bezierCurveTo(x + 2.5, y - 2.5, x, y - 2.5, x, y);

        var extrudeSettings = { amount: 0.2, bevelEnabled: true, bevelSegments: 2, steps: 1, bevelSize: 0.3, bevelThickness: 1 };

        var geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);

        var loader = new THREE.TextureLoader();

        var createTexture = loader.load('../imgs/corazon.jpg', function (createTexture) {
            createTexture.wrapS = createTexture.wrapT = THREE.RepeatWrapping;
            createTexture.offset.set(0, 0);
            createTexture.repeat.set(1, 1);
        });

        var material = new THREE.MeshPhongMaterial({ color: 0xff0000 });


        var obj = new Physijs.BoxMesh(
            geometry,
            Physijs.createMaterial(
                material,
                0.1, 0.1),
            0.0
        );
        // obj.position.set(0, -1, 0);
        obj.rotation.z = Math.PI;
        obj.scale.set(0.2, 0.2, 0.2);


        obj.addEventListener('collision',
            function (o, v, r, n) {
                // Si el objeto que colisiona con el suelo es el personaje, puedo saltar
                if (o.personaje) {
                    o.vidas++;
                    actualizarVidas(o.vidas);
                    scene.remove(this);
                    obj.geometry.dispose();
                }
            }
        );


        /*  var pivot = new Physijs.BoxMesh(
              new THREE.BoxGeometry(0.1, 0.1, 0.1),
              Physijs.createMaterial(
                  new THREE.MeshPhongMaterial({ color: 0x00ff00, opacity: 1, transparent: false }),
                  0.1, 0.1),
              0.0
          );
  */
        //   pivot.position.set(px, py + 2, 0);
        // pivot.scale.set(0.3, 0.3, 0.3);

        obj.position.set(px, py + 2, 0);



        var start = {};
        start.y = py+4;
        var targ = {};
        targ.y =  py+8;


        var tween = new TWEEN.Tween(start).to(targ, 3000)
            .onUpdate(function () {
                //pivot.rotation.z = start.y;
                // pivot.__dirtyRotation = true;
                obj.position.y =start.y;
               //obj.position.y +=start.y;
                obj.__dirtyPosition = true;
            })
            .repeat(Infinity)
            .yoyo(true)
            .start();
        scene.add(obj);
        //scene.add(pivot);
    }

    update() {

        TWEEN.update();
    }

}


/*class LiveUp {
    constructor(scene) {

        this.crearLiveUp(scene, 252, 14);

    }

    crearLiveUp(scene, px, py) {

        var geometry = new THREE.BoxGeometry(2, 2, 2);

        var loader = new THREE.TextureLoader();

        var createTexture = loader.load('../imgs/corazon.jpg', function (createTexture) {
            createTexture.wrapS = createTexture.wrapT = THREE.RepeatWrapping;
            createTexture.offset.set(0, 0);
            createTexture.repeat.set(1, 1);
        });

        var material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: createTexture });


        var obj = new Physijs.BoxMesh(
            geometry,
            Physijs.createMaterial(
                material,
                0.1, 0.1),
            0.0
        );

        obj.position.set(px, py + 1, 0);

        obj.addEventListener('collision',
            function (o, v, r, n) {
                // Si el objeto que colisiona con el suelo es el personaje, puedo saltar
                if (o.personaje) {
                    o.vidas++;
                    actualizarVidas(o.vidas);
                    scene.remove(this);
                    obj.geometry.dispose();
                }
            }
        );

        scene.add(obj);
    }
}*/