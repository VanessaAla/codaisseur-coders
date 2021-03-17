export function selectFeedLoading(reduxState) {
  return reduxState.feed.loading;
}

export function selectFeedPosts(reduxState) {
  return reduxState.feed.posts;
}

//export const selectPosts = (reduxState) => reduxState.feed.posts;
