import React, { Component } from 'react';
import Services from './Services';
import SelectedList from './SelectedList';
import Stylish from './Stylish';
import '../style.css';

class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      services: [
        '30 min Touch Up',
        'Full set of Eyelash Extensions',
        'Lash Refill',
        'EyeLash Extension Removal',
        'New Guest Eyelash Extension'
      ],
      stylish: [
        'No prefrences',
        'Style 1',
        'Style 2',
        'Style 3',
        'Style 4',
        'Style 5'
      ],
      yourServices: []
    };
    this.selectedService = this.selectedService.bind(this);
    this.selectedStylish = this.selectedStylish.bind(this);
  }

  selectedService(i) {
    var allService = this.state.yourServices   
    allService.push(i);
    this.setState({yourServices: allService})
    console.log(this.state.yourServices);

    // const obj = {
    //   'sServices': [i]
    // };
    // this.state.yourServices.push(obj);
    // console.log(this.state.yourServices.sServices);

    // this.setState({
    //   sServices: i
    // })
  }
  
  selectedStylish(j) {
    var allService = this.state.yourServices   
    allService.push(j);   
    this.setState({yourServices: allService})
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 left_block">
            <h4>Your Services</h4>
            {
              this.state.yourServices.length == 0 && 
              <div id="no-defects">No Services Selected</div>
            }
            {
              this.state.yourServices.length > 0 &&
              <SelectedList yourServices={this.state.yourServices}/>
            }
          </div>
          <div className="col-6 right_block">
            <h3>Select your <span>service</span></h3>
            

            <Services
              services={this.state.services}  
              selectedService={this.selectedService}
            />

            

          </div>
        </div>
      </div>
    );
  }
}

export default Wrapper;

//backup 14-09-2018 at 5:45pm

import React, { Component } from 'react';
import Services from './Services';
import SelectedList from './SelectedList';
import Stylish from './Stylish';
import '../style.css';

class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      title: 'service',
      services: [
        '30 min Touch Up',
        'Full set of Eyelash Extensions',
        'Lash Refill',
        'EyeLash Extension Removal',
        'New Guest Eyelash Extension'
      ],
      stylish: [
        'No prefrences',
        'Style 1',
        'Style 2',
        'Style 3',
        'Style 4',
        'Style 5'
      ],
      yourServices: {
        services: [],
        stylish: []
      },
      
      serviceResults: true,
      stylishResults: false
      
    };
    this.selectedService = this.selectedService.bind(this);
    this.selectedStylish = this.selectedStylish.bind(this);

  }
  
  selectedService(i) {
    var allService = this.state.yourServices.services;   
    allService.push(i);
    console.log(allService);return true;
    this.setState({
      yourServices: {
        services: allService
      }
    })
    console.log('services:', this.state.yourServices.services)
  }

  serviceNext = (e) => {
    e.preventDefault();
    // alert('Services next')
    this.setState({
      title: 'stylish',
      serviceResults: false,
      stylishResults: true
    })
  }

  servicePrev = (e) => {
    e.preventDefault();
    // alert('Services prev')
    this.setState({
      title: 'service',
      serviceResults: true,
      stylishResults: false
    })
  }

  stylishNext = (e) => {
    e.preventDefault();
    // alert('Stylish next')
    this.setState({
      title: 'asdasd',
      serviceResults: false,
      stylishResults: false
    })
  }
  
  selectedStylish(j) {
    // var allService = this.state.yourServices   
    // allService.push(j);   
    // this.setState({yourServices: allService})
   // alert(j)
    var allStylish = this.state.yourServices.stylish;   
    allStylish.push(j);
    console.log(allStylish);
    this.setState({
      yourServices: {
        stylish: allStylish
      }
    })
    // alert(allStylish)
    console.log('stylish:', this.state.yourServices.stylish)
  }
  

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 left_block">
            <h4>Your Services</h4>
            
            <SelectedList 
              yService={this.state.yourServices.services}
                
            />
            
          </div>
          <div className="col-6 right_block">
            <h3>Select your <span>{this.state.title}</span></h3>            

            { 
              this.state.serviceResults ?             
              <Services
                services={this.state.services}  
                selectedService={this.selectedService}
                serviceNext={this.serviceNext}                
              />
             : null 
            }
            
            { 
              this.state.stylishResults ?  
              <Stylish
                stylish={this.state.stylish} 
                selectedStylish={this.selectedStylish}
                servicePrev={this.servicePrev}
                stylishNext={this.stylishNext}
              />
              : null
            }

          </div>
        </div>
      </div>
    );
  }
}

export default Wrapper;

/*backup of wrapper 17-09-2018 9:55am*/

import React, { Component } from 'react';
import Services from './Services';
import SelectedList from './SelectedList';
import Stylish from './Stylish';
import '../style.css';

class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      title: 'service',
      services: [
        '30 min Touch Up',
        'Full set of Eyelash Extensions',
        'Lash Refill',
        'EyeLash Extension Removal',
        'New Guest Eyelash Extension'
      ],
      stylish: [
        'No prefrences',
        'Style 1',
        'Style 2',
        'Style 3',
        'Style 4',
        'Style 5'
      ],
      yourServices: {},
      sServices: [],
      sStylish: [],

      serviceResults: true,
      stylishResults: false

    };
    this.selectedService = this.selectedService.bind(this);
    this.selectedStylish = this.selectedStylish.bind(this);

  }

  selectedService(i) {
    // var yourServices = [];
    // var obj = {};
    // obj["services"] = i;
    // yourServices.push(obj);
    // console.log(yourServices); 
    var allService = this.state.sServices;
    allService.push(i);
    this.setState({
        sServices: allService
    })
    console.log('services:', this.state.sServices)
  }

  serviceNext = (e) => {
    e.preventDefault();
    // alert('Services next')
    this.setState({
      title: 'stylish',
      serviceResults: false,
      stylishResults: true
    })
  }

  servicePrev = (e) => {
    e.preventDefault();
    // alert('Services prev')
    this.setState({
      title: 'service',
      serviceResults: true,
      stylishResults: false
    })
  }

  stylishNext = (e) => {
    e.preventDefault();
    // alert('Stylish next')
    this.setState({
      title: 'asdasd',
      serviceResults: false,
      stylishResults: false
    })
  }

  selectedStylish(j) {
    // var allService = this.state.yourServices   
    // allService.push(j);   
    // this.setState({yourServices: allService})
    // alert(j)
    var allStylish = this.state.sStylish;
    allStylish.push(j);
    console.log(allStylish);
    this.setState({
        sStylish: allStylish
    })
    // alert(allStylish)
    console.log('stylish:', this.state.sStylish)
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 left_block">
            <h4>Your Services</h4>

            <SelectedList
              yService={this.state.sServices}
              yStylish={this.state.sStylish}
            />

          </div>
          <div className="col-6 right_block">
            <h3>Select your <span>{this.state.title}</span></h3>

            {
              this.state.serviceResults ?
                <Services
                  services={this.state.services}
                  selectedService={this.selectedService}
                  serviceNext={this.serviceNext}
                />
                : null
            }

            {
              this.state.stylishResults ?
                <Stylish
                  stylish={this.state.stylish}
                  selectedStylish={this.selectedStylish}
                  servicePrev={this.servicePrev}
                  stylishNext={this.stylishNext}
                />
                : null
            }

          </div>
        </div>
      </div>
    );
  }
}

export default Wrapper;
 
/*-----------------------------*/

/*------ 20-09-2018 ----------*/
import React, { Component } from 'react';
import Services from './Services';
import SelectedList from './SelectedList';
import Stylish from './Stylish';
import AddOn from './Add_on';
import DateTime from './Date_time';
import BookingDetails from './BookingDetails';
import '../style.css';

class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      title: 'service',
      services: [
        '30 min Touch Up',
        'Full set of Eyelash Extensions',
        'Lash Refill',
        'EyeLash Extension Removal',
        'New Guest Eyelash Extension'
      ],
      addon: [
        '3D Classic Volume Full Set',
        '3D Classic Volume Full Set Refill,',
        '6D Glam Volume Full Set',
        '6D Glam Volume Full Set Refill'
      ],
      stylish: [
        'No prefrences',
        'Style 1',
        'Style 2',
        'Style 3',
        'Style 4',
        'Style 5'
      ],
      timings: [
        '9:00 am',
        '11:00 am',
        '2:00 pm',
        '4:00 pm',
        '6:00 pm'
      ],
      date: new Date(),
      dateSelected: false,
      timeSelected: false,
      serviceActive: false,

      yourServices: {},
      sServices: [],
      sStylish: [],
      sAddOn: [],
      sDate: '',
      sTime: '',

      serviceResults: true,
      addonResults: false,
      stylishResults: false,
      datetimeResults: false,

      activeTime: -1,

    };
    this.selectedService = this.selectedService.bind(this);
    this.selectedStylish = this.selectedStylish.bind(this);
    this.selectedAddOn = this.selectedAddOn.bind(this);
    this.selectedTime = this.selectedTime.bind(this);
  }

  selectedService(i) {
    var allService = this.state.sServices;
    if (allService.indexOf(i) === -1) {
      allService.push(i);
    } else if (allService.indexOf(i) > -1) {
      alert(i + ' this service is already added');
    }
    this.setState({
      sServices: allService
    })
  }

  serviceNext = (e) => {
    e.preventDefault();
    // alert('Services next')
    this.setState({
      title: 'Add On',
      serviceResults: false,
      addonResults: true
    })
  }

  addonNext = (e) => {
    e.preventDefault();
    // alert('AddOn next')
    this.setState({
      title: 'Stylish',
      addonResults: false,
      stylishResults: true
    })
  }

  servicePrev = (e) => {
    e.preventDefault();
    // alert('Services prev')
    this.setState({
      title: 'service',
      serviceResults: true,
      addonResults: false
    })
  }

  addonPrev = (e) => {
    e.preventDefault();
    // alert('Services prev')
    this.setState({
      title: 'Add On',
      addonResults: true,
      stylishResults: false
    })
  }

  stylishNext = (e) => {
    e.preventDefault();
    // alert('Stylish next')
    this.setState({
      title: 'Date & Time',
      stylishResults: false,
      datetimeResults: true
    })
  }

  stylishPrev = (e) => {
    e.preventDefault();
    // alert('Stylish next')
    this.setState({
      title: 'Stylish',
      stylishResults: true,
      datetimeResults: false
    })
  }

  selectedStylish(j) {
    var allStylish = this.state.sStylish;
    if (allStylish.indexOf(j) === -1) {
      allStylish.push(j);
    } else if (allStylish.indexOf(j) > -1) {
      alert(j + ' this Stylish is already added');
    }
    this.setState({
      sStylish: allStylish
    })
  }

  selectedAddOn(k) {
    var allAddOn = this.state.sAddOn;
    if (allAddOn.indexOf(k) === -1) {
      allAddOn.push(k);
    } else if (allAddOn.indexOf(k) > -1) {
      alert(k + ' this Add On is already added');
    }
    this.setState({
      sAddOn: allAddOn
    })
  }

  DateonChange = date => {
    // var allDate = this.state.sDate;
    // allDate.push(date.toLocaleDateString());
    // console.log(allDate);
    var date = date.toLocaleDateString()
    this.setState({
      dateSelected: true,
      sDate: date,
      sTime: ''
    })
  }

  selectedTime(i) {
    this.setState({
      sTime: i,
      timeSelected: true,
      activeTime: i
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 left_block pt-3 pt-3">
            <h4 className="text-center">Your Services</h4>

            <SelectedList
              yService={this.state.sServices}
              yStylish={this.state.sStylish}
              yAddOn={this.state.sAddOn}
              yDate={this.state.sDate}
              yTime={this.state.sTime}
              dateSelectedLi={this.state.dateSelected}
            />

          </div>
          <div className="col-6 right_block">

            <h3>Select your <span>{this.state.title}</span></h3>

            {
              this.state.serviceResults ?
                <Services
                  services={this.state.services}
                  selectedService={this.selectedService}
                  serviceNext={this.serviceNext}
                  active={this.state.serviceActive}
                />
                : null
            }

            {
              this.state.addonResults ?
                <AddOn
                  addon={this.state.addon}
                  selectedAddOn={this.selectedAddOn}
                  servicePrev={this.servicePrev}
                  addonNext={this.addonNext}
                />
                : null
            }

            {
              this.state.stylishResults ?
                <Stylish
                  stylish={this.state.stylish}
                  selectedStylish={this.selectedStylish}
                  addonPrev={this.addonPrev}
                  stylishNext={this.stylishNext}
                />
                : null
            }

            {
              this.state.datetimeResults ?
                <DateTime
                  onChange={this.DateonChange}
                  date={this.state.date}
                  timings={this.state.timings}
                  dateSelectedLi={this.state.dateSelected}
                  selectedTime={this.selectedTime}
                  activeTime={this.state.activeTime}
                  stylishPrev={this.stylishPrev}
                  dtNext={this.dtNext}
                />
                : null
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Wrapper;

/*-------------------------------------*/