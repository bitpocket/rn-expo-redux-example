export const RequestStatus = {
  RUNNING: "RUNNING",
  SUCCESSFUL: "SUCCESSFUL",
  ERROR: "ERROR"
};

const initialState = {
  requestStatus: {}
};

export const requestReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case RequestStatus.RUNNING:
      return mapToRequestExecution(state, action.requestName);
    case RequestStatus.SUCCESSFUL:
      return mapToRequestSuccessful(state, action, action.requestName);
    case RequestStatus.ERROR:
      return mapToRequestFailure(state, action, action.requestName);
    default:
      return state;
  }
};

export const mapToRequestExecution = (state, requestName) => {
  return {
    ...state,
    requestStatus: {
      ...state.requestsStatus,
      [requestName]: { isFetching: true, error: undefined, response: undefined }
    }
  };
};

export const mapToRequestSuccessful = (state, action, requestName) => {
  return {
    ...state,
    requestStatus: {
      ...state.requestsStatus,
      [requestName]: { isFetching: false, response: action.payload }
    }
  };
};

export const mapToRequestFailure = (state, action, requestName) => {
  return {
    ...state,
    requestStatus: {
      ...state.requestsStatus,
      [requestName]: { isFetching: false, error: action.payload }
    }
  };
};
