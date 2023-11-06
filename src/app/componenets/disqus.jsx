'use client'
import React, { Component } from 'react';

class DisqusComments extends Component {
  componentDidMount() {
    this.loadDisqus();
  }

  loadDisqus() {
    if (window.DISQUS === undefined) {
      const script = document.createElement('script');
      script.src = 'https://keyd-watch.disqus.com/embed.js';
      script.async = true;
      script.setAttribute('data-timestamp', +new Date());
      (document.head || document.body).appendChild(script);
    } else {
      window.DISQUS.reset({
        reload: true,
        config: function () {
          this.page.url = 'localhost'; // Replace with your page's URL
          this.page.identifier = 'localhost'; // Replace with your page's unique identifier
        },
      });
    }
  }

  render() {
    return (
      <>
        <div id="disqus_thread" className='h-full w-full'></div>
        <noscript>
          Please enable JavaScript to view the{' '}
          <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
        </noscript>
      </>
    );
  }
}

export default DisqusComments;
