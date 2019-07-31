const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'
const buildType = process.env.BUILD_TYPE || 'prod'

module.exports = {
	env,
	isDev,
	buildType,
}
