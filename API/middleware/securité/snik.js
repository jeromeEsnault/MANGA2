const request = require('request');

request({
  method: 'POST',
  url: 'https://snyk.io/api/v1/org/{orgId}/integrations/475fac73-0937-4241-b07f-3202e5cfb8ea/import',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': 'token API_KEY'
  },
  body: "{  \"target\": {    \"owner\": \"\",    \"name\": \"\",    \"branch\": \"\"  },  \"files\": [    {      \"path\": \"\"    }  ]}"
}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});