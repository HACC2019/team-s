<div align="center">
    <a href=""><h1 align="center">alohadash</h1></a>

 a learning moment hackathon, built with pure [Vue](https://vuejs.org/), [Firebase Hosting](https://firebase.google.com/docs/firestore), and Java

</div>

<br/>


# hacc2019
![alt text](https://cdn.discordapp.com/attachments/622355729751212033/643860546130673664/Screen_Shot_2019-11-12_at_7.11.51_AM.png)

### Coastline App
Coastline App is an award-winning hackathon app (Hack4theSEA) and an ISEF (International Science Engineering Fair) Computer Science - Machine Learning Nominee Idea designed for volunteering work. Our team decided to reuse our past code (Java ANDROID prototype) and idea, to revise it in a way that's tailored for Alohadash, our Data-Driven Platform that's built to collect sustainable data through our little platform community. The Idea is rather simple. What if there's a way to process and classify images in a way that helps volunteering work? (e.g take a picture of riddled trash in Hawaii and classifies the object, it's geolocation, type of material, time and day) and develops a smart analytic dashboard for registered compananies to see what kind of trash Hawaii si dealing with and how it's affecting the environment around it. The idea is founded by community-driven data and state of the art Neural Network for classificaiton and object detection through smartphone cameras. This is an idea is built through 3 years of ideating and tinkering, and we are highly excited to integrate coastline app in a way that connects eco-friendly idea within communites in Hawaii. 
#### App Screenshot
![App FRONT](https://cdn.discordapp.com/attachments/511085034095116291/658825887516721229/Screen_Shot_2019-12-23_at_2.18.27_PM.png)
![App MAIN](https://cdn.discordapp.com/attachments/511085034095116291/658830726384582675/Screen_Shot_2019-12-23_at_2.37.56_PM.png)
#### Theory
![NEURAL NET ARCHITECTURE](https://cdn.discordapp.com/attachments/511085034095116291/658828065799012363/Screen_Shot_2019-12-23_at_2.27.06_PM.png)
#### Architecture
We use convulational neural nets to help classify objects and predict the type of trash. It runs through a 125x125 Input Layer and compresses it down through ReLU activation function along with ADAM gradient descent for batch learning. We trained our network with the most 30 common objects found in Hawaii that could be potential trash and hurtful for the environment along side with a standard CNN model for better prediction. Our next goal is to create a neural network that identifies the company belonging the object, for better data accuracy.

### Description
A machine learning object classifying app that is meant to identify trash. Once the object is identified, the user can push it up to the website, and it will mark its geolocation with the image and a few details the user wants to put. The map on the website uses a heat map, which in this case means that if there are more trash submissions near that area the the color of the heat map will denote how severe the trash population is in that particular area. This not only allows people to know where they can help pick up trash, but it also gives great statistical data for environmental organizations and the government. This is helpful for volunteering analysis and data collection, allowing fast and intuitive volunteering trash process for the user and our API.

### Further App Improvement
One crucial improvement would be training our machine learning model with a lot more datasets of trash. This will allow my machine learning app to be more accurate and increase the variety of trash it can recognize. Another improvement is to have this application more accessible to people. What Wwe mean is that have this for multiple platforms since it currently supports Android only. In addition, we plan on implementing forums and a volunteering section. The forums are meant for people to converse about littering/trash problems and to note any important information about them. The volunteering section should be implemented because it gives the community an idea of who is helping and what areas are already being cleaned. Overall, we plan on implementing various features to make.Application and websites will be user-friendly and allow communication with the community of Hawaii. 


### Purpose
Due to the problem of multiple communities not having a place to put their sustainable actions that help our environment. We want to help create a centralized place where communities can get recognized, possible gain incentives, and can see places that require help.
## Mission 
We are a data-driven platform for local communities and other organizations to post their sustainable actions and as well also show areas where actions must be taken to further help the environment.

## Elevator Pitch 
Imagine a community data driven App on the marketing that allows you to monitor the sustainability of your community and allow you to participate in community based forums to help the environment

## Inspiration
Hawaii as we all know it is a paradise escape, a beauty in which many want to experience. This is something that makes Hawaii unique and distinct compared to any other state across the nation. Every year we have thousands if not hundreds of thousands of tourists across the globe looking to indulge their time in our beloved Aina to embrace and enjoy the Hawaiian experience. This is what we want to persevere and keep alive for others to experience. Every day we face sustainable issues that harm not only our environment but our image, our native animals and ourselves. In all honesty we are to blame for our own actions and now we believe it is time to step up and take initiative and show what aloha really means. Goodbye to sustainable problems and hello to a new bright clean future.

## What it does
Our project utilizes community based data and environmental statistics to help inform others of sustainable issues in Hawaii through the use of a dashboard. Each individual will have their own dashboard to monitor their contributions to the community. Incentives in the form of cryptocurrency will be established to help motivate individuals to take action and actively participate. We were thinking that these cryptocurrencies can be used for discounts in various stores. Since this is a community driven, people can post any sustibale or environmental issues in our forum page. People can then discuss about those topics and even host events to help resolve those issues. In addition, to each individual’s dashboard, the government and nonprofit organizations can host event in which people can participate to develop more of our cryptocurrency.
## How we built it
We built the project with the framework Vue. Vue is fast and modern website framework that allows faster development, more responsive components and a more interactive interface. In addition, we utilized Google Firebase which is a database/cloud like platform in which we used to store any accounts, discussions etc.

## Challenges we ran into
Some challenges we faced where brainstorming ways of collecting crowdsourced data and how to effectively implement it. We solved this by having a government dashboard that can monitor these data and use it for statistical analysis.
## Accomplishments that we're proud of
One thing we are proud of is effectively using vue and firebase together. Prior to this hackathon we primarily used the standard web development tools (HTML, CSS and JS). But we wanted to challenge ourselves by using something that we aren’t 100% expert in.

## What we learned
We deepened our Vue and backend knowledge. In addition, we learned the importance and benefits of crowdsourcing and cryptocurrency incentives. People want to be heard and others want to be rewarded. These concepts can be appropriately used to help effectively benefit our community and the island of Hawaii.

## What's next for Team S
Even if we are not selected to showcase our application to the judges we plan on continuing this project in hopes that we make a difference in Hawaii. In the end it is not about the competition, the awards or recognition, but it is instead about the change we can make to help make Hawaii a beauty and enjoyable place.


## Project Directory Setup
```
cd hacc
```


## Project setup
```
npm install
```


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

