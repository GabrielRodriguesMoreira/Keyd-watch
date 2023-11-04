import { Timeline } from 'react-twitter-widgets';

function TwitterTimeline() {
  return (
    <div className='h-full'>
      <Timeline
        dataSource={{
          sourceType: 'list',
          ownerScreenName: 'RamzaBL',
          slug: '1720872614569115729',
        }}
        options={{
          theme: 'dark', // Adjust the height as needed
        }}
      />
    </div>
  );
}

export default TwitterTimeline;
