import ThreeController from './app/threeController.js'
// verify what environment it is in amd add live reload if dev.
if( __ENV__ == 'dev') {
	// add live reload:
	//document.body.append('<script src="//localhost:9091"></script>');
	console.log('----- RUNNING IN DEV ENVIRONMENT!-----');
}

function init(){

    // Entry Point
    var selector = document.getElementById('app');
    new ThreeController(selector);

}

window.onload = init;



//app.animate();
