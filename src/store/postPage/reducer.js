const initialState = {
  loading: true,
  post: null,
  comments: [],
};

export default function postPageSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "postPage/startLoadingPost": {
      return {
        loading: true,
        post: null,
        comments: [],
      };
    }

    default: {
      return state;
    }
  }
}
