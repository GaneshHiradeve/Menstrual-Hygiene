import { createReducer } from '@reduxjs/toolkit';

export const server = 'http://localhost:8000';

export const userReducer = createReducer(
  {},
  {
    userloginRequest: state => {
      state.loading = true;
    },
    userloginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    userloginFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    userforgotpassword: state => {
      state.loading = true;
    },
    userforgotpasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    userforgotpasswordFail: (state, action) => {
      state.loading = false;

      state.error = action.payload;
    },

    userresetpassword: state => {
      state.loading = true;
    },
    userresetpasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    userresetpasswordFail: (state, action) => {
      state.loading = false;

      state.error = action.payload;
    },

    getuserprofile: state => {
      state.loading = true;
    },
    getuserprofileSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    getuserprofileFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    logoutuser: state => {
      state.loading = true;
    },

    logoutuserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.message = action.payload.message;
    },
    logoutuserFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    },
    userRegisterRequest: state => {
      state.loading = true;
    },
    userRegisterSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    userRegisterFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    cleanError: state => {
      state.error = null;
    },

    cleanMessage: state => {
      state.message = null;
    },
  }
);

export const profileReducer = createReducer(
  {},
  {
    userupdateRequest: state => {
      state.loading = true;
    },
    userupdateSuccess: (state, action) => {
      state.loading = false;

      state.message = action.payload;
    },
    userupdateFail: (state, action) => {
      state.loading = false;

      state.error = action.payload;
    },
    changepasswordRequest: state => {
      state.loading = true;
    },
    changepasswordSuccess: (state, action) => {
      state.loading = false;

      state.message = action.payload;
    },
    changepasswordFail: (state, action) => {
      state.loading = false;

      state.error = action.payload;
    },

    cleanError: state => {
      state.error = null;
    },

    cleanMessage: state => {
      state.message = null;
    },
  }
);

