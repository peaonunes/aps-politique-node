// <reference path="../../data/database/mongodb/node.d.ts"/>
import Address = require("../../data/common/Address"); 
import http = require("http");

class CorreiosMiddleware{

	public static findAddress(zip: string, callback: (err: any, data:string) => void) : void {
		var options = {
			host: 'cep.correiocontrol.com.br',
			path: `/${zip}.json`
		};

		http.get(options, function(response) {
			var str = '';

			response.on('data', function (chunk) {
		   		str += chunk;
		  	});

			response.on('end', function () {
				callback(null, str);
			});
		}).on('error', function(err) {
			callback(err, null);
		})
	}
}

export = CorreiosMiddleware;