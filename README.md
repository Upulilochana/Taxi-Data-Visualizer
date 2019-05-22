<p align="right">
  <a href="https://www.npmjs.com/package/taxi_visualizer">
    <img src="https://img.shields.io/badge/npm-v1.0.3-blue.svg" alt="version" />
  </a>
  <a href="https://github.com/manushakaru/new-tvf/blob/master/package.json">
    <img src="https://img.shields.io/badge/dependencies-up%20to%20date%20-brightgreen.svg" alt="dependencies" />
  </a>
   <a href="https://github.com/manushakaru/new-tvf">
   <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/manushakaru/new-tvf.svg">
  </a>
   </a>
   <a href="https://nodejs.org/en/">
    <img src="https://img.shields.io/badge/node%20-v10.15.0-green.svg" alt="node" />
  </a>
 
  <a href="https://github.com/manushakaru/new-tvf/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-informational.svg" alt="license" />
  </a> 
  <a href="https://github.com/manushakaru/new-tvf">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/manushakaru/new-tvf.svg">
   </a> 
  <a href="https://github.com/manushakaru">
<img alt="GitHub followers" src="https://img.shields.io/github/followers/manushakaru.svg?label=follow&style=social">
  </a>
  
</p>

<h1 align="center">Taxi Visualizer | <a href="https://manushakaru.github.io/">Demo</a></h1>


## Installation
---
### Npm
```
npm install taxi_visualizer
```
index.js
```js
var taxiVisualizer = require('taxi_viusalizer');
taxiVisualizer.initialize();

```
### Or 

1. Clone [this](https://github.com/manushakaru/new-tvf/) project
```
git clone https://github.com/manushakaru/new-tvf/
```
2. Run npm install to install necessary dependencies
```
npm install
```
3. Run npm start or node server.js
```
npm start
```
or
```
node server.js
```
## Usage 
---

> Below structure is required in uploading data files 

##### Input file structure 

[Dummy data files](https://github.com/manushakaru/new-tvf/tree/master/public/data)

| Latitude         | Longitude     | `#` of passengers  | state(0-idle,1-pickup,2-dropoff)|
| ------------- |:-------------:| :-----:|:-----:|
| 40.7378     | -73.9882 | 0 | 0 |
| 40.7383      | -73.9877      |   1 | 1 |
| 40.7402 |73.9863      |    1 | 0 |

## License
---
MIT License
