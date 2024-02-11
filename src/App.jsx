import './App.scss'

function App() {

  return (
        <>
        <div className="resume-wrapper">
          <section className="profile section-padding">
            <div className="container">
              <div className="picture-resume-wrapper">
                <div className="picture-resume heartbeat">
                  <span><img src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg" alt="" /></span>
                  <svg version="1.1" viewBox="0 0 350 350">

                    <defs>
                      <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9" result="cm" />
                      </filter>
                    </defs>


                    <g filter="url(#goo)" >

                      <circle id="main_circle" className="st0" cx="171.5" cy="175.6" r="130" />

                      <circle id="circle" className="bubble0 st1" cx="171.5" cy="175.6" r="122.7" />
                      <circle id="circle" className="bubble1 st1" cx="171.5" cy="175.6" r="122.7" />
                      <circle id="circle" className="bubble2 st1" cx="171.5" cy="175.6" r="122.7" />
                      <circle id="circle" className="bubble3 st1" cx="171.5" cy="175.6" r="122.7" />
                      <circle id="circle" className="bubble4 st1" cx="171.5" cy="175.6" r="122.7" />
                      <circle id="circle" className="bubble5 st1" cx="171.5" cy="175.6" r="122.7" />
                      <circle id="circle" className="bubble6 st1" cx="171.5" cy="175.6" r="122.7" />
                      <circle id="circle" className="bubble7 st1" cx="171.5" cy="175.6" r="122.7" />
                      <circle id="circle" className="bubble8 st1" cx="171.5" cy="175.6" r="122.7" />
                      <circle id="circle" className="bubble9 st1" cx="171.5" cy="175.6" r="122.7" />
                      <circle id="circle" className="bubble10 st1" cx="171.5" cy="175.6" r="122.7" />

                    </g>
                  </svg>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="name-wrapper">
                <h1>Михаил <br />Подосенов</h1>
              </div>
              <div className="clearfix"></div>
              <div className="contact-info clearfix">
                <ul className="list-titles">
                  <li>Телефон</li>
                  <li>E-mail</li>
                  <li>Telegram</li>
                  <li>Город</li>
                </ul>
                <ul className="list-content ">
                  <li>+79115831936</li>
                  <li>mehhi@yandex.ru</li>
                  <li><a href="https://t.me/nimzowitschdefence" target="_blank">nimzowitschdefence</a></li>
                  <li>Архангельск, Россия</li>
                </ul>
              </div>
              <div className="contact-presentation">
                <p><span className="bold">Lorem</span> ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod congue nisi, nec consequat quam. In consectetur faucibus turpis eget laoreet. Sed nec imperdiet purus. </p>
              </div>
              <div className="contact-social clearfix">
                <ul className="list-titles">
                  <li>Twitter</li>
                  <li>Dribbble</li>
                  <li>Codepen</li>
                </ul>
                <ul className="list-content">
                  <li><a href="">@janderson</a></li>
                  <li><a href="">janderson</a></li>
                  <li><a href="">janderson</a></li>
                </ul>
              </div>
            </div>
          </section>

          <section className="experience section-padding">
            <div className="container">
              <h3 className="experience-title">Опыт работы</h3>

              <div className="experience-wrapper">
                <div className="company-wrapper clearfix">
                  <div className="experience-title">Медицинский информационно-аналитический центр</div> 
                  <div className="time">Сен 2021 - Апр 2023</div> 
                </div>

                <div className="job-wrapper clearfix">
                  <div className="experience-title">Front End Developer </div> 
                  <div className="company-description">
                    <p>Разработка информационных систем:
                      <br></br>
                      - личный кабинет руководителя с аналитикой по деятельности медицинских организации в виде интерактивных дашбордов
                      <br></br>
                      - медицинская информационная система, электронное подписание и отправка электронной медицинской документации в федеральный регистр
                      </p>
                  </div>
                </div>

                <div className="company-wrapper clearfix">
                  <div className="experience-title">БАРС Груп</div>
                  <div className="time">Апр 2023 - наст.</div>
                </div>

                <div className="job-wrapper clearfix">
                  <div className="experience-title">Freelance, Web Designer / Web Developer</div>
                  <div className="company-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p> 
                  </div>
                </div>
              </div>

              <div className="section-wrapper clearfix">
                <h3 className="experience-title">Образование</h3>

                <div className="company-wrapper clearfix">
                  <div className="experience-title">Бакалавриат</div>
                  <div className="time">Сен 2015 - Авг 2019</div>
                </div>

                <div className="job-wrapper clearfix">
                  <div className="experience-title">Бизнес-информатика, Экономические информационные системы</div>
                  <div className="company-description">
                    <p>Северный (Арктический) федеральный университет им. М.В. Ломоносова, Архангельск</p> 
                  </div>
                </div>

                <div className="company-wrapper clearfix">
                  <div className="experience-title">Магистратура</div>
                  <div className="time">Сен 2019 - Авг 2021</div>
                </div>

                <div className="job-wrapper clearfix">
                  <div className="experience-title">Прикладная информатика, Информационные технологии в медицине и социальной сфере</div>
                  <div className="company-description">
                    <p>Северный (Арктический) федеральный университет им. М.В. Ломоносова, Архангельск</p> 
                  </div>
                </div>
              </div>

              <div className="section-wrapper clearfix">
                <h3 className="section-title">Skills</h3>
                <ul>
                  <li className="skill-percentage">HTML / HTML5</li>
                  <li className="skill-percentage">CSS / CSS3 / SASS / LESS</li>
                  <li className="skill-percentage">Javascript</li>
                  <li className="skill-percentage">Jquery</li>
                  <li className="skill-percentage">Wordpress</li>
                  <li className="skill-percentage">Photoshop</li>

                </ul>

              </div>




              <div className="section-wrapper clearfix">
                <h3 className="section-title">Hobbies</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>
              </div>

            </div>
          </section>

          <div classNameName="clearfix"></div>
        </div>
        </>
      )
}

export default App
