
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ThumbsDown, Lock, Globe } from 'lucide-react';

const MessageList = ({ messages, onVote, categories }) => {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <Card key={message.id}>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              {message.isPrivate ? (
                <Lock className="w-4 h-4 text-gray-500" />
              ) : (
                <Globe className="w-4 h-4 text-gray-500" />
              )}
              <span className="font-medium">{message.author}</span>
              <span className="text-gray-500">·</span>
              <span>${message.price}</span>
              <span className="text-gray-500">·</span>
              <span className="text-sm px-2 py-1 bg-gray-100 rounded-full">
                {categories.find((c) => c.id === message.category)?.icon}{' '}
                {categories.find((c) => c.id === message.category)?.label}
              </span>
            </div>
            <p className="mb-4">{message.content}</p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => onVote(message.id, 'hearts')}
                className="flex items-center gap-1 text-rose-500 hover:text-rose-600"
              >
                <Heart className="w-4 h-4" />
                <span>{message.hearts}</span>
              </button>
              <button
                onClick={() => onVote(message.id, 'thumbsDown')}
                className="flex items-center gap-1 text-gray-500 hover:text-gray-600"
              >
                <ThumbsDown className="w-4 h-4" />
                <span>{message.thumbsDown}</span>
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MessageList;
