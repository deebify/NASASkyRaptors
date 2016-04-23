var mongoose = require('mongoose');

var Schema = mongoose.Schema;

/**
	CLEAR -- 0
	NO FLIGHT AREA -- 1
	BAD CONDITION -- 2
**/

var WarningSchema = mongoose.Schema({

	AreaName : String,

	longitude : [],
	latitude : [], 
	attitude : String, 
	
	warning : {
		type : Schema.Types.Mixed,
	},
	
	land : String,
	temp : String,

	wind_direction : String,
	wind_speed : String,
	
	visibility : Number,
	humidity : String,
	dew_point : String,
	pressure: String,

});


var Warning = mongoose.model('Warning',WarningSchema);



module.exports.Warning = Warning;