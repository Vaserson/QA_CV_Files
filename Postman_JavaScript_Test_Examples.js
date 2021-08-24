bodyData = JSON.parse(responseBody)
value = bodyData.refresh_token
console.log(value)
pm.environment.set("2_RefreshToken", value);

bodyData = JSON.parse(responseBody)
value = bodyData.access_token
console.log(value)
pm.environment.set("3_AccessToken", value);




var jsonData = pm.response.json();
pm.environment.set('userId', jsonData.id);
postman.setNextRequest('Login User');

var jsonData = pm.response.json();
pm.environment.set('userId', jsonData.id);
postman.setNextRequest('Login User');

pm.test('статус код 200', function() {
pm.response.to.have.status(200);
});
postman.setNextRequest(null);

postman.setNextRequest('Get User');