export const getResponse = (response) => {
  if (response) {
    localStorage.setItem('token', response);
    let base64Url = response.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  }
};

export const onLikeTweet = (tweetId, likedUser, getState) => {
  const allTweets = getState.allTweets;

  const likedTweet = allTweets.filter(
    (el) => el.tweetId.toString() === tweetId.toString()
  );
  const idx = allTweets.findIndex((el) => el.tweetId === tweetId);

  let like, cur;

  let forFind = Object.assign({}, ...likedTweet);

  if (!forFind.likes.includes(likedUser)) {
    like = forFind.likes.concat(likedUser);
    cur = Object.assign({}, ...likedTweet, { likes: like });

    return [...allTweets.slice(0, idx), cur, ...allTweets.slice(idx + 1)];
  } else {
    like = forFind.likes.filter((el) => el !== likedUser);
    cur = Object.assign({}, ...likedTweet, { likes: like });

    return [...allTweets.slice(0, idx), cur, ...allTweets.slice(idx + 1)];
  }
};
