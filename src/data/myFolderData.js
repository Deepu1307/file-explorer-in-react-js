// export const myExplorer = {
//     id: "1",
//     name: "root",
//     isFolder: true,
//     items: [
//         {
//             id: "2",
//             name: "public",
//             isFolder: 'true',
//             items: [
//                 {
//                     id: "3",
//                     name: "public nested folder",
//                     isFolder: true,
//                     items: [
//                         {
//                             id: "4",
//                             name: "index.html",
//                             isFolder: false,
//                             items: []
//                         },
//                         {
//                             id: "5",
//                             name: "hello.html",
//                             isFolder: false,
//                             items: []
//                         },

//                     ]
//                 },
//                 {
//                     id: "6",
//                     name: "public_nested_file",
//                     isFolder: false,
//                     items: []
//                 }

//             ]
//         },
//         {
//             id: "7",
//             name: "src",
//             isFolder: 'true',
//             items: [{
//                 id: "8",
//                 name: "components",
//                 isFolder: true,
//                 items: [{
//                     id: "9",
//                     name: "Header",
//                     isFolder: true,
//                     items: [
//                         {
//                             id: "10",
//                             name: "Header.js",
//                             isFolder: false,
//                             items: []
//                         },
//                         {
//                             id: "11",
//                             name: "header.css",
//                             isFolder: false,
//                             items: []
//                         },
//                     ]
//                 }]
//             },
//             {
//                 id: "12",
//                 name: "App.js",
//                 isFolder: true,
//                 items: []
//             },
//             {
//                 id: "13",
//                 name: "Index.js",
//                 isFolder: true,
//                 items: []
//             }
//         ]
//         },
//         {
//             id: "6",
//             name: "package.json",
//             isFolder: 'false',
//             items: []
//         }
//     ]
// }

const explorer = {
    id:"1",
    name: "root",
    isFolder: true,
    items: [
      {
        id:"2",
        name: "public",
        isFolder: true,
        items: [
          {
            id:"3",
            name: "public nested 1",
            isFolder: true,
            items: [
              {
                id:"4",
                name: "index.html",
                isFolder: false,
                items: []
              },
              {
                id:"5",
                name: "hello.html",
                isFolder: false,
                items: []
              }
            ]
          },
          {
            id:"6",
            name: "public_nested_file",
            isFolder: false,
            items: []
          }
        ]
      },
      {
        id:"7",
        name: "src",
        isFolder: true,
        items: [
          {
            id:"8",
            name: "App.js",
            isFolder: false,
            items: []
          },
          {
            id:"9",
            name: "Index.js",
            isFolder: false,
            items: []
          },
          {
            id:"10",
            name: "styles.css",
            isFolder: false,
            items: []
          }
        ]
      },
      {
        id:"11",
        name: "package.json",
        isFolder: false,
        items: []
      }
    ]
  };
  
  export default explorer;