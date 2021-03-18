import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return(
        <ChatEngine
            height='100vh'
            projectID='6a98f1f5-b43d-4bef-979a-293dd2ea5723'
            userName='coding4'
            userSecret='passwoRd$1054'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
        />
    );
}

export default App;