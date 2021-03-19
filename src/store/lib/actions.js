export const makeActionCreator = (type) => (payload) => ({
  type,
  payload,
});
