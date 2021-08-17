import React from 'react';
import { shallow } from 'enzyme';
import { News } from './index';
import ArticlesList from './ArticlesList';
import Spinner from '../Spinner';

describe('News component', () => {
  const props = {
    data: [],
    isLoading: false,
    errorMessage: null,
    getNewsList: () => {},
  };

  describe('News component initial', () => {
    const mockgetNewsList = jest.fn();
    const nextProps = {
      ...props,
      getNewsList: mockgetNewsList,
    };
    const wrapper = shallow(<News {...nextProps} />);

    it('Render properly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('Dispatches the `getNewsList()` method is receives from props', () => {
      expect(mockgetNewsList).toHaveBeenCalled();
    });
  });

  describe('News component isLoading', () => {
    const nextProps = {
      ...props,
      isLoading: true,
    };
    const wrapper = shallow(<News {...nextProps} />);

    it('Render properly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('News component render <Spinner /> if isLoading is true', () => {
      expect(wrapper.find(Spinner)).toHaveLength(1);
    });
  });

  describe('News component render <ArticlesList />', () => {
    const nextProps = {
      ...props,
      data: [{ id: '2688074' }, { id: '2687983' }, { id: '2687985' }],
      isLoading: false,
    };

    const wrapper = shallow(<News {...nextProps} />);

    it('Render properly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('Should <ArticlesList /> exist', () => {
      expect(wrapper.find(ArticlesList)).toHaveLength(1);
    });
  });

  describe('News component with errorMessage', () => {
    const nextProps = {
      ...props,
      isLoading: false,
      errorMessage: 'Path does not exist',
    };

    const wrapper = shallow(<News {...nextProps} />);

    it('Render properly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('Render errorMessage', () => {
      expect(wrapper.find('.news__error').text()).toEqual(
        nextProps.errorMessage
      );
    });
  });
});
