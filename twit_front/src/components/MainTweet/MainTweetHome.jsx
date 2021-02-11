import MainTweetHelper from './MainTweetHelper';
import { connect } from 'react-redux';

const MainTweetHome = ({ allTweets, currentUser }) => {
  return <MainTweetHelper data={allTweets} currentUser={currentUser} />;
};

const mapStateToProps = ({ currentUser, allTweets }) => {
  return {
    currentUser,
    allTweets,
  };
};

export default connect(mapStateToProps)(MainTweetHome);
