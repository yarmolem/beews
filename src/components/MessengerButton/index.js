import React, { useCallback, useEffect } from 'react'

const MessengerButton = () => {
  const messengerInit = useCallback(() => {
    window.fbAsyncInit = function () {
      window.FB.init({ xfbml: true, version: 'v11.0' })
    }
  }, [])

  const createScriptElement = useCallback(() => {
    const id = 'facebook-jssdk'
    const fjs = document.getElementsByTagName('script')[0]

    if (document.getElementById(id)) return

    const js = document.createElement('script')
    js.id = id
    js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js'
    fjs.parentNode.insertBefore(js, fjs)
  }, [])

  useEffect(() => {
    const chatbox = document.getElementById('fb-customer-chat')
    chatbox.setAttribute('page_id', '101774235552574')
    chatbox.setAttribute('attribution', 'biz_inbox')

    messengerInit()
    createScriptElement()
  }, [messengerInit, createScriptElement])

  return (
    <div>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </div>
  )
}

export default MessengerButton

// <!-- Messenger plugin de chat Code -->

//     <!-- Your plugin de chat code -->

//     <script>
//       var chatbox = document.getElementById('fb-customer-chat');
//       chatbox.setAttribute("page_id", "101774235552574");
//       chatbox.setAttribute("attribution", "biz_inbox");

//       window.fbAsyncInit = function() {
//         FB.init({
//           xfbml            : true,
//           version          : 'v11.0'
//         });
//       };

//
//     </script>
