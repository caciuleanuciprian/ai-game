import { Flex } from "@chakra-ui/react";
import { SideBar } from "./components/custom/SideBar";
import { GameScene } from "./components/custom/GameScene";

export const App = () => {
	return (
		<Flex width="full" height="full">
			<GameScene />
			<SideBar />
		</Flex>
	);
};
