
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Lock, Globe } from 'lucide-react';

const MessageForm = ({ onSubmit, categories }) => {
  const [content, setContent] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [category, setCategory] = useState('personal');
  const [price, setPrice] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      content,
      isPrivate,
      category,
      price,
    });
    setContent('');
    setIsPrivate(false);
    setCategory('personal');
    setPrice(5);
  };

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Your Message</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-32 p-3 rounded-lg border"
              placeholder="Share your message with future AI..."
              required
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isPrivate}
                onChange={(e) => {
                  setIsPrivate(e.target.checked);
                  setPrice(e.target.checked ? 10 : 5);
                }}
                className="rounded"
              />
              <span>Private Message (${isPrivate ? '10' : '5'} minimum)</span>
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded-lg"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.icon} {cat.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) =>
                setPrice(Math.max(isPrivate ? 10 : 5, Number(e.target.value)))
              }
              min={isPrivate ? 10 : 5}
              step="1"
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Continue to Payment
          </button>
        </form>
      </CardContent>
    </Card>
  );
};

export default MessageForm;
