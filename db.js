const mongoose = require('mongoose');

const {
  MONGO_ROOT_USERNAME: YWRtaW4K,
  MONGO_ROOT_PASSWORD: cGFzc3dvcmQK,
  MONGO_HOSTNAME: database,
  MONGO_PORT,
  MONGO_DB: training
} = process.env;

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};

const url = `mongodb://admin:password@mongodb-standalone-0.database.default.svc.cluster.local:27017/training?authSource=admin&w=1`;

mongoose.connect(url, options).then( function() {
  console.log('MongoDB is connected');
})
  .catch( function(err) {
  console.log(err);
});
