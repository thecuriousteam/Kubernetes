
# STEP - 1 Consider from where the image is being puled
FROM node:latest

# STEP - 2 Set the working directory inside container
WORKDIR /app

# STEP - 3 Copy Dependencies to working directory
COPY package.* .

# STEP - 4 Install Dependencies
RUN npm install

# STEP - 5 Copy app to source ditrectory

COPY . .

# STEP - 6 Expose application Ports
EXPOSE 3000

# STEP - 7 Start The App
CMD [ "node", "server.js" ]

# STEP - 8  Build the image
#  docker build -t .