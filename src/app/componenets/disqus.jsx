'use client'
import React, { Component } from 'react';

class DisqusComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRefreshButton: false,
    };
  }

  componentDidMount() {
    this.loadDisqus();
    this.setRefreshInterval();
  }

  componentWillUnmount() {
    clearInterval(this.refreshInterval);
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
          this.page.url = 'https://keyd-watch.vercel.app/'; // Replace with your page's URL
          this.page.identifier = 'https://keyd-watch.vercel.app/'; // Replace with your page's unique identifier
        },
      });
    }
  }

  setRefreshInterval() {
    this.refreshInterval = setInterval(() => {
      this.setState({ showRefreshButton: true });
    }, 3 * 60 * 1000); // 3 minutes in milliseconds
  }

  handleRefreshClick = () => {
    this.loadDisqus();
    this.setState({ showRefreshButton: false });
  };


  render() {
    return (
      <div className='w-full h-full relative '>
        <div id="disqus_thread" className='h-full w-full pr-2'></div>
        
        {this.state.showRefreshButton && (
          <button
            className="absolute top-5 left-[50%] transform -translate-x-1/2 bg-purple-800 text-white p-2 rounded-full text-sm font-semibold shadow-lg shadow-black animate-pulse slide-in"
            onClick={this.handleRefreshClick}
          >
            Load new posts
          </button>
        )}
        <noscript>
          Please enable JavaScript to view the{' '}
          <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
        </noscript>
      </div>
    );
  }
}

export default DisqusComments;
