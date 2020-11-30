import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/footer.less'

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="position-relative z-index-10 d-print-none">
          <div className="py-6 bg-gray-200">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-3 mb-5 mb-lg-0">
                  <div className="font-weight-bold text-uppercase text-dark mb-3">
                    Directory
                  </div>
                  <p>
                    Facebook, Instagram
                  </p>
                </div>
                <div className="col-md-3 mb-5 mb-lg-0">
                  <h6 className="text-uppercase text-dark mb-3">
                    Links
                  </h6>
                  <ul className="list-unstyled">
                    <li>
                      <Link className="nav-link" to="/drinklist">
                        Drink List
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/findyourdrink">
                        Find your Drink
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/populardrinks">
                        Popular Drinks
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 mb-5 mb-lg-0"></div>
              </div>
            </div>
          </div>
          <div className="py-4 font-weight-light bg-gray-800">
            <div className="container">
              <div className="row align-items-center">
                <div className="text-md-left text-center col-md-6">
                  {/* TODO: link to portfolio, add contact info */}
                  contact, copyright, developed by John Kroll, link to portfolio
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    )
  }
}

export default Footer