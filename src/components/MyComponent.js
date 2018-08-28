import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class MyComponent extends React.Component {

  // renderHeaderColumn(Metadata) {
  //   // const Metadata = values.Metadata;
  //   // console.log('test', Metadata);
  //   return Metadata.map((item) => {
  //     <TableHeaderColumn dataField={item.Propertykey}>{item.BodyDesc}</TableHeaderColumn>
  //   });

  // }

  columnClassNameFormat(fieldValue, row, rowIdx, colIdx) {
    const valuetest = row['REVENUE'];
    if (valuetest < 0) {
      if (colIdx === 3) {
        return 'td-column-function-red-example';
      }
    } 
    if (valuetest > 2000 && (colIdx === 3 || colIdx === 1)) {
      return 'td-column-function-green-example';
    }
    return "";

  }


  render() {
    const values = {
      Metadata: [
        {
          "BodyDesc": "Client Name",
          "Propertykey": "UHC_DUNS_NAME",
          "Format": "STRING",
          "FormatValue": ""
        },
        {
          "BodyDesc": "Contract Count",
          "Propertykey": "CNT_CONTRACT_ID",
          "Format": "NUMBER",
          "FormatValue": ""
        },
        {
          "BodyDesc": "Revenue",
          "Propertykey": "REVENUE",
          "Format": "CURRENCY",
          "FormatValue": "($ 0.00 a)"
        },
        {
          "BodyDesc": "Revenue Growth",
          "Propertykey": "REVENUE_GROWTH",
          "Format": "PERCENT",
          "FormatValue": "0%"
        },
        {
          "BodyDesc": "EM",
          "Propertykey": "EM_PERC",
          "Format": "PERCENT",
          "FormatValue": "0%"
        },
        {
          "BodyDesc": "EM Growth",
          "Propertykey": "EM_GROWTH_PTS",
          "Format": "POINTS",
          "FormatValue": "Pts"
        },
        {
          "BodyDesc": "Charged Hours",
          "Propertykey": "CHARGED_HOURS",
          "Format": "NUMBER",
          "FormatValue": ""
        },
        {
          "BodyDesc": "RPH",
          "Propertykey": "RPH",
          "Format": "CURRENCY",
          "FormatValue": "($ 0.00 a)"
        }
      ],
      CardData: [
        {
          "UHC_DUNS_NAME": "NRG Energy Inc.",
          "CNT_CONTRACT_ID": 1,
          "REVENUE": -123,
          "REVENUE_GROWTH": null,
          "EM_PERC": 0.35,
          "EM_GROWTH_PTS": -10,
          "CHARGED_HOURS": 38,
          "RPH": 0.10
        },
        {
          "UHC_DUNS_NAME": "Sycamore Partners Management, ",
          "CNT_CONTRACT_ID": 2,
          "REVENUE": 95034,
          "REVENUE_GROWTH": null,
          "EM_PERC": 0.35,
          "EM_GROWTH_PTS": null,
          "CHARGED_HOURS": 16775,
          "RPH": 0
        },

        {
          "UHC_DUNS_NAME": "Walmart Inc.",
          "CNT_CONTRACT_ID": 1,
          "REVENUE": 123213,
          "REVENUE_GROWTH": null,
          "EM_PERC": 0.35,
          "EM_GROWTH_PTS": null,
          "CHARGED_HOURS": 2,
          "RPH": 0
        },
        {
          "UHC_DUNS_NAME": "Walmart Inc.",
          "CNT_CONTRACT_ID": 1,
          "REVENUE": -684,
          "REVENUE_GROWTH": null,
          "EM_PERC": 0.35,
          "EM_GROWTH_PTS": null,
          "CHARGED_HOURS": 2,
          "RPH": 0
        }
      ]


    }

    const valuescardData = values.CardData;
    for (let i = 0; i < valuescardData.length; i++) {
      valuescardData[i].id = i;
    }
    return (
    <div>
     
      
      <BootstrapTable id="bootstraptableid" data={valuescardData} striped={true} hover={true}>
        <TableHeaderColumn dataField="id" key="id" isKey={true} hidden>Product ID</TableHeaderColumn>
        {values.Metadata.map((column, index) =>
          <TableHeaderColumn dataField={column.Propertykey} key={index}
            columnClassName={this.columnClassNameFormat.bind(this)}
          >{column.BodyDesc}</TableHeaderColumn>
        )}
      </BootstrapTable>
      </div>
      );
  }
}
