import MainTweetHelper from './MainTweetHelper';
import { connect } from 'react-redux';

const MainTweetProfile = ({ userProfile, allTweets }) => {
  const tweets = allTweets.filter((el) => {
    return el.login === userProfile.login;
  });

  return <MainTweetHelper data={tweets} currentUser={userProfile} />;
};

const mapStateToProps = ({ userProfile, allTweets }) => {
  return {
    allTweets,
    userProfile,
  };
};

export default connect(mapStateToProps)(MainTweetProfile);
