import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

const rand = () => Math.floor(Math.random() * 255);

const genData = (props) => ({
  labels: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
  ],
  datasets: [
    // {
    //   type: 'line',
    //   label: 'Massas Pré-Pago',
    //   borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
    //   borderWidth: 2,
    //   fill: false,
    //   data: [rand(), rand(), rand(), rand(), rand(), rand()],
    // },
    {
      type: "bar",
      label: "Massas Pré-Pago",
      backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      borderColor: "white",
      borderWidth: 2,
    },
    {
      type: "bar",
      label: "Massas Pós-Pago",
      backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand()],
    },
  ],
});

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
const data = genData();

const ClickEvents = () => {
  const [clickedDataset, setClickedDataset] = useState("");
  const [clickedElement, setClickedElement] = useState("");
  const [clickedElements, setClickedElements] = useState("");

  const getDatasetAtEvent = (dataset) => {
    if (!dataset.length) return;

    const datasetIndex = dataset[0].datasetIndex;
    setClickedDataset(data.datasets[datasetIndex].label);
  };

  const getElementAtEvent = (element) => {
    if (!element.length) return;

    const { datasetIndex, index } = element[0];
    setClickedElement(
      `${data.labels[index]} - ${data.datasets[datasetIndex].data[index]}`
    );
  };

  const getElementsAtEvent = (elements) => {
    if (!elements.length) return;

    setClickedElements(elements.length);
  };

  return (
    <>
      <Bar
        data={data}
        options={options}
        getDatasetAtEvent={getDatasetAtEvent}
        getElementAtEvent={getElementAtEvent}
        getElementsAtEvent={getElementsAtEvent}
      />
      <div className="text-center">
        <p>{clickedElement}</p>
        <p>{clickedDataset}</p>
        <p>{clickedElements}</p>
      </div>
    </>
  );
};

export default ClickEvents;
