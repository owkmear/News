import React from 'react';
import './Storybook.sass';
import UXSelect from '../UX/UXSelect';
import UXRow from '../UX/UXRow';
import UXFigure from '../UX/UXFigure';

class Storybook extends React.Component {
  render() {
    const langs = ['en', 'ru'];
    const fonts = [
      'FuturaBookC Regular',
      'FuturaDemiC Regular',
      'FuturaDemiC Italic',
      'FuturaFuturisBlackC Regular',
      'FuturaFuturisLightC Regular',
      'FuturaLightC Regular',
      'Futura-Normal Regulal',
    ];

    // TODO: Error with unique "key" prop: rewrite this Component
    // TODO: сгруппировать по языкам
    // TODO: добавить цвета, кнопки и прочее
    const pangrams = langs.map(lang => {
      const body = fonts.map(font => (
        <Pangram
          key={`${lang}${font.replace(/[\d]|[^\w]/g, '')}`}
          lang={lang}
          font={font}
        />
      ));
      return (
        <div key={lang} className="storybook__language">
          <div className="storybook__title justify-content-center">{lang}</div>
          {body}
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex">
            <div className="shadow-box shadow-box_round-big">
              <div className="shadow-box__inner d-flex flex-column">
                <section className="storybook">
                  <div className="row">
                    <div className="col">
                      <h2 className="block__header mb-5">UX elements</h2>
                      <div className="storybook__caption">UXSelect</div>
                      <UXSelect
                        className={'language'}
                        backgroundColor={'#aba792'}
                        defaultOption={0}
                        onChange={() => {}}
                        options={[
                          { value: 'en', label: 'Английский' },
                          { value: 'ru', label: 'Русский' },
                          { value: 'de', label: 'Немецкий' },
                          { value: 'fr', label: 'Французский' },
                        ]}
                      />
                      <div className="storybook__caption">UXRow</div>
                      <UXRow>
                        <div>Element 1</div>
                        <div>Element 2</div>
                        <div>Element 3</div>
                        <div>Element 4</div>
                        <div>Element 5</div>
                      </UXRow>
                      <div className="storybook__caption">UXFigure</div>
                      <div className="storybook__uxfigure">
                        <UXFigure
                          alt={'island'}
                          src={`https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006`}
                          arWidth={1}
                          arHeight={1}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <h2 className="block__header mb-5">Fonts</h2>
                      {pangrams}
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

const Pangram = props => {
  const { lang, font } = props;
  let text = null;
  switch (lang) {
    case 'ru':
      text = 'Cъешь ещё этих мягких французских булок, да выпей чаю';
      break;
    case 'en':
    default:
      text = 'The quick brown fox jumps over the lazy dog';
  }
  return (
    <div className="storybook__pangram" style={{ fontFamily: font }}>
      <span className="storybook__font">{font}</span>
      <span className="storybook__text">{text}</span>
      <hr />
    </div>
  );
};

export default Storybook;
