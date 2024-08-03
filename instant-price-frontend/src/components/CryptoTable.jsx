import React from "react";
import { Card, Table } from "@mantine/core";

const elements = [
  {
    position: 1,
    name: "Hydrogen",
    symbol: "H",
    mass: 1.008,
  },
  {
    position: 2,
    name: "Helium",
    symbol: "He",
    mass: 4.0026,
  },
  {
    position: 3,
    name: "Lithium",
    symbol: "Li",
    mass: 6.94,
  },
  {
    position: 4,
    name: "Beryllium",
    symbol: "Be",
    mass: 9.0122,
  },
];

function CryptoTable() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Card shadow="md">
      <Table withColumnBorders highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ textAlign: "center" }}>Time</Table.Th>
            <Table.Th style={{ textAlign: "center" }}>Current Price</Table.Th>
            <Table.Th style={{ textAlign: "center" }}>High (24hrs)</Table.Th>
            <Table.Th style={{ textAlign: "center" }}>Low (24 hrs)</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Card>
  );
}

export default CryptoTable;