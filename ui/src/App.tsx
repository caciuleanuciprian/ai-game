import { Flex } from "@chakra-ui/react";
import { SideBar } from "./components/custom/SideBar";
import { GameScene } from "./components/custom/GameScene";
import { DndContext } from "@dnd-kit/core";
import React from "react";

export const App = () => {
	const [parent, setParent] = React.useState(null);
	const handleDragStart = (event: any) => {
		console.log("Drag started", event);
	};
	const handleDragEnd = (event: any) => {
		const { over } = event;
		setParent(over ? over.id : null);
	};

	return (
		<Flex width="full" height="full">
			<DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
				<GameScene />
				<SideBar />
			</DndContext>
		</Flex>
	);
};
