import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Alert, Box, Button, Group, Stack, Text, Title } from "@mantine/core";
import CryptoTable from "./components/CryptoTable";
import { useDisclosure } from "@mantine/hooks";
import CryptoForm from "./components/CryptoForm";
import client from "./client";
import { useDispatch, useSelector } from "react-redux";
import { resetState, setCoinData, updateList } from "./redux/slices/coins";
import { IconInfoCircle } from "@tabler/icons-react";

import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_API_URL, {
  autoConnect: false,
});

function App() {
  const { selectedCoin } = useSelector((state) => state.coins);
  const dispatch = useDispatch();

  const [
    openedCryptotForm,
    { open: openCryptotForm, close: closeCryptotForm },
  ] = useDisclosure(false);

  const fetchCryptoList = async () => {
    try {
      const { data: res, status } = await client.get("/crypto-list");
      if (status === 200) {
        dispatch(updateList(res));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    //Fetching list of crypto currencies
    fetchCryptoList();
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (selectedCoin === null) return;
    console.log(selectedCoin);
    socket.emit("getCryptoData", selectedCoin);

    socket.on("data", (cryptoData) => {
      console.log("Received data from server:", cryptoData);
      dispatch(setCoinData(cryptoData));
    });

    return () => {
      socket.off("data");
    };
  }, [selectedCoin]);

  return (
    <Box>
      {openedCryptotForm && (
        <CryptoForm opened={openedCryptotForm} close={closeCryptotForm} />
      )}
      <Stack>
        <Group justify="space-between">
          <Title order={1}>Welcome to Instant Price</Title>
          <Button onClick={openCryptotForm}>Choose a crypto Currency</Button>
        </Group>
        {selectedCoin === null ? (
          <Group justify="end">
            <Alert
              variant="light"
              color="blue"
              title="Note"
              icon={<IconInfoCircle />}
            >
              <Text>Kindly select a crypto currency to view its data !</Text>
            </Alert>
          </Group>
        ) : (
          <CryptoTable />
        )}
      </Stack>
    </Box>
  );
}

export default App;
