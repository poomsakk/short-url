import { Input, Button } from 'antd';

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className='mx-60'>
        <h1 className="text-5xl font-bold text-center font-monospace my-8">
          Short url
        </h1>
        <div className="flex gap-4">
          <Input size='large' className='font-normal' placeholder="Enter link here" />
          <Button size='large' type='primary' className='bg-blue-700'>Shorten URL</Button>
        </div>
      </div>
    </div>
  )
}
