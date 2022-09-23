# Image Processing API 

Image Processing API is an API for manipulating (resizing) images with extention of jpg. 

--------------------------------------------------------

### /api?name=imageName&hight=hightInPx&width=widthInPx

using `get` methode with URL params `name`, `hight` and `width` to specify the image to be processed and its new size.

> For Example: http://localhost:3000/api?name=fjord&hight=500&width=800

----------------------

### images to be processed
for resizing a specific image, you must put it in the file with name `assets` and after using the API, you will find the resized photo in `assets/thumbnail` with the name formatted as `imgName-newWidth-newHight.jpg`

##### Available images in assets file:
- encenadaport.jpg
- fjord.jpg
- icelandwaterfall.jpg
- palmtunnel.jpg
- santamonica.jpg


-----------------------
### Functionality 
- User can query endpoint using params `name`, `hight` in px and `width` in px to retrive resized image.
- if the image is found in thumbnail file with the same size, the API will just display the image with the input size without dublicating the image.

--------------------------
#### The API built using :
- NodeJS
- Express
- Typescript
- jasmine 
- supertest 

 prettier is used as formatter and eslint as linter.

#### installing modules and running the API: 
run the following commands to:
- install the used modules run the command: 
> npm install 

- build the project:
> npm run build

- build the API and run its tests:
> npm run test

- start the API server:
> npm run start 

after running this command the URl of local host of home API will display in the terminal `http://localhost:3000`.

- run prettier:
> npm run prettier

- run eslint:
> npm run lint













