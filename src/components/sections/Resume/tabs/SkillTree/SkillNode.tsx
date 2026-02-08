import React, { memo } from 'react';

import { Handle, Position, type NodeProps } from '@xyflow/react';

import { CATEGORY_COLORS, type SkillNodeData } from '@/utils/constants/skillTreeData';

const SkillNode: React.FC<NodeProps> = memo(({ data }) => {
	const nodeData = data as SkillNodeData;
	const { category, icon: Icon, isCategory, label } = nodeData;
	const colors = CATEGORY_COLORS[category];

	return (
		<div
			className={`
				relative px-4 py-2 rounded-lg shadow-lg border-2 transition-all duration-300
				hover:scale-110 hover:z-10 cursor-pointer
				${isCategory ? 'min-w-[140px]' : 'min-w-[100px]'}
			`}
			style={{
				background: `linear-gradient(135deg, ${colors.bg}dd, ${colors.bg})`,
				borderColor: colors.border,
				boxShadow: `0 4px 14px ${colors.glow}`
			}}
		>
			{/* Input Handle (top) */}
			<Handle
				className='!bg-white !border-2 !w-3 !h-3'
				position={Position.Top}
				style={{ borderColor: colors.border }}
				type='target'
			/>

			{/* Content */}
			<div className='flex items-center justify-center gap-2'>
				{Icon && <Icon className='text-white' size={isCategory ? 20 : 16} />}

				<span
					className={`
						text-white font-semibold text-center whitespace-nowrap
						${isCategory ? 'text-sm' : 'text-xs'}
					`}
				>
					{label}
				</span>
			</div>

			{/* Output Handle (bottom) */}
			<Handle
				className='!bg-white !border-2 !w-3 !h-3'
				position={Position.Bottom}
				style={{ borderColor: colors.border }}
				type='source'
			/>
		</div>
	);
});

SkillNode.displayName = 'SkillNode';

export default SkillNode;
