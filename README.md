# cars

> Proof of concept done in Vue.js for cars.com

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
(npm run build --production gzip)

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Service Worker

The service worker source is located in the build/ folder, it separates between two files:
- service worker dev (will always force the page to reload for HMR)
- service worker prod (will cache all the resources of the application and)
We're using the SW-precache-webpack plugin (config/webpack.prod.conf) to ensure all webpack emmitted assets are cached on the client, the current cacheId is 'cars.com' and it can be manipulated for a more dynamic experience

## Application Architecture

Following LIFT and with the practices of Vue the source folder is organized neatly, mayor components are kept in the components folder and each sub component is categorized in a folder within
The aim of this component definition is to be able to re use every bit of code we can, so many are controlled by bindable properties

## Libraries

Vue.js
Vuetify (UI)
Axios (Promise)
Stylus (Style engine)

## CORS 

Axios is setup with the root headers authorization, content-type & accept, this can be extended and filtered per type of request as well as creating interceptors to act as middle ware.
CORS will initially send an options request to check the Access-Control-Allow-Origin for the headers, as such the cars.com api provided was not sending the correct headers for a CORS request, possibly because is not intended to serve clients directly I imagine. 
So I had to setup a local server that handled the requests for the cars api directly without the preflight request and then serve that to the application while developing. 
It is now setup to make the CORS calls to the API as it should

## Functionality

The link and scripts tags on the index.html are set to be preloaded to prevent blocking of the app, a service worker is registered and starts to pre fetch all other modules, for this simple POC that's a good enough solution, but it could be extended and specifically download certain resources.

Once on the root page of the application, it will call and populate the datatable with the listings results, once it loads you can click on the title and image to get to the details view of the car which will call for that id to get all data

The navigation bar and the user drawer are merely asthetic but both the navigation and the drawer have their lists generated, and the dropdown with columns of the navigation is dynamic to be able to push as many links in as many columns

### Rendering

Unlike React where you need to use PureComponent or make your own shouldComponentUpdate function (which starts a rerender from top to bottom in the tree), Vue in the other hand tracks each component and it's dependancies to update accordingly
