let config = {
	server:{
		port : process.env.PORT || 3000
	},
 	db:{
 		port: process.env.MONGODB_URI || 'mongodb://localhost/coppel'
	},
	token:{
		secret : 'wonderchatsecrettoken'
	},
  	application: {
    	controllers: {
      	default: 'index',
      	current: ''
    	}
 	},
};
 
module.exports = config;