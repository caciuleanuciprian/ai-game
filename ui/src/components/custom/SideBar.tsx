import { MAIN_WORDS_LIST } from "@/utils/const";
import { Button, Flex, Text } from "@chakra-ui/react";

export const SideBar = () => {
	return (
		<Flex width="sm" height="vh" backgroundColor="red" p="4" flexDir="column">
			<SideBarTitle />
			<Flex gap="2" flexWrap="wrap">
				{MAIN_WORDS_LIST.map((word) => (
					<Button key={word} width="min-content">
						{word}
					</Button>
				))}
			</Flex>
		</Flex>
	);
};

const SideBarTitle = () => {
	return (
		<Text fontSize="2xl" mb="4">
			Words
		</Text>
	);
};
