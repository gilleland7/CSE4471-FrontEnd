import React from 'react';
// Using Speakeasy for dual authentication
// General idea; generate secret key and QR Code with either Google Authenticate or Duo
function Authenticate(){
  var speakeasy = require('speakeasy');
  var key = speakeasy.generateSeceret({length:20});
}
