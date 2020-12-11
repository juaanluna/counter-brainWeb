export const countersTypes = {
  CREATE: "@COUNTERS/CREATE",
  DELETE: "@COUNTERS/DELETE",
};

export const createCount = (data) => ({
  type: countersTypes.CREATE,
  payload: data,
});

export const deleteCount = (data) => ({
  type: countersTypes.DELETE,
  payload: data,
});
