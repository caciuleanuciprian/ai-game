import { useDraggable } from "@dnd-kit/core";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function Draggable(props: any) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: props.id,
		data: {
			type: "element",
		},
	});
	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
			}
		: undefined;

	return (
		<button ref={setNodeRef} style={style} {...listeners} {...attributes}>
			{props.children}
		</button>
	);
}
