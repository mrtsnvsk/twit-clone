import MainTweetHelper from './MainTweetHelper';
import { connect } from 'react-redux';
import * as action from '../../redux/actions/twitterAction';

const MainTweetProfile = ({
  currentUser,
  deleteTweet,
  likeTweet,
  unlikeTweet,
  allTweets,
}) => {
  const tweets = allTweets.filter((el) => {
    return el.userId === currentUser.id;
  });

  return (
    <MainTweetHelper
      data={tweets}
      currentUser={currentUser}
      deleteTweet={deleteTweet}
      likeTweet={likeTweet}
      unlikeTweet={unlikeTweet}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    allTweets: state.allTweets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTweet: (id, tweetId) => dispatch(action.deleteTweet(id, tweetId)),
    likeTweet: (id, tweetId, likedUser) =>
      dispatch(action.likeTweet(id, tweetId, likedUser)),
    unlikeTweet: (id, tweetId, likedUser) => dispatch(action.unlikeTweet(id, tweetId, likedUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainTweetProfile);