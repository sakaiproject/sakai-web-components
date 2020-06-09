# sakai-web-components

## Setup with Docker

Run the following commands to get up and running if you have Docker and Docker Compose installed.

` docker-compose run --rm --service-ports node`

Your CLI will then be in the container and your prompt should change to something like `node@asdf123:~/app$`

You can then run these commands from inside the container

`npm install`

`npm run storybook`

You should be able to visit [http://localhost:6006](http://localhost:6006) and see the storybook interface.

ctrl+c will end the storybook server and typing `exit` will return you to your normal CLI prompt.