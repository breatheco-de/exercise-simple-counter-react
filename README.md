<!--hide-->
# Create a simple counter Using React.js
<!--endhide-->

A simple counter is the perfect project web you are in your early steps of learning the React.js library.

We are going to create a visual countdown to showcase the concept of [`React Components`](https://4geeks.com/lesson/making-react-components#the-component-props) and how you can leverage component properties (props) to reuse those components easily.

A custom component allows you to "divide and conquer", separating logical and visual challenges into smaller pieces- giving you greater control over the display and functionalities of each part of the web-app.

For example, to create a bootstrap `<Card />` component you'd code this:

```jsx
function Card(props){
    return (
        <div className="card">
            <img className="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and fill the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
```

After declaring it, you can **import** and **use** it in your webapp like this:

```jsx
// Import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './component/Card.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);

// If you are using a previous version from React v18
// you have to use ReactDOM.render instead of createRoot
// like this:
// ReactDOM.render(<Card />, document.querySelector('#root'));
```

> 💡 Note how `ReactDOM.createRoot` is a function you have to use only one time in your entire application

Additionally, you can pass information through the Card component using **props**:

```jsx
// Use of the custom component
<Card imageUrl="http://via.placeholder.com/350x150" title="A nice image" />
```

For usage within the render method of your Card component (notice the image src and card title):

```jsx
// Declaration of a custom component (Card.jsx)

function Card(props){
    return (
        <div className="card">
            <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and fill the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
```

## 🌱 How to start this project

Do not clone this repository because we are going to be using a different template.

We recommend opening the `react boilerplate` using a provisioning tool like [Codespaces](https://4geeks.com/lesson/what-is-github-codespaces) (recommended) or [Gitpod](https://4geeks.com/lesson/how-to-use-gitpod). Alternatively, you can clone it on your local computer using the `git clone` command.

This is the repository you need to open or clone:

```text
https://github.com/4GeeksAcademy/react-hello
```

**👉 Please follow these steps on** [how to start a coding project](https://4geeks.com/lesson/how-to-start-a-project).

> 💡 Important: Remember to save and upload your code to GitHub by creating a new repository, updating the remote (`git remote set-url origin <your new url>`), and uploading the code to your new repository using the `add`, `commit` and `push` commands from the git terminal.

## 📝 Instructions

Create a seconds-counter component, called `SecondsCounter`. It should look [like this one](https://github.com/breatheco-de/exercise-simple-counter-react/blob/master/preview.gif).

- The whole purpose of the component is to display how many seconds have passed since the website finished loading (onLoad).
- Use the [***ReactDOM.createRoot***](https://4geeks.com/lesson/react-createroot-vs-render) to render the component into the web-app.
- Use the ***setInterval()*** function to re-render the component every second.
- The component does not need a local state, you can pass the number of seconds as **props**, like this:

```jsx
<SecondsCounter seconds={3434} />
```

- You can find the clock icon on the left of the component in [Font Awesome](https://fontawesome.com/).

## 🔥 Bonus

- Create an option to countdown from a given number.
- Create stop, reset, and resume functionality.
- Create an alert when the user reaches a specified time. If the user enters "10", an alert should render, notifying the user that their time was reached.

This and many other projects are built by students as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and many other contributors. Find out more about our [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).
