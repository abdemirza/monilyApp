const auth = (state, {type, payload}) => {
  switch (type) {
    case 'LOGIN_LOADING':
    case 'REGISTER_LOADING':
      return {...state, loading: true};

    case 'LOGIN_SUCCESS':
      return {...state, loading: false, isLoggedIn: true, error: null};
    case 'REGISTER_SUCCESS':
      return {...state, loading: false, error: null};

    case 'LOGIN_FAIL':
    case 'REGISTER_FAIL':
      return {...state, loading: false, error: payload};
    case 'LOGOUT_USER':
      return {...state, isLoggedIn: false};
    default:
      return state;
  }
};

export default auth;
