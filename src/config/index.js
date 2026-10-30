const config = {
  port: process.env.PORT || 3000,
  bucketName: process.env.GCS_BUCKET_NAME || 'your-pokeneas-bucket',
};

config.imagesBaseUrl = `https://storage.googleapis.com/${config.bucketName}`;

module.exports = config;
