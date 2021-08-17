import React from 'react'
import Partners from './Partners'

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex">
            <div className="shadow-box shadow-box_round-big">
              <div className="shadow-box__inner d-flex flex-column">
                <section className="home">
                  <div className="row">
                    <div className="col">
                      <h2 className="block__header">Home</h2>
                      <div className="home__text d-flex justify-content-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla saepe
                        explicabo ducimus nisi fuga ad voluptate, temporibus maxime atque laborum
                        quos aliquid? Adipisci soluta optio accusantium blanditiis quod, quasi
                        deleniti. Culpa quaerat maxime consequuntur debitis. Ducimus eaque illum
                        soluta minima, hic, ad, magni culpa non facilis nesciunt quibusdam? Animi
                        voluptate, qui suscipit praesentium facere ea iste ipsum saepe dicta
                        nesciunt! Cupiditate ipsa, distinctio quia, reprehenderit quo possimus, nam
                        molestias labore nobis eveniet iure ad provident in dignissimos totam
                        tempora alias vero odit mollitia. Quasi consectetur ipsa possimus, nesciunt
                        unde ducimus.
                      </div>
                      <div className="home__text d-flex justify-content-center mt-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam odit
                        illo dolor fuga soluta voluptate eum error aliquid, inventore non quia
                        incidunt obcaecati minima laudantium praesentium quos voluptatem nam
                        quaerat? Culpa natus suscipit odit illum atque optio earum laboriosam vel
                        nobis quis delectus asperiores, ex quidem, est ea assumenda doloribus iste
                        rem facilis. Nam eos omnis ad assumenda aperiam maxime. Dolores deserunt
                        repudiandae voluptatem expedita! Soluta laudantium est ratione! Temporibus
                        laudantium quis, ipsa autem ad aliquam, odio sunt aspernatur repudiandae
                        doloribus consectetur quia laborum natus asperiores voluptatem ipsam fugiat
                        ab? Autem expedita labore, aliquam sequi excepturi possimus voluptas dicta
                        qui itaque in veniam nobis asperiores libero cupiditate odit non neque totam
                        dignissimos delectus molestias! Libero itaque assumenda sapiente facere
                        illum!
                      </div>
                      <Partners />
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
