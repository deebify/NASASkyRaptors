var warning = require('./db').Warning;


/**
	LAT -- X
	LONG -- Y	
**/

/**
	CLEAR -- 0
	NO FLIGHT AREA -- 1
	BAD CONDITION -- 2
**/

/**

	LAND :: 
		WATER -- VEGET -- BUILD 

**/

var Salam = new warning({

	AreaName : 'AlSalamCity',

	latitude  : [31.401243, 31.423731], 
	longitude : [30.155328, 30.176402],
	

	attitude  : '500m', 
	
	warning : {
		type : 'BADCOND',
		code : 2
	},
	
	
	//Manual Generated -- WebServices Update
	
	land : 'BUILD',
	temp : '23C',

	wind_direction : '32 N',
	wind_speed : '120 KSPH',
	
	visibility : '0',
	humidity : '123KM',
	dew_point : '2.123',
	pressure: '3232P',

});


var AirPort = new warning({

	AreaName : 'CairoAirPort',

	latitude  : [31.376095, 31.541576], 
	longitude : [30.086539, 30.148903],
	

	attitude  : '500m', 
	
	warning : {
		type : 'NFA',
		code : 1
	},
	
	
	//Manual Generated -- WebServices Update
	
	land : 'BUILD',
	temp : '23C',

	wind_direction : '32 N',
	wind_speed : '120 KSPH',
	
	visibility : '1',
	humidity : '123KM',
	dew_point : '2.123',
	pressure: '3232P',

});

var Juzirra = new warning({

	AreaName : 'Juzirra',

	latitude  : [31.211858, 31.238551], 
	longitude : [30.095513, 30.130186],
	

	attitude  : '500m', 
	
	warning : {
		type : 'CLEAR',
		code : 0
	},
	
	
	//Manual Generated -- WebServices Update
	
	land : 'VEGET',
	temp : '23C',

	wind_direction : '32 N',
	wind_speed : '120 KSPH',
	
	visibility : '1',
	humidity : '123KM',
	dew_point : '2.123',
	pressure: '3232P',

});

var WaterArea = new warning({

	AreaName : 'WaterArea',

	latitude  : [31.226900, 31.233144], 
	longitude : [31.226964, 30.094993],
	

	attitude  : '500m', 
	
	warning : {
		type : 'CLEAR',
		code : 0
	},
	
	
	//Manual Generated -- WebServices Update
	
	land : 'WATER',
	temp : '23C',

	wind_direction : '32 N',
	wind_speed : '120 KSPH',
	
	visibility : '1',
	humidity : '123KM',
	dew_point : '2.123',
	pressure: '3232P',

});

module.exports.Salam = Salam;
module.exports.AirPort = AirPort;
module.exports.Juzirra = Juzirra;
module.exports.WaterArea = WaterArea;
