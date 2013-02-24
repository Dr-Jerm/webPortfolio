buildPortfolio = function(){
    if(Detector.webgl){
        init();
        animate();
    }else {
        var nonWebgl = '<h1>My Work</h1>'+
                        '<p>(best viewed in a WebGL HTML5 enabled browser)</p>'+
                        '<div id="portfolio">'+
                          '<ul id="portList">'+
                          '</ul>'+
                        '</div>';

        $('#container').append(nonWebgl);
        var list = $('#portList');

        for( i in videosJSON){
            var vid = videosJSON[i];
            var element = '<div class="imgholder"><img src="images/'+ vid.videoImage +'" alt="" /></div>'+
              '<p class="title">'+ vid.title +'</p>'+
              '<p class="projectdescription">'+ vid.description +'</p>'+
              '<p class="readmore"><a target="_blank" href="http://www.youtube.com/watch?v='+ vid.youtubeCode  +'"><strong>View The Full Project &raquo;</strong></a></p>'
            $('#portList').append(element);
        }
    }
}

var scene, camera, renderer;
var size = 10;

init = function(){

    var canvas = document.createElement( 'div' );
    $('#container').append( canvas );

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 2000 );
    camera.position.x = 100;
    camera.position.y = 100;
    camera.position.z = 0;
    camera.lookAt( new THREE.Vector3( 0, - 50, 0 ) );
    scene.add( camera );

//    scene.add( new THREE.AmbientLight( 0x808080 ) );

    light = new THREE.SpotLight( 0xffffff, 1.25 );
    light.position.set( - 500, 900, 600 );
    light.target.position.set( 0, 0, 0 );
    light.castShadow = true;
    scene.add( light );

    var geometry = new THREE.CubeGeometry( size, size, size );
    //geometry.applyMatrix( new THREE.Matrix4().setTranslation( 0, size / 2, 0 ) );
    // var material = new THREE.MeshLambertMaterial( { color: 0xd0d0d0 } );
    var material = new THREE.MeshLambertMaterial( { color: 0xffd0d0 } );

    var xGrid = 6;
    var zGrid = 2;

    var cubes = [];

    for ( var x = 0; x < xGrid; x++ ) {
        for( var z = 0; z < zGrid; z++){

            var cube = new THREE.Mesh( geometry, material );
            cube.position.x = size + ( ( x % xGrid ) * 10 );
            cube.position.z = size + ( ( z % zGrid ) * 10 );
            cube.castShadow = true;
            cube.receiveShadow = true;
            scene.add( cube );

            cubes.push( cube );
        }

    }

    // geometry = new THREE.PlaneGeometry( sizeres, sizeres );

    // plane = new THREE.Mesh( geometry, material );
    // plane.position.x = halfsizeres;
    // plane.position.z = halfsizeres;
    // plane.rotation.x = - 90 * Math.PI / 180;
    // plane.visible = false;
    // scene.add( plane );

    renderer = new THREE.WebGLRenderer();

    renderer.shadowMapEnabled = true;
    renderer.shadowMapSoft = true;

    renderer.shadowCameraNear = 3;
    renderer.shadowCameraFar = camera.far;
    renderer.shadowCameraFov = 50;

    renderer.shadowMapBias = 0.0039;
    renderer.shadowMapDarkness = 0.5;
    renderer.shadowMapWidth = 512;
    renderer.shadowMapHeight = 512;

    var devicePixelRatio = window.devicePixelRatio || 1;

    renderer.setSize( window.innerWidth * devicePixelRatio, window.innerHeight * devicePixelRatio );
    renderer.domElement.style.width =960 + 'px';
    renderer.domElement.style.height = 430 + 'px';

    canvas.appendChild( renderer.domElement );


}


animate = function() {

    requestAnimationFrame( animate );

    render();
}

render = function(){
    renderer.render( scene, camera );
}