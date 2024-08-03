import { Autocomplete, Button, Modal, Stack, Title } from "@mantine/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCoin } from "../redux/slices/coins";

function CryptoForm({ opened, close }) {
  const { list, selectedCoin } = useSelector((state) => state.coins);
  const dispatch = useDispatch();

  const onSubmit = (value) => {
    dispatch(selectCoin(value));
    close();
  };

  return (
    <Modal
      opened={opened}
      onClose={close}
      title={<Title order={4}>Select Crypto Currency</Title>}
      size="lg"
      centered
      pos="relative"
    >
      <Stack gap="md">
        <Autocomplete
          data={list.map((coin) => coin.name)}
          placeholder="Pick value or enter anything"
          onOptionSubmit={onSubmit}
        />
      </Stack>
    </Modal>
  );
}

export default CryptoForm;
