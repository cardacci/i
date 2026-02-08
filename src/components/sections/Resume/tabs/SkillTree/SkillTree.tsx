import React, { useCallback, useMemo } from 'react';

import { Background, BackgroundVariant, Controls, MiniMap, ReactFlow, useEdgesState, useNodesState, type Node } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { CATEGORY_COLORS, defaultEdgeOptions, initialEdges, initialNodes } from '@/utils/constants/skillTreeData';

import SkillNode from './SkillNode';
import './skillTree.css';

const SkillTree: React.FC = () => {
	const [edges, , onEdgesChange] = useEdgesState(initialEdges);
	const [nodes, , onNodesChange] = useNodesState(initialNodes);

	/* ===== Custom Node Types ===== */
	const nodeTypes = useMemo(
		() => ({
			skillNode: SkillNode
		}),
		[]
	);

	/* ===== Minimap Node Color ===== */
	const getMinimapNodeColor = useCallback((node: Node) => {
		const category = (node.data as { category?: string })?.category;

		if (category && category in CATEGORY_COLORS) {
			return CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS].bg;
		}

		return '#94a3b8';
	}, []);

	return (
		<div className='skill-tree-container'>
			<ReactFlow
				attributionPosition='bottom-left'
				defaultEdgeOptions={defaultEdgeOptions}
				edges={edges}
				fitView
				fitViewOptions={{
					maxZoom: 1.2,
					padding: 0.2
				}}
				maxZoom={2}
				minZoom={0.3}
				nodes={nodes}
				nodeTypes={nodeTypes}
				onEdgesChange={onEdgesChange}
				onNodesChange={onNodesChange}
				proOptions={{ hideAttribution: true }}
			>
				<Background color='#cbd5e1' gap={20} size={1} variant={BackgroundVariant.Dots} />

				<Controls position='bottom-right' showInteractive={false} />

				<MiniMap maskColor='rgba(0, 0, 0, 0.1)' nodeColor={getMinimapNodeColor} pannable position='top-right' zoomable />
			</ReactFlow>
		</div>
	);
};

export default SkillTree;
