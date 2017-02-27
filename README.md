# Horoscope API App
![logo](https://i.imgur.com/UUHYW6o.png "React_on_Rails")

React on Rails integrates Facebook's React front-end framework with Rails. React v0.14.x and greater is supported, with server rendering. Redux and React-Router are supported as well, also with server rendering, using either execJS or a Node.js server.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
latest node version
gem install rails
gem install foreman
npm install axios
```

### Getting the application running
```
rails new test-react-on-rails
cd test-react-on-rails
bundle
rails generate react_on_rails:install
bundle && yarn
foreman start -f Procfile.dev
```
Visit http://localhost:3000/hello_world and see your React On Rails app running! 


### Sample of Component creation

A small code snippet of creating the Task component

> Making the API request with axios

```
//getScope(e) {
    e.preventDefault();
    const sunsign = this.state.hscope.toLowerCase();
    axios({
      url: `http://theastrologer-api.herokuapp.com/api/horoscope/${sunsign}/today`,
      responseType: 'json'
    }).then((response) => {
        if (!response.data) {
          return;
        }
        this.setState({ horoscope: response.data.horoscope });
    });
  }
 
```
> GET: http://theastrologer-api.herokuapp.com/api/horoscope/{sunsign}/today

> Description: Returns today's horoscope

> Example: http://theastrologer-api.herokuapp.com/api/horoscope/aquarius/today

> Response:

```
{
    "date": "2015-10-20",
    "sunsign": "Aquarius"
    "horoscope": "You're a thinker by nature, but focus today on staying grounded in your body. Go for a long walk or do some yoga on your living room floor. Eat foods that are densely nutritious. Then focus on your future. It's time to take some solid steps toward a more secure life, whether that means adjusting your budget, looking for a new, better job, enrolling in classes or anything else that will improve your standing.",
    "meta": {
        "intensity": "55%",
        "keywords": "factual, permanence",
        "mood": "cultured"
    },
}

```

### CSS styling

> Cascading Style Sheets (CSS) is a simple mechanism for adding style (e.g., fonts, colors, spacing) to Web documents. Below shows the media CSS for responsive mobile design. 

```
h3, h1{
  text-shadow: 2px 2px #900;
  text-align: center;
  margin: 40px;
  color: black;
  font-size: 40pt;
  font-family: 'Eczar', serif;
}
```

## Horoscope API

* [theastrologer-api](https://github.com/sandipbgt/theastrologer-api) - REST API to view and send horoscope as SMS from theastrologer.com using theastrologer lilbrary, Flask framework and Twilio API.

## Deployment

* [Heroku](https://devcenter.heroku.com/) - Heroku lets you deploy, run and manage applications written in Ruby, Node.js, Java, Python, Clojure, Scala, Go and PHP.

## Built With

* [React_on_rails](https://rubygems.org/gems/react_on_rails) - To provide an opinionated and optimal framework for integrating Ruby on Rails with modern JavaScript tooling and libraries, including Webpack, Babel, React, Redux, React-Router. This differs significantly from typical Rails architecture.
* [react-on-rails](https://www.npmjs.com/package/react-on-rails) - React on Rails integrates Facebook's React front-end framework with Rails. React v0.14.x and greater is supported, with server rendering. Redux and React-Router are supported as well, also with server rendering, using either execJS or a Node.js server. 
* [Redux](http://redux.js.org/) - It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.


 

## Authors

* **Alex Diaz** - *Contributors* 
* **shakacode tutorial** - *react_on_rails tutorial*
[https://github.com/shakacode/react_on_rails/blob/master/docs/tutorial.md]

## Acknowledgments

* GA for all the blood, sweat, and tears.
* Dedication
