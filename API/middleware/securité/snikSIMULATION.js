const request = require('request');

request({
  method: 'POST',
  url: 'https://private-anon-f05c1013db-snyk.apiary-mock.com/api/v1/org/0f93fd49-edd9-48ce-9e11-294da69b12c3/integrations/475fac73-0937-4241-b07f-3202e5cfb8ea/import',
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