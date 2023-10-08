mongodb+srv://katsisaac50:<password>@cluster0.nqjxtpf.mongodb.net/?retryWrites=true&w=majority

'mongodb://localhost:27017/hero'

retry logic 
const mongoose = require('mongoose');
const retry = require('retry');

const mongoURI = 'mongodb+srv://username:password@clustername.mongodb.net/dbname';
'mongodb+srv://katsisaac50:LovE1234k@cluster0.nqjxtpf.mongodb.net/merncamp';

const operation = retry.operation({
  retries: 5, // Number of retry attempts
  factor: 2,  // Exponential backoff factor
  minTimeout: 1000, // Minimum timeout in milliseconds
  maxTimeout: 60000, // Maximum timeout in milliseconds
});

operation.attempt((currentAttempt) => {
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, (err) => {
    if (operation.retry(err)) {
      console.log(`Retry attempt ${currentAttempt}`);
      return;
    }
    if (err) {
      console.error('MongoDB connection error:', err);
    } else {
      console.log('MongoDB connected successfully');
    }
  });
});
