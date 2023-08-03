import React from 'react';
import ReactDOM  from 'react-dom';

ReactDOM.render(
    <div>
        Hello <h1>Welcome</h1>
        < img src="https://e1.pxfuel.com/desktop-wallpaper/394/969/desktop-wallpaper-gojo-satoru-gojo-cute.jpg" height='200px'/>
        <lable for="email">Enter your email</lable>
        <input type='email' id='email'/>
    </div>
    ,
    document.getElementById('root')
)