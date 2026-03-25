import { Button, H2, Paragraph, XStack, YStack } from "tamagui";

const index = () => {
  return (
    <YStack flex={1} justifyContent={"center"} alignItems="center" gap={10}>
      <H2>Hello Tamagui</H2>
      <Paragraph>Đây là màn hình đầu tiên dùng Tamagui.</Paragraph>

      <XStack gap={10}>
        <Button theme={"dark"}>Primary</Button>
        <Button>Active</Button>
      </XStack>
    </YStack>
  );
};

export default index;
