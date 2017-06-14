
// Spanish
angular.module('app')
	.config(function ($translateProvider) {
		$translateProvider.translations('es_es', 
			{
				HELLO: 'Hola mundo',
				REGISTER: 'Hola {{username}}. Tell us what you do.',
                REGISTER2: 'Luego podrás añadir más cosas.'
			}
		);
	});
