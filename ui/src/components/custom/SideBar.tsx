import { MAIN_WORDS_LIST } from "@/utils/const";
import { Flex, Text } from "@chakra-ui/react";
import { Draggable } from "./Draggable";

export const SideBar = () => {
	return (
		<Flex width="sm" height="vh" backgroundColor="red" p="4" flexDir="column">
			<SideBarTitle />
			<Flex gap="2" flexWrap="wrap">
				{MAIN_WORDS_LIST.map((word) => (
					<Draggable key={word} id={word}>
						{word}
					</Draggable>
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
