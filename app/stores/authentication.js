import Reflux from 'reflux';
import Firebase from 'firebase';
import SignInActions from '../actions/sign-in';

let baseUrl = 'https://who-knows.firebaseio.com';
let ref     = new Firebase(baseUrl);

export default Reflux.createStore({
  listenables: [SignInActions],

  onAuthenticate(email, password) {
    ref.authWithPassword({email, password}, (error, authData) => {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    });
  }
});
