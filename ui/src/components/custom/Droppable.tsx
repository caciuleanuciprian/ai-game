import { useDroppable } from "@dnd-kit/core";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function Droppable(props: any) {
	const { style } = props;
	const { isOver, setNodeRef } = useDroppable({
		id: props.id,
		data: {
			supports: "element",
		},
	});
	const baseStyle = {
		backgroundColor: isOver ? "green" : undefined,
	};

	return (
		<div ref={setNodeRef} style={{ ...style, ...baseStyle }}>
			here is the droppable area
			{props.children}
		</div>
	);
}
