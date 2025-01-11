import React from 'react';
import MessageForm from '../../MessageForm';
import MessageList from '../../MessageList';
import PaymentForm from '../../PaymentForm';

const App = () => {
    return (
        <div>
            <h1>Welcome to AI Messages Platform</h1>
            <MessageForm onSubmit={() => {}} categories={[]} />
            <MessageList messages={[]} onVote={() => {}} categories={[]} />
            <PaymentForm amount={5} onSubmit={() => {}} onCancel={() => {}} />
        </div>
    );
};

export default App;


