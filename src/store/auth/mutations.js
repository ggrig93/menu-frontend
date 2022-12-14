const authMutations = {
    SET_TOKEN(state, token) {
        state.token = token;
        localStorage.setItem('token', token);
    },
    LOGOUT(state, token) {
        state.is_logged_in = null;
        localStorage.removeItem('token', token);
    },
}

export default authMutations