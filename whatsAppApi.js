var axios = require('axios');
var data = JSON.stringify({"template_name":"send_email","broadcast_name":"string","parameters":[{"name":"name","value":"Silpa"}]});

var config = {
  method: 'post',
  url: 'https://live-server-105292.wati.io/api/v1/sendTemplateMessage?whatsappNumber=9985044678',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxMzk0MGFmYi0xMjdiLTQwMTgtYTNlZC0xYTc1ODI2NGMwMzUiLCJ1bmlxdWVfbmFtZSI6InJhamFzZWtoYXJAbWF4YXRtaW4uY29tIiwibmFtZWlkIjoicmFqYXNla2hhckBtYXhhdG1pbi5jb20iLCJlbWFpbCI6InJhamFzZWtoYXJAbWF4YXRtaW4uY29tIiwiYXV0aF90aW1lIjoiMDgvMjcvMjAyMyAxMTowODoxNiIsImRiX25hbWUiOiIxMDUyOTIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBRE1JTklTVFJBVE9SIiwiZXhwIjoyNTM0MDIzMDA4MDAsImlzcyI6IkNsYXJlX0FJIiwiYXVkIjoiQ2xhcmVfQUkifQ.NopiW6M_BCQX2E_74Jty6C5jSu7N9p7ZABAlq4ASl3I', 
    'Content-Type': 'application/json', 
    'Cookie': 'affinity=1706961103.202.367097.85368|7c6ce0e4b8a8be6235fe13fd42bbda57'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
