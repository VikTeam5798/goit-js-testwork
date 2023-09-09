{"mappings":"AAAA;;;;;;AAMA;;;;AAIA;;;;;;;;;;;;AAaA;;;;;;;;;;;AAUA;;;;;AAKA;;;;;;;;;;;AAUA;;;;;AAKA;;;;;;;;;AAQA;;;;;;;;;AAQA;;;;;;AAMA;;;;AAIA;;;;;;;;;;;;;AAcA;;;;;;AAMA;;;;;AAIA;;;;;;;;;;;;;AAcA;;;;;;AAMA;;;;;;;;;AAQA;;;;;;;AASA;EACE;;;;EAKA;;;;;AAUF;EACE;;;;EAKA;;;;;EAMA;;;;;AAIF;;;;;;;AASA;;;;;AAMA;;;;;;;AAOA;;;;AAGA;;;;AAGA;;;;AAGA;;;;AAGA;;;;AAGA;;;;AAGA;;;;AAGA;;;;AAGA;;;;AAGA;;;;AAGA;;;;AAGA;;;;AAGA;;;;AAGA;;;;AAGA;;;;AAGA;;;;AAGA;;;;AAGA;;;;AAGA;;;;AAGA;;;;AAGA","sources":["src/css/test.scss"],"sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"ROBOTO\", sans-serif;\r\n}\r\n\r\n.nav,\r\n.slider {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n  position: relative;\r\n  background-color: #1e1f26;\r\n  text-align: center;\r\n  padding: 0 2em;\r\n}\r\n\r\n.nav h1 {\r\n  font-family: \"Josefin Sans\", sans-serif;\r\n  font-size: 5vw;\r\n  margin: 0;\r\n  padding-bottom: 0.5rem;\r\n  letter-spacing: 0.5rem;\r\n  color: #03dac6;\r\n  transition: all 0.3s ease;\r\n  z-index: 3;\r\n}\r\nh1:hover {\r\n  transform: translate3d(0, -10px, 22px);\r\n  color: #ff0266;\r\n}\r\n\r\n.slider .title {\r\n  font-family: \"Josefin Sans\", sans-serif;\r\n  font-size: 5vw;\r\n  margin: 0;\r\n  padding-bottom: 0.5rem;\r\n  letter-spacing: 0.5rem;\r\n  color: #03dac6;\r\n  transition: all 0.3s ease;\r\n  z-index: 3;\r\n}\r\n.title:hover {\r\n  transform: translate3d(0, -10px, 22px);\r\n  color: #ff0266;\r\n}\r\n\r\n.slider h2 {\r\n  font-size: 2vw;\r\n  letter-spacing: 0.3rem;\r\n  font-family: \"ROBOTO\", sans-serif;\r\n  font-weight: 300;\r\n  color: #faebd7;\r\n  z-index: 4;\r\n}\r\nh3.span {\r\n  font-size: 2vw;\r\n  letter-spacing: 0.7em;\r\n  font-family: \"ROBOTO\", sans-serif;\r\n  font-weight: 300;\r\n  color: #faebd7;\r\n  z-index: 4;\r\n}\r\nspan:hover {\r\n  color: #ff0266;\r\n  font-weight: 500;\r\n  font-size: 2.2vw;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.nav-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  min-height: 75px;\r\n  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);\r\n  background: #1e1f26;\r\n  z-index: 10;\r\n  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);\r\n}\r\n\r\n.nav-container--top-first {\r\n  position: fixed;\r\n  top: 75px;\r\n  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);\r\n}\r\n\r\n.nav-container--top-second {\r\n  position: fixed;\r\n  top: 0;\r\n}\r\n.nav-tab {\r\n  padding: 10px 15px;\r\n  text-align: center;\r\n  display: block;\r\n\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex: 1;\r\n  color: #03dac6;\r\n  letter-spacing: 0.1rem;\r\n  transition: all 0.5s ease;\r\n  font-size: 2vw;\r\n}\r\n\r\n.nav-tab:hover {\r\n  color: #1e1f26;\r\n  background: #03dac6;\r\n  transition: all 0.5s ease;\r\n}\r\n\r\n.nav-tab-slider {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 0;\r\n  height: 2px;\r\n  background: #03dac6;\r\n  transition: left 0.3s ease;\r\n}\r\n.background {\r\n  position: absolute;\r\n  height: 90vh;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: auto;\r\n}\r\n@media (min-width: 800px) {\r\n  .nav h1,\r\n  .slider h1 {\r\n    font-size: 5vw;\r\n  }\r\n\r\n  .nav h2,\r\n  .slider h2 {\r\n    font-size: 3vw;\r\n  }\r\n\r\n  .nav-tab {\r\n    font-size: 3vw;\r\n  }\r\n}\r\n\r\n@media (min-width: 360px) {\r\n  .nav h1,\r\n  .slider h1 {\r\n    font-size: 8vw;\r\n  }\r\n\r\n  .nav h2,\r\n  .slider h2 {\r\n    font-size: 2vw;\r\n    letter-spacing: 0.2vw;\r\n  }\r\n\r\n  .nav-tab {\r\n    font-size: 1.2vw;\r\n  }\r\n}\r\n.background {\r\n  position: absolute;\r\n  height: 100vh;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 0;\r\n}\r\nh3.loader .m {\r\n  // color: #faebd7;\r\n  text-shadow: 0 0 0 #faebd7;\r\n  --webkit-animation: loading 1s ease-in-out infinite alternate;\r\n}\r\n\r\n@keyframes loading {\r\n  to {\r\n    text-shadow: 20px 0 70px #ff0266;\r\n    color: #ff0266;\r\n  }\r\n}\r\n\r\n.loader span:nth-child(2) {\r\n  --webkit-animation-delay: 0.1s;\r\n}\r\n.loader span:nth-child(3) {\r\n  --webkit-animation-delay: 0.2s;\r\n}\r\n.loader span:nth-child(4) {\r\n  --webkit-animation-delay: 0.3s;\r\n}\r\n.loader span:nth-child(5) {\r\n  --webkit-animation-delay: 0.4s;\r\n}\r\n.loader span:nth-child(6) {\r\n  --webkit-animation-delay: 0.5s;\r\n}\r\n.loader span:nth-child(7) {\r\n  --webkit-animation-delay: 0.6s;\r\n}\r\n.loader span:nth-child(8) {\r\n  --webkit-animation-delay: 0.7s;\r\n}\r\n.loader span:nth-child(9) {\r\n  --webkit-animation-delay: 0.8s;\r\n}\r\n.loader span:nth-child(10) {\r\n  --webkit-animation-delay: 0.9s;\r\n}\r\n.loader span:nth-child(11) {\r\n  --webkit-animation-delay: 1s;\r\n}\r\n.loader span:nth-child(12) {\r\n  --webkit-animation-delay: 1.1s;\r\n}\r\n.loader span:nth-child(13) {\r\n  --webkit-animation-delay: 1.2s;\r\n}\r\n.loader span:nth-child(14) {\r\n  --webkit-animation-delay: 1.3s;\r\n}\r\n.loader span:nth-child(15) {\r\n  --webkit-animation-delay: 1.4s;\r\n}\r\n.loader span:nth-child(16) {\r\n  --webkit-animation-delay: 1.5s;\r\n}\r\n.loader span:nth-child(17) {\r\n  --webkit-animation-delay: 1.6s;\r\n}\r\n.loader span:nth-child(18) {\r\n  --webkit-animation-delay: 1.7s;\r\n}\r\n.loader span:nth-child(19) {\r\n  --webkit-animation-delay: 1.8s;\r\n}\r\n.loader span:nth-child(20) {\r\n  --webkit-animation-delay: 1.9s;\r\n}\r\n.loader span:nth-child(21) {\r\n  --webkit-animation-delay: 2s;\r\n}\r\n.loader span:nth-child(22) {\r\n  --webkit-animation-delay: 2.1s;\r\n}\r\n"],"names":[],"version":3,"file":"index.189aaa92.css.map","sourceRoot":"/__parcel_source_root/"}