import { Route } from 'react-router';
import { push } from 'react-router-redux';


export default class AccessRoute extends Route {
  static defaultProps = {
    onEnter(nextState: any, replaceState: any, callback: any) {
      const
        redirect = this.redirect,
        check = this.check,
        store = this.store,
        { user: { token } } = store.getState(); // TODO replace to user meta

      if (check(token)) {
        callback();
      } else {
        store.dispatch(push(redirect));
      }
    }
  };
}
