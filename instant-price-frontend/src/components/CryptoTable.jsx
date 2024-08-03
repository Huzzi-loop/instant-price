import React from "react";
import {
  Card,
  Group,
  NumberFormatter,
  Stack,
  Table,
  Title,
} from "@mantine/core";
import { useSelector } from "react-redux";

// Function to convert ISO timestamp to IST
function convertToIndianDateTime(isoTimestamp) {
  // Create a Date object from the ISO timestamp
  const date = new Date(isoTimestamp);

  // Convert date to IST timezone
  const options = {
    timeZone: "Asia/Kolkata", // IST timezone
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // Use 24-hour format
  };

  // Format the date to Indian date and time
  const formatter = new Intl.DateTimeFormat("en-IN", options);
  return formatter.format(date);
}

function CryptoTable() {
  const { selectedCoin, coinData } = useSelector((state) => state.coins);
  const rows = coinData.map((element) => (
    <Table.Tr key={element._id}>
      <Table.Td>{convertToIndianDateTime(element.last_updated)}</Table.Td>
      <Table.Td>
        <NumberFormatter
          prefix="₹"
          value={element.current_price}
          decimalScale={2}
          fixedDecimalScale
          thousandSeparator
          thousandsGroupStyle="lakh"
        />
      </Table.Td>
      <Table.Td>
        <NumberFormatter
          prefix="₹"
          value={element.high_24h}
          decimalScale={2}
          fixedDecimalScale
          thousandSeparator
          thousandsGroupStyle="lakh"
        />
      </Table.Td>
      <Table.Td>
        <NumberFormatter
          prefix="₹"
          value={element.low_24h}
          decimalScale={2}
          fixedDecimalScale
          thousandSeparator
          thousandsGroupStyle="lakh"
        />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Card shadow="md">
      <Stack gap="md">
        <Group>
          <Title order={3}>{selectedCoin?.name}</Title>
        </Group>

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
      </Stack>
    </Card>
  );
}

export default CryptoTable;
