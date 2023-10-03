import React from 'react'
import Message from "./MessagesComponnets/Message.jsx";


 const Messages = () => {
   return (
     <div className="Messages">
       <Message></Message>
       <Message></Message>
       <Message></Message>
       <Message userimg="/images/me.png"></Message>
     </div>
   );
}
export default Messages