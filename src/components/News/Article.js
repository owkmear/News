import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import parse from 'html-react-parser'

class Article extends React.Component {
  static propTypes = {
    imageurl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }

  render() {
    const {
      imageurl,
      title,
      body,
      source_info: { name },
      published_on: publishedOn,
      categories,
      url
    } = this.props
    const timeFromNow = moment.unix(publishedOn).fromNow()
    const categoriesList = categories.split('|').reduce((prev, curr) => [
      prev,
      <span key={prev} className="news__category">
        {' '}
        |{' '}
      </span>,
      curr
    ])
    const imageTitle = `See the full article from ${name}`
    let parsedBody = parse(body)
    if (parsedBody.length > 200) parsedBody = parsedBody.slice(0, 200) + ' ...'

    return (
      <div className="news__article">
        <div className="news__article-image">
          <a href={url} target="_blank" rel="noopener noreferrer nofollow" title={imageTitle}>
            <img src={imageurl} alt={title} />
          </a>
        </div>
        <div>
          <span className="news__name">{name}</span>
          <span className="news__time">{timeFromNow}</span>
          <h3 className="news__title">
            <a href={url} target="_blank" rel="noopener noreferrer nofollow">
              {title}
            </a>
          </h3>
          <p className="news__body">{parsedBody}</p>
          <span className="news__categories-title">Categories: </span>
          <span className="news__categories-list">{categoriesList}</span>
        </div>
      </div>
    )
  }
}

export default Article
