module.exports = appInfo => {
	const config = {}

	config.keys = `${appInfo.name}_2333_`

	config.cluster = {
		listen: {
			port: 2001,
		},
	}

	return config
}
