FROM node:20-alpine

WORKDIR /app

# these means copy package.json or package-lock.json in /app
# COPY <FILENAME> Directory
COPY package*.json .


RUN npm install
# COPY (. means copy the entire project from our local machine ) (to the container) 
COPY . .

# PORT TO EXPOSE
EXPOSE 3000

CMD ["npm", "start"]