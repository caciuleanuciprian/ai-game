import { Flex } from "@chakra-ui/react";
import { Droppable } from "./Droppable";

export const GameScene = () => {
	return (
		<Flex width="full" height="vh" backgroundColor="blue">
			<Droppable
				id="game-scene"
				className={{ width: "100%", height: "100%", backgroundColor: "green" }}
			/>
		</Flex>
	);
};
