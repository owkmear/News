import React from 'react';
import Article from './Article';

class ArticlesList extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="news__articles-list">
        {data.map(articleInfo =>
          <Article key={articleInfo.id} {...articleInfo} />
        )}
      </div>
    );
  }
}

export default ArticlesList;