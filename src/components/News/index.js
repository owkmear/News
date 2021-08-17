import React from 'react';
import { getNewsList } from '../../store/actions/news';
import { connect } from 'react-redux';
import ArticlesList from './ArticlesList';
import Spinner from '../Spinner';

export class News extends React.Component {
  componentWillMount() {
    this.props.getNewsList();
  }
  render() {
    const { data, isLoading, errorMessage } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex">
            <div className="shadow-box shadow-box_round-big">
              <div className="shadow-box__inner d-flex flex-column">
                <section className="news">
                  <div className="row">
                    <div className="col">
                      <h2 className="block__header">News</h2>
                      {isLoading ? (
                        <div className="d-flex justify-content-center">
                          <Spinner />
                        </div>
                      ) : errorMessage !== null ? (
                        <div className="news__error">{errorMessage}</div>
                      ) : data.length > 0 ? (
                        <ArticlesList data={data} />
                      ) : (
                        <p className="news__empty">No news</p>
                      )}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.news.data,
    isLoading: state.news.isLoading,
    errorMessage: state.news.errorMessage,
  };
};

const mapDispatchToProps = {
  getNewsList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
