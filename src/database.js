import mongoose from 'mongoose';

import config from './config'

const USER = encodeURIComponent( config.dbUser )
const PASSWORD = encodeURIComponent( config.dbPassword )
const DB_HOST = config.dbHost
const DB_NAME = config.dbName


mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then( db => console.log( 'Db is connected' ) )
  .catch( error => console.log( error ) )