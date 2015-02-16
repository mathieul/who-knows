import Reflux from 'reflux';
import Firebase from 'firebase';
import AuthenticationActions from '../actions/authentication';

let baseUrl = 'https://who-knows.firebaseio.com';
let ref     = new Firebase(baseUrl);

export default Reflux.createStore({
  listenables: [AuthenticationActions],

  isAuthenticated() {
    return !!ref.getAuth();
  },

  onSignIn(email, password) {
    ref.authWithPassword({email, password}, (error, authData) => {
      if (error) {
        this.trigger(false, {errorMessage: error.message});
      } else {
        this.trigger(true, {uid: authData.uid});
      }
    });
  },

  onSignOut() {
    ref.unauth();
    this.trigger(false);
  }
});
