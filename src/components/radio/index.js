import { Box } from "@chakra-ui/layout";
import { CheckIcon } from "@chakra-ui/icons";

export function Radio({ checked, onClick }) {
  return (
    <>
      {checked && (
        <CheckIcon color="brand.primary" w={4} h={4} onClick={onClick} />
      )}
      {!checked && (
        <Box
          borderRadius={"100%"}
          border="2px"
          borderColor="brand.dark"
          w={4}
          h={4}
          onClick={onClick}
        ></Box>
      )}
    </>
  );
}
