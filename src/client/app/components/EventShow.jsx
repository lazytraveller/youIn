import React from 'react';
import ShortInfo from './ShortInfo.jsx';
import AttendingList from './AttendingList.jsx';
import MessageInputBox from './MessageInputBox.jsx';
import Chatbox from './Chatbox.jsx';
import CreateEventButton from '../CreateEventButton.jsx';

const EventShow = (props) => {
  // functions here
    {console.log(props)}

  return (
    <div className='event-show'>
      <CreateEventButton friends={ props.friends } getEvents={ props.getEvents } history={ props.history } />
      <ShortInfo event={ props.event }/>
      <AttendingList
        friends={ props.friends }
        isGoing={ props.isGoing }
        handleDeclineEvent={ props.handleDeclineEvent }
        handleAcceptEvent={ props.handleAcceptEvent }
      />
      <Chatbox
        messages={ props.messages }
        renderNewMessage={ props.renderNewMessage }
      />
    </div>
  );
};

export default EventShow;
