'use client'
import { Input, Button } from 'antd';
import { useState } from 'react';
import { getUrl } from './database/urlMappings';

export default function Home() {
  const [longUrl, setLongUrl] = useState<string>('');
  const [shortUrl, setShortUrl] = useState<string>('');

  async function handleSubmitLongUrl() {
    try {
      const response = await fetch('/api/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ longUrl }),
      });

      if (!response.ok) {
        throw new Error('Failed to shorten URL');
      }

      const data = await response.json();
      setShortUrl(`http://your-domain/${data.code}`);
    } catch (error) {
      alert('An error occurred while shortening the URL. Please try again.' + error);
    }
  }

  return (
    <div className="container mx-auto">
      <div className='md:mx-60'>
        <h1 className="text-5xl font-bold text-center font-monospace my-8">
          Short url
        </h1>
        <div className="flex gap-4">
          <Input size='large' className='font-normal' onChange={(e) => setLongUrl(e.target.value)} placeholder="Enter link here" />
          <Button size='large' onClick={handleSubmitLongUrl} type='primary' className='bg-blue-700'>Shorten URL</Button>
          <Button size='large' onClick={()=>console.log(getUrl("003"))} type='primary' className='bg-blue-700'>Get data</Button>
        </div>
        {shortUrl && <p>Short URL: {shortUrl}</p>}
      </div>
    </div>
  )
}