export default {
  dbURL: process.env.MONGO_URL || 'mongodb+srv://oshra:VlLHpBiUh57USRWt@cluster0.bfg8w.mongodb.net/mission2?retryWrites=true&w=majority',
  //dbURL: process.env.MONGO_URL || 'mongodb+srv://theUser:thePass@cluster0-klgzh.mongodb.net/test?retryWrites=true&w=majority',
  dbName : process.env.DB_NAME || 'mission2'
 // dbName: process.env.DB_NAME || 'stations_db'
}
