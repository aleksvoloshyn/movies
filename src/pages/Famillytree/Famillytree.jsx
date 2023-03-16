import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.css'
import './famillytree.css'
import React, { useState } from 'react'

import { OrganizationChart } from 'primereact/organizationchart'

const Famillytree = () => {
  const [selection, setSelection] = useState([])
  const data1 = [
    {
      label: 'ME',
      type: 'person',
      className: 'p-person',
      expanded: true,
      data: { name: 'Alex Voloshyn', avatar: 'alex' },
      children: [
        {
          label: 'wife',
          type: 'person',
          className: 'p-person',
          // expanded: true,
          data: { name: 'G', avatar: 'jane' },
          // children: [
          //   {
          //     label: 'Tax',
          //     className: 'department-cfo',
          //   },
          //   {
          //     label: 'Legal',
          //     className: 'department-cfo',
          //   },
          // ],
        },
        {
          label: 'Children',
          className: 'department-cto',
          expanded: true,
          children: [
            {
              label: 'son',
              className: 'p-person',
              type: 'person',
              data: { name: 'T', avatar: 'tykhon' },
              // className: 'department-cto',
            },
            {
              label: 'doughter',
              className: 'p-person',
              type: 'person',
              data: { name: 'D', avatar: 'daria' },
              // className: 'department-cto',
            },
          ],
        },
        {
          label: 'Cats',
          className: 'department-cto',
          expanded: true,
          children: [
            {
              label: 'cat',
              className: 'p-person',
              type: 'person',
              data: { name: 'Anchous', avatar: 'anchous' },
              // className: 'department-cto',
            },
            {
              label: 'pussycat',
              className: 'p-person',
              type: 'person',
              data: { name: 'Peppy', avatar: 'peppy' },
              // className: 'department-cto',
            },
          ],
        },
      ],
    },
  ]

  // const data2 = [
  //   {
  //     label: 'Alexei Voloshyn (me)',
  //     expanded: true,
  //     data: { name: 'Alex Vol', avatar: 'alex.jpg' },
  //     children: [
  //       {
  //         label: 'Wife',
  //       },
  //       {
  //         label: 'Children',
  //         expanded: true,
  //         children: [
  //           {
  //             label: 'Son',
  //           },
  //           {
  //             label: 'Doghter',
  //           },
  //         ],
  //       },
  //       {
  //         label: 'Cats',
  //         expanded: true,
  //         children: [
  //           {
  //             label: 'Peppylota',
  //           },
  //           {
  //             label: 'Anchous',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ]

  const nodeTemplate = (node) => {
    if (node.type === 'person') {
      return (
        <div>
          <div className="node-header">{node.label}</div>
          <div className="node-content">
            <img
              alt={node.data.avatar}
              // src={`/static/media/${
              //   node.data.avatar + '.1998db2076a98cfa0754.jpg'
              // }`}
              src={`images/organization/${node.data.avatar}`}
              onError={(e) =>
                (e.target.src =
                  'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
              }
              style={{ width: '32px' }}
            />
            <div>{node.data.name}</div>
          </div>
        </div>
      )
    }

    return node.label
  }

  return (
    <div className="organizationchart-demo">
      <div className="card">
        <OrganizationChart
          value={data1}
          nodeTemplate={nodeTemplate}
          selection={selection}
          selectionMode="multiple"
          onSelectionChange={(event) => {
            console.log(event.data)
            setSelection(event.data)
          }}
          // onSelectionChange={(event) => {
          //   setSelection(event.data)
          // }}
          className="company"
        ></OrganizationChart>
        {/* // <OrganizationChart value={data2}></OrganizationChart> */}
      </div>
    </div>
  )
}

export default Famillytree
