import THREE from 'three-js';

// verify what environment it is in amd add live reload if dev.
if( __ENV__ == 'dev') {
	// add live reload:
	$('body').append('<script src="//localhost:9091"></script>');
	console.log('----- RUNNING IN DEV ENVIRONMENT!-----');
}

app.init();
app.animate();
