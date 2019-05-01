"use strict";

const UserHook = (exports = module.exports = {});

// UserHook.method = async modelInstance => {};

UserHook.hashPassword = async userInstance => {
  if (userIntance.password) {
    userInstance.password = await Hash.make(userInstance.password);
  }
};
