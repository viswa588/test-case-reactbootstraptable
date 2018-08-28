import React from 'react';
import { shallow, mount } from 'enzyme';
import MyComponent from './MyComponent';
import renderer from 'react-test-renderer';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


describe("MyComponent", () => {
  it("should render correctly", () => {
    const component = shallow(<MyComponent />);
  });

  it("should render bootstrap layout", () => {
    // when
    const component = shallow(<MyComponent />);
    const form = component.find('bootstraptableid');
    // then
    expect(form.getElements()).toMatchSnapshot();
  });


  it("should create an entry in component bootstrap state", () => {
    // given
     const component = shallow(<MyComponent />);
     const form = component.find('bootstraptableid');
     expect(form.is(tree)).toBe(true);
    // expect(form).toBeDefined();
  });


  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<MyComponent />);
    expect(renderedComponent.type()).toEqual('div');
  });



  it('test renderTaskAssign method', () => {
    const renderer = shallow(<MyComponent />);
    // const renderer = new ShallowRenderer();
    const row = {
      "UHC_DUNS_NAME": "NRG Energy Inc.",
      "CNT_CONTRACT_ID": 1,
      "REVENUE": -123,
      "REVENUE_GROWTH": null,
      "EM_PERC": 0.35,
      "EM_GROWTH_PTS": -10,
      "CHARGED_HOURS": 38,
      "RPH": 0.10
    };
  
    expect(renderer.instance().columnClassNameFormat(1000, row, 1, 3)).toEqual('td-column-function-red-example');
    
  });

  it('test renderTaskAssign red method', () => {
    const renderer = shallow(<MyComponent />);
    // const renderer = new ShallowRenderer();
    const row = {
      "UHC_DUNS_NAME": "NRG Energy Inc.",
      "CNT_CONTRACT_ID": 1,
      "REVENUE": 2010,
      "REVENUE_GROWTH": null,
      "EM_PERC": 0.35,
      "EM_GROWTH_PTS": -10,
      "CHARGED_HOURS": 38,
      "RPH": 0.10
    };

    expect(renderer.instance().columnClassNameFormat(1000, row, 1, 3)).toEqual('td-column-function-green-example');

  });
  it('test renderTaskAssign green for column 1 method', () => {
    const renderer = shallow(<MyComponent />);
    // const renderer = new ShallowRenderer();
    const row = {
      "UHC_DUNS_NAME": "NRG Energy Inc.",
      "CNT_CONTRACT_ID": 1,
      "REVENUE": 2010,
      "REVENUE_GROWTH": null,
      "EM_PERC": 0.35,
      "EM_GROWTH_PTS": -10,
      "CHARGED_HOURS": 38,
      "RPH": 0.10
    };

    expect(renderer.instance().columnClassNameFormat(1000, row, 1, 1)).toEqual('td-column-function-green-example');

  });

  it('test method returns empty', () => {
    const renderer = shallow(<MyComponent />);
    // const renderer = new ShallowRenderer();
    const row = {
      "UHC_DUNS_NAME": "NRG Energy Inc.",
      "CNT_CONTRACT_ID": 1,
      "REVENUE": 0,
      "REVENUE_GROWTH": null,
      "EM_PERC": 0.35,
      "EM_GROWTH_PTS": -10,
      "CHARGED_HOURS": 38,
      "RPH": 0.10
    };

    expect(renderer.instance().columnClassNameFormat(1000, row, 1, 4)).toEqual('');

  });

  it('matches the Table snapshot', () => {
   const CardData = [
      {
        "UHC_DUNS_NAME": "NRG Energy Inc.",
      }]
   var component = shallow(
      <BootstrapTable id="bootstraptableid" data={CardData} striped={true} hover={true}>
        <TableHeaderColumn dataField="UHC_DUNS_NAME" key="UHC_DUNS_NAME" isKey={true} >Product ID</TableHeaderColumn>
      </BootstrapTable>
    );

    let tree = component.toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should mount in a full DOM', () => {
    expect(mount(<MyComponent />).find('bootstraptableid').length).toBe(1);
  });


 });
