calculate = function calculate_inside (p_lat, p_long, lat_s, long_s, lat_e, long_e) {


	console.log('LAT -- ',p_lat,lat_s,lat_e);
	console.log('LON -- ',p_long,long_s,long_e);
	console.log('\n')
	//Check if in the Y -- Longitude 
	if( p_lat >=  lat_s && p_lat <=  lat_e){
		if( p_long >= long_s && p_long <= long_e) {
			// then we are IN 
			return true;
		}
		else
			return false;
	}
	else
		return false; 
}


module.exports.calculate = calculate;