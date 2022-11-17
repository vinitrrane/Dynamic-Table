import React from 'react'
import './App.css';
import Table from './components/Table';

function App() {

  const task = {
    Header: [
      "Sr.No.",
      "Unique_ID",
      "State",
      "Project_Name",
      "Images",
      "CreatedBy",
      "Name"

    ],
    Data: [
      {
        "Sr.No.": "1",
        UniqueID: "d47efd4850124d5db40b5258befa3ca8",
        State: "COMPLETED",
        CreatedBy: "shyam",
        ProjectName: "Vehicle",
        Images: [
          "https://picsum.photos/200/200",
          "https://picsum.photos/400/400",
        ], Name: 'Vinit'

      },
      {
        "Sr.No.": "2",
        UniqueID: "672ed62537c54c65b2d3b66dc4b32edb",
        State: "",
        CreatedBy: "ram",
        ProjectName: "person",
        Images: [
          "https://picsum.photos/300/300",
          "https://picsum.photos/400/400",
          "https://picsum.photos/500/500",
        ],
      },
      {
        "Sr.No.": "3",
        UniqueID: "7b2c29670fea4517838db55424e55bae",
        State: "ACTIVE",
        CreatedBy: "shyam",
        ProjectName: "Signal",
        Images: [
          "https://picsum.photos/400/400",
          "https://picsum.photos/500/500",
        ],
      },
      {
        "Sr.No.": "4",
        UniqueID: "d47efd4850124d5db40b5258befa3cb6",
        State: "COMPLETED",
        CreatedBy: "shyam",
        ProjectName: "Train",
        Images: [
          "https://picsum.photos/300/300",
          "https://picsum.photos/500/500",
        ],
      },
      {
        "Sr.No.": "5",
        UniqueID: "672ed62537c54c65b2d3b66dc4b32ed9",
        State: "COMPLETED",
        CreatedBy: "ram",
        ProjectName: "people",
        Images: [
          "https://picsum.photos/600/600",
          "https://picsum.photos/400/400",
          "https://picsum.photos/500/500",
        ],
      },
      {
        "Sr.No.": "6",
        UniqueID: "7b2c29670fea4517838db55424e55ba1",
        State: "FAILED",
        CreatedBy: "ram",
        ProjectName: "cloths",
        Images: [
          "https://picsum.photos/300/300",
          "https://picsum.photos/400/400",
        ],
      },
      {
        "Sr.No.": "7",
        UniqueID: "d47efd4850124d5db40b5258beba5ca8",
        State: "PENDING",
        CreatedBy: "shyam",
        ProjectName: "helmet",
        Images: ["https://picsum.photos/300/300"],
      },
      {
        "Sr.No.": "8",
        UniqueID: "672ed62537c54c65b2d3b66dccv32edb",
        State: "COMPLETED",
        CreatedBy: "ram",
        ProjectName: "dog",
        Images: [
          "https://picsum.photos/300/300",
          "https://picsum.photos/500/500",
        ],
      },
      {
        "Sr.No.": "9",
        UniqueID: "7b5a29670fea4517838db55424e55bae",
        State: "ACTIVE",
        CreatedBy: "shyam",
        ProjectName: "airplane",
        Images: [
          "https://picsum.photos/450/450",
          "https://picsum.photos/400/400",
          "https://picsum.photos/500/500",
        ],
      },
      {
        "Sr.No.": "10",
        UniqueID: "d47ef5410124d5db40b5258befa3cb6",
        State: "COMPLETED",
        CreatedBy: "shyam",
        ProjectName: "wheel",
        Images: [
          "https://picsum.photos/350/350",
          "https://picsum.photos/400/400",
        ],
      },
      {
        "Sr.No.": "11",
        UniqueID: "985ed62537c54c65b2d3b66dc4b32ed9",
        State: "COMPLETED",
        CreatedBy: "ram",
        ProjectName: "cat",
        Images: [],
      },
      {
        "Sr.No.": "12",
        UniqueID: "7b2c54770fea4517838db55424e55ba1",
        State: "FAILED",
        CreatedBy: "ram",
        ProjectName: "door close",
        Images: [
          "https://picsum.photos/400/400",
          "https://picsum.photos/500/500",
        ],
      },
    ],
  }

  return (
    <div className="App">
      <Table alltask={task} />
    </div>
  );
}

export default App;
