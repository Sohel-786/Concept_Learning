import React from 'react';
import ReactDOM  from 'react-dom';

ReactDOM.render(
    <div>
        Hello <h1>Welcome</h1>
        < img src="https://e1.pxfuel.com/desktop-wallpaper/394/969/desktop-wallpaper-gojo-satoru-gojo-cute.jpg" height='200px'/>
        <lable htmlFor="email">Enter your email</lable>
        <input type='email' id='email'/>
    </div>

    // /*#__PURE__*/React.createElement("div", null, "Hello ", /*#__PURE__*/React.createElement("h1", null, "Welcome"), /*#__PURE__*/React.createElement("img", {
    // src: "https://e1.pxfuel.com/desktop-wallpaper/394/969/desktop-wallpaper-gojo-satoru-gojo-cute.jpg",
    // height: "200px"
    // }), /*#__PURE__*/React.createElement("lable", {
    // htmlFor: "email"
    // }, "Enter your email"), /*#__PURE__*/React.createElement("input", {
    // type: "email",
    // id: "email"
    // }))


    ,
    document.getElementById('root')
)