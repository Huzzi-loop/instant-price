import { Autocomplete, Button, Modal, Stack, Title } from "@mantine/core";
import React from "react";

function CryptoForm({ opened, close }) {
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
          data={["React", "Angular", "Vue", "Svelte"]}
          placeholder="Pick value or enter anything"
        />

        <Button type="submit" variant="filled" size="sm">
          Save
        </Button>
      </Stack>
    </Modal>
  );
}

export default CryptoForm;
