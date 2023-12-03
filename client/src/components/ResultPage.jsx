import React, { useState,useEffect } from 'react';

const ResultPage = (props) => {
  const [videoLink, setVideoLink] = useState('');
  const {videoData} = props
  const originalDateString = videoData.snippet.publishedAt;
  const date = new Date(originalDateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  const viewCount = parseInt(videoData.statistics.viewCount, 10); // Convert string to integer
  const commentCount = parseInt(videoData.statistics.commentCount, 10); // Convert string to integer
  const likeCount = parseInt(videoData.statistics.likeCount, 10); // Convert string to integer
  const earning = viewCount + 10 * commentCount + 5 * likeCount;

  

  return (
      <div className='result' style={{backgroundColor:'#1E1E1E'}}>
        <div className="thumbnail">
          <div className="batch">
            <img src="/batch.svg" alt="" />
            Top Earner Video
          </div>
          <div className="image">
            <img src={videoData.snippet.thumbnails.medium.url} alt="Thumbnail" />
          </div>
          <div className="date">
            Uploaded on - {formattedDate}
          </div>
        </div>
        <div className="statics">
          <div className="title">
            <h3 style={{fontWeight:500}}>{videoData.snippet.title}</h3>
          </div>
          <div className="description">
            <ul>
              <li><img src="/views.svg" alt="views" />{videoData.statistics.viewCount}</li>
              <li> <img src="/like.svg" alt="likes" /> {videoData.statistics.likeCount}</li>
              <li><img src="/comment.svg" alt="comment" /> {videoData.statistics.commentCount}</li>
            </ul>
          </div>
        </div>
        <div className="earning" style={{backgroundColor:'#282828'}}>
          <div className="title">
            <h1 style={{fontWeight:500}}>₹{earning}</h1>
          </div>
          <div>
            <button>check how?</button>
          </div>
        </div>
      </div>
  );
};

export default ResultPage;
