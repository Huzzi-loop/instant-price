import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box, Button, Group, Stack, Title } from "@mantine/core";
import CryptoTable from "./components/CryptoTable";
import { useDisclosure } from "@mantine/hooks";
import CryptoForm from "./components/CryptoForm";
import client from "./client";
import { useDispatch } from "react-redux";
import { updateList } from "./redux/slices/coins";

function App() {
  const [
    openedCryptotForm,
    { open: openCryptotForm, close: closeCryptotForm },
  ] = useDisclosure(false);

  const dispatch = useDispatch();

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
    fetchCryptoList();
  }, []);

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
        <CryptoTable />
      </Stack>
    </Box>
  );
}

export default App;
