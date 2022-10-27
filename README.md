<h2>Motivation</h2>
Setup react vite project to work with a server (express in this repo) using proxy

<h2>Schema</h2>


<h2>Setup</h2>
<ol>

<li>The react app uses /api as base url and the server base endpoints urls is 
````
/api/words
<br>
respond with 10 arbitrary questions 
containing at least 1 verb , 1 noun , ` adverb, 1 adjective
````
 and 
 <br>
 ````
/api/rank
 ````
 <br>
 request containg score.
 respond with rank.
</li>
<li>Using /api/ as base url is arbitrary. Notice however that it appears in 3 places : client/vite.config.js , on the client side source files and on the server side source files</li>
</ol>

<h2>Installation</h2>
Perform the following from root directory , client directory and server directory

```
npm i

```


<h2>Run the project</h2>
Invoke from the root project to run the server and the client. This is done using concurrently

```
npm start
```

<h2>Limitation</h2>
i was not able to map "/" because then localhost:3000/ is used
<h2>usage</h2>
add your questions inside server/TestData.json file with the same current structure
, the app containing 2 pages with 2 routes
1- /
2- /rank
