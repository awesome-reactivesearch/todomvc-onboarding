export const SampleCSS = `.row {
  margin-bottom: 0;
}

nav {
  width: 100%;
  height: 65px;
  margin-bottom: 0;
  background-color: #FF5A5F;
  position: fixed;
  z-index: 2;
}
nav .brand {
  width: 200px;
  height: 65px;
  float: left;
  text-align: center;
  display: block;
  color: #fff;
  font-size: 24px;
  letter-spacing: 0.08em;
  font-weight: 700;
  text-transform: uppercase;
}
nav .rbc.rbc-datasearch {
  margin: 8px 0;
  line-height: 22px;
  background-color: transparent;
}

.left {
  width: 60%;
  float: left;
}

.right {
  border: 0;
  border-radius: 0;
  margin: 0;
  position: fixed;
  top: 65px;
  right: 0;
  width: 40%;
  height: calc(100% - 65px);
}
.right .rbc.rbc-reactivemap .rbc-container {
  height: 100% !important;
}

.row .sensor-wrapper {
  background-color: #fff;
  width: 100%;
  height: auto;
  padding: 20px;
  margin-top: 65px;
}
.row .sensor-wrapper .col.s6 {
  padding: 0;
}
.row .sensor-wrapper .rbc {
  border: 0;
  box-shadow: none;
}

.rbc.rbc-pagination {
  text-align: center;
  border: 0;
  box-shadow: none;
  background-color: transparent;
}

.rbc-red .rbc.rbc-resultstats {
  padding: 0 20px;
  text-align: right;
  background-color: transparent;
  margin-top: 12px;
  margin-bottom: -10px;
}

.rbc.rbc-togglelist .col.s12.col-xs-12 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.rbc.rbc-togglelist .rbc-list-item {
  width: calc(33.33% - 15px);
  display: inline-block;
  padding: 12px;
  background-color: #f3f3f3;
  border: 1px solid #eee;
}
.rbc.rbc-togglelist .rbc-list-item .rbc-label:before {
  top: 1px;
}

.rbc.rbc-resultcard .rbc-resultcard-container {
  background-color: #fafafa;
  height: auto;
  max-height: none;
  box-shadow: none;
}
.rbc.rbc-resultcard .rbc-resultcard-container .rbc-resultcard-scroll-container {
  height: auto !important;
  justify-content: space-between;
  margin-top: 20px;
}
.rbc.rbc-resultcard .rbc-resultcard-container .rbc-resultcard-item {
  width: calc(50% - 20px);
  max-width: none;
  margin: 0;
  border: 0;
  position: relative;
}
.rbc.rbc-resultcard .rbc-resultcard-container .rbc-resultcard-item .host {
  border: 2px solid #fefefe;
  border-radius: 50%;
  overflow: hidden;
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 50px;
  right: 20px;
  background-color: #fefefe;
  background-size: cover;
  background-position: center center;
}
.rbc.rbc-resultcard .rbc-resultcard-container .rbc-resultcard-item .price {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 150px;
  height: 48px;
  color: #fff;
  padding: 11px 20px;
  font-size: 20px;
  background-color: #424242;
}
.rbc.rbc-resultcard .rbc-resultcard-container .rbc-resultcard-item .rbc-resultcard-item__image {
  background-size: cover;
}
.rbc.rbc-resultcard .rbc-resultcard-container .rbc-resultcard-item .rbc-resultcard-item__title {
  padding-left: 0;
}
.rbc.rbc-resultcard .rbc-resultcard-container .rbc-resultcard-item .rbc-resultcard-item__desc {
  padding: 0;
}
.rbc.rbc-resultcard .rbc-resultcard-container .rbc-resultcard-item .rbc-resultcard-item__desc p {
  margin: 2px 0;
}

.popover .listing {
  width: 300px;
  margin: 0;
  height: 200px;
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  float: left;
  color: #777;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.popover .listing:hover, .popover .listing:focus {
  text-decoration: none;
  color: #424242;
}
.popover .listing__image {
  width: 100%;
  -ms-flex-positive: 1;
  flex-grow: 1;
  background-color: #fefefe;
  background-size: cover;
  background-position: center center;
}
.popover .listing__info {
  height: 45px;
  padding: 10px 0 0;
  font-size: 14px;
  font-weight: bold;
  color: #666;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
}
.popover .listing p {
  color: #aaa;
  margin-top: 0;
}

.gm-style .gm-style-iw {
  top: 18px !important;
  left: 24px !important;
}

@media all and (max-width: 768px) {
  .rbc-base > .row {
    overflow: hidden;
  }

  .left {
    float: none !important;
    width: 100%;
  }

  .right, .rbc-reactivemap {
    display: none;
  }

  .row nav {
    height: 40px;
    box-shadow: none;
    border: 0;
  }
  .row nav .col.s3 {
    width: 100%;
    float: none;
    text-align: center;
  }
  .row nav .col.s3 .brand {
    height: 40px;
    font-size: 16px;
    padding: 0;
    width: 100%;
    float: none;
    line-height: 38px;
  }
  .row nav .col.s9 {
    display: none;
  }

  .row .sensor-wrapper {
    margin-top: 40px;
    padding: 10px 15px;
  }

  .rbc .rbc-title {
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
  }
  .rbc.rbc-togglelist {
    display: none;
  }
}
@media all and (max-width: 480px) {
  .sensor-wrapper {
    display: flex;
    flex-direction: column;
  }
  .sensor-wrapper .rbc.rbc-numberbox {
    display: none;
  }
  .sensor-wrapper .col.s6 {
    width: 100%;
  }

  .rbc.rbc-resultcard .rbc-resultcard-container .rbc-resultcard-item {
    width: 100%;
    margin: 15px 0;
  }
}
`;
