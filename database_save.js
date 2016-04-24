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

	longitude  : [31.401243, 31.423731], 
	latitude : [30.155328, 30.176402],
	

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
	communication_tower_exist : 1


});
//Another Bad Weather 
var SheroukArea = new warning({

	AreaName : 'SheroukArea',

	longitude  : [31.550503, 31.669979], 
	latitude :   [30.090995, 30.169979],
	

	attitude  : '500m', 
	
	warning : {
		type : 'BADCOND',
		code : 2
	},
	
	
	//Manual Generated -- WebServices Update
	
	land : 'Citu',
	temp : '40C',

	wind_direction : '12 N',
	wind_speed : '10 KSPH',
	
	visibility : '1',
	humidity : '123KM',
	dew_point : '2.123',
	pressure: '3232P',
	communication_tower_exist : 1


});


var AirPort = new warning({

	AreaName : 'CairoAirPort',

	longitude  : [31.376095, 31.541576], 
	latitude : [30.086539, 30.148903],
	

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
	communication_tower_exist : 1


});

var Juzirra = new warning({

	AreaName : 'Juzirra',

	longitude  : [31.211858, 31.238551], 
	latitude : [30.095513, 30.130186],
	

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
	communication_tower_exist : 0


});

var WaterArea = new warning({

	AreaName : 'WaterArea',

	longitude  : [31.226911, 31.233144], 
	latitude : [31.226964, 30.094993],
	

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
	communication_tower_exist : 0


});

module.exports.Salam = Salam;
module.exports.AirPort = AirPort;
module.exports.Juzirra = Juzirra;
module.exports.WaterArea = WaterArea;
module.exports.SheroukArea = SheroukArea;
