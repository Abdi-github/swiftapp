require('dotenv').config();

const { exec } = require('node:child_process');

// run the  command using exec
exec(`i18nexus pull -k ${process.env.I18NEXUS_KEY}`, (err, output) => {
  // once the command has completed, the callback function is called
  if (err) {
    // log and return if we encounter an error
    console.error('could not execute command: ', err);
    return;
  }
  // log the output received from the command
  console.log('Output: \n', output);
});
