# Smart-Life

Project directed by Roman krakowiak, Fei Zhang and Hadrien Segeral

Tsinghua's heatmap :

Create an online appointment application, to avoid waiting for services and crowded places.

If you want to run this project at app.js,
please install the require module.
```js
"dependencies": {
    "body-parser": "^1.14.2",
    "express": "^4.13.3",
    "mongoose": "^4.2.5"
  }
```

If you want to use the test data,
please `mongorestore` to backup the data from '/docs/dump/test'
```shell
mongorestore -d test docs/dump/test
```