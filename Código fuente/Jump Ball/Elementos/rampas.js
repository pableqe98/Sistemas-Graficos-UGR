class Rampas {
    constructor(scene) {
        
        this.crearRampa(scene,0.7,5,3,59,-1.55,"../imgs/rock.png",1,4,2*Math.PI/3);

        this.crearRampa(scene,0.7,5,3,115,-1.55,"../imgs/rock.png",1,4,Math.PI/3);
    }

    crearRampa(scene, sx, sy, sz, px, py, texture, txtX, txtY, rZ) {

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
            0.0
        );

        box.position.set(px, py + sy / 2, 0);
        box.rotation.z=rZ;

        scene.add(box);
    }
}