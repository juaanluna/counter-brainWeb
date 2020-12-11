export const countersTypes = {
  CREATE: "@COUNTERS/CREATE",
  UPDATE: "@COUNTERS/UPDATE",
  DELETE: "@COUNTERS/DELETE",
};

export const createCount = (data) => ({
  type: countersTypes.CREATE,
  payload: data,
});

export const updateCount = (data) => ({
  type: countersTypes.UPDATE,
  payload: data,
});

export const deleteCount = (data) => ({
  type: countersTypes.DELETE,
  payload: data,
});
