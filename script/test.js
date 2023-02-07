'use strict';
/** 
 * 
 * function f() {
  console.log( this.name ); // ?
}

f = f.bind( {"name": "John"} ).bind( {"name": "Ann" } );

f(); // John 一个函数不能被重绑定（re-bound）
*/


function askPassword(ok, fail) {
  let password = "rockstar";
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  // loginOk() {
  //   console.log(`${this.name} logged in`);
  // },

  // loginFail() {
  //   console.log(`${this.name} failed to log in`);
  // },

  login(result) {
    console.log( this.name + (result ? ' logged in' : ' failed to log in') );
  }

};

askPassword(user.login.bind(user, true), user.login.bind(user, false));
